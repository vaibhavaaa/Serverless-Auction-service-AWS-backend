import AWS from 'aws-sdk';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';
import createHttpError from 'http-errors';
import { getAuctionById } from './getAuction.js';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function placeBid(event, context) {
  const { id } = event.pathParameters;
  const { amount } = event.body;

  if (!amount) {
    throw new createHttpError.BadRequest("Missing bid amount in request body");
  }

  const auction = await getAuctionById(id);

  if (auction.status !== 'OPEN') {
    throw new createHttpError.Forbidden("You cannot bid on closed auctions");
  }

  if (amount <= auction.highestBid.amount) {
    throw new createHttpError.Forbidden(
      `Your bid must be higher than ${auction.highestBid.amount}`
    );
  }

  const params = {
    TableName: process.env.AUCTIONS_TABLE_NAME,
    Key: { id },
    UpdateExpression: 'set highestBid = :highestBid',
    ExpressionAttributeValues: {
      ':highestBid': {
        amount,
      },
    },
    ReturnValues: 'ALL_NEW',
  };

  let updatedAuction;

  try {
    const result = await dynamodb.update(params).promise();
    updatedAuction = result.Attributes;
  } catch (error) {
    console.error("❌ DynamoDB update failed:", error);
    throw new createHttpError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(updatedAuction),
  };
}

export const handler = middy(placeBid)
  .use(httpJsonBodyParser())
  .use(httpEventNormalizer())
  .use(httpErrorHandler());
