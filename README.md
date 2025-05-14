# Serverless Auction Backend 🛠️

A complete backend for a real-time auction service using AWS Serverless technologies.

## Tech Stack
- AWS Lambda
- DynamoDB
- API Gateway
- IAM
- CloudFormation
- Serverless Framework
- Node.js
- Middy middleware

## Features
- Create Auction
- Fetch Auction by ID
- Place a Bid
- Serverless CRUD with AWS SDK
- Logging via CloudWatch

## Architecture Overview

Here is a high-level overview of the serverless architecture:

![Basecode](https://raw.githubusercontent.com/vaibhavaaa/Serverless-Auction-service-AWS-backend/main/assets/Basecode.png)

### CloudFormation
The infrastructure is defined using **CloudFormation**, which ensures consistent and reproducible deployments.

![CloudFormation](https://raw.githubusercontent.com/vaibhavaaa/Serverless-Auction-service-AWS-backend/main/assets/Cloudformation.png)

### CloudWatch
AWS **CloudWatch** is used for logging and monitoring the backend services.

![CloudWatch](https://raw.githubusercontent.com/vaibhavaaa/Serverless-Auction-service-AWS-backend/main/assets/Cloudwatch.png)

### DynamoDB
**DynamoDB** is the NoSQL database used to store auction data.

![DynamoDB Overview](https://raw.githubusercontent.com/vaibhavaaa/Serverless-Auction-service-AWS-backend/main/assets/Dynamodb_overview.png)

## API Endpoints

### Get Auction by ID
This endpoint retrieves an auction by its unique ID.

![Get Auction by ID](https://raw.githubusercontent.com/vaibhavaaa/Serverless-Auction-service-AWS-backend/main/assets/getAuctionbyID.png)

### Get Auctions
This endpoint fetches all available auctions.

![Get Auctions](https://raw.githubusercontent.com/vaibhavaaa/Serverless-Auction-service-AWS-backend/main/assets/getAuctions.png)

### Place a Bid
This endpoint allows users to place bids on an auction.

![Place a Bid](https://raw.githubusercontent.com/vaibhavaaa/Serverless-Auction-service-AWS-backend/main/assets/post.png)

### Lambda Functions
The logic for handling each of the actions (like creating auctions, placing bids, etc.) is handled by **AWS Lambda** functions.

![Lambda Functions](https://raw.githubusercontent.com/vaibhavaaa/Serverless-Auction-service-AWS-backend/main/assets/LambdaFunctions.png)

### Lambda Code Example
Here is a snippet of the code running inside the Lambda function:

![Lambda Code](https://raw.githubusercontent.com/vaibhavaaa/Serverless-Auction-service-AWS-backend/main/assets/Lambdacode.png)

## Setup

```bash
npm install
cp .env.example .env
# Deploy if needed (optional)
# npx serverless deploy
