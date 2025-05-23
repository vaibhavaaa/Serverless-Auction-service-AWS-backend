import AWS from 'aws-sdk';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';
import createHttpError from 'http-errors';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export async function getAuctionById(id){
    let auction ;
    try {
        const result = await dynamodb.get({
             TableName : process.env.AUCTIONS_TABLE_NAME,
             Key : {
                id,
             }
    
        }).promise();
    
        auction = result.Item;
      } catch (error){
        console.error(error);
        throw new createHttpError.InternalServerError(error);
    
    
      }
    
    if(!auction){
        throw new createHttpError.NotFound(`Auction with ID "${id}" not found!`);
      }
    return auction ;
}

async function getAuction(event, context) {
  
  const {id} = event.pathParameters;
  const auction = await getAuctionById(id);



  return {
    statusCode: 200,
    body: JSON.stringify(auction),
  };
}


// ✅ Wrap your function with middy + middleware
export const handler = middy(getAuction)
  .use(httpEventNormalizer())
  .use(httpErrorHandler());
