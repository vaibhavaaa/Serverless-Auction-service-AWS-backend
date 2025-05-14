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
![Basecode](https://github.com/user-attachments/assets/daf8a335-4ae8-4ed1-b51b-16f45fe8cbf6)


### CloudFormation
The infrastructure is defined using **CloudFormation**, which ensures consistent and reproducible deployments.
![Cloudformation](https://github.com/user-attachments/assets/ce1339b6-32f3-4fed-beff-cea573643e6d)


### CloudWatch
AWS **CloudWatch** is used for logging and monitoring the backend services.
![Cloudwatch](https://github.com/user-attachments/assets/8cd9ff76-da22-4aac-9ef8-22dacb1ed0cd)


### DynamoDB
**DynamoDB** is the NoSQL database used to store auction data.
![Dynamodb_overview](https://github.com/user-attachments/assets/ec2e1ede-25a0-44b9-a121-0b6e0e1a5299)


## API Endpoints

### Create Auction 
This endpoint Creates the Item entry , for further Bid
![post](https://github.com/user-attachments/assets/f236becb-45b1-47cd-8c67-5aedfaf4d6d6)


### Get Auction by ID
This endpoint retrieves an auction by its unique ID.
![getAuctionbyID](https://github.com/user-attachments/assets/ff0fb3f1-8cfb-4931-af24-160fe8395d22)


### Get Auctions
This endpoint fetches all available auctions.
![GetAuctions](https://github.com/user-attachments/assets/60fd61bf-cd95-4f21-8070-f76378f41b66)


### Place a Bid
This endpoint allows users to place bids on an auction.
![patch](https://github.com/user-attachments/assets/71ad0dc4-99ac-473a-9bc5-e6bbe4f90d62)


### Lambda Functions
The logic for handling each of the actions (like creating auctions, placing bids, etc.) is handled by **AWS Lambda** functions.
![LamdaFunctions](https://github.com/user-attachments/assets/2e50af02-479e-4272-b3ac-a8b277437284)


### Lambda Code Example
Here is a snippet of the code running inside the Lambda function:
![Lambdacode](https://github.com/user-attachments/assets/f43f804b-1f39-418f-bbae-05d00d22934a)



## Setup

```bash
npm install
cp .env.example .env
# Deploy if needed (optional)
# npx serverless deploy
