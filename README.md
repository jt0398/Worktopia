<h1 align="center">Worktopia - Building the culture of sharing workspaces!<h1>
https://frozen-spire-07685.herokuapp.com/

### Contributors

1. [Judy Tan](https://github.com/jt0398)
2. [Sachin Jhaveri](https://github.com/sachin796)
3. [Vicky Law](https://github.com/vlaw1217)
4. [Manseerat Kaur](https://github.com/seeratsidhu)
5. [Unnikrishnan Ramachandran](https://github.com/unnikrishnan-r)

## Table of Contents

1. [Overview](#Overview)
2. [What does Worktopia do for you?](#What-does-Worktopia-do-for-you?)
3. [Technology Stack](#Technology-Stack)
4. [Tech Stack](#tech-stack)
5. [Getting Started](#getting-started)
   - [Setting up Development Environment](#setting-up-dev)

## Overview

Co-working is the next big thing!!! Worktopia aims at disrupting the real estate industry and establish a new business mode - **Space As A Service (SpaaS)**.

![](https://assets-global.website-files.com/5b0eb78d23154b82952ae4b1/5cd5a39342c8b562267c64b5_cwgrowthstudy-01.png)

## What does Worktopia do for you?

[^top](#table-of-contents)

Worktopia offers a platform for letting out workspaces on completely your terms.

- Part of the floor? - Sure, why not?
- Couple of days a week? - Ofcourse...
- Unfurnished, long term? - We hear you!
  and the options are endless!!!

And don't jump to conclusions, the same flexibility is available for potential leasees as well!

- Want to brew some coffee while at work? - No one can say no to that
- Amphitheatre? - We got that one too
- 3D printing? - Point taken

In essence, Worktopia aims to solve the perennial problem of supply and demand in the workspace domain.
Leave the hassles of fineprints and legal contracts to the experts while you enjoy a productive workday!!

Read more about [Worktopia](https://docs.google.com/presentation/d/1OFudiB5juLJJPnSSshA1n2ZsBayK_iOFlRZcMc0DU7E/edit#slide=id.g7949ea32d0_1_81)

[Project Proposal](WorkTopia_Project_Proposal.md)

See a [demo](https://youtu.be/Zt35HXKYzzI)

## Tech Stack

[^top](#table-of-contents)

- ### Front End

   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XImA7fcTYFk81l7IUpQqnx9R3Ae1d_QLEkBgzhj0x1tP8e7H&s" width="100" height="100"> 
   <img src="https://github.com/unnikrishnan-r/food-bank/blob/master/public/img/html.png?raw=true" width="100" height="100"> 
   <img src="https://github.com/unnikrishnan-r/food-bank/blob/master/public/img/css.png?raw=true" width="100" height="100">
   <img src="https://github.com/unnikrishnan-r/food-bank/blob/master/public/img/jquery.png?raw=true" width="100" height="100"> 
   <img src="https://github.com/unnikrishnan-r/food-bank/blob/master/public/img/bootstrap.png?raw=true" width="100" height="100">

- ### Server Side

    <img src="https://github.com/unnikrishnan-r/food-bank/blob/master/public/img/npm.png?raw=true" width="200" height="100"> 
    <img src="https://github.com/unnikrishnan-r/food-bank/blob/master/public/img/moemnt.png?raw=true" width="100" height="100"> 
    <img src="https://github.com/unnikrishnan-r/food-bank/blob/master/public/img/express.png?raw=true" width="200" height="100"> 
    <img src="https://d1o2okarmduwny.cloudfront.net/wp-content/uploads/2015/02/amazon-s3_preview.png" width="200" height="100"> 
    <img src="https://icon-library.net/images/stripe-icon/stripe-icon-18.jpg" width="200" height="100"> 

- ### Database
    <img src="https://github.com/unnikrishnan-r/food-bank/blob/master/public/img/sequelize.png?raw=true" width="200" height="100"> 
    <img src="https://github.com/unnikrishnan-r/food-bank/blob/master/public/img/mysql.png?raw=true" width="200" height="100"> 

## Getting Started

- ### Setting up Development Environment

  1. Use [config.json](./server/config/config.json) to set up the development, test and production database connections
  2. Register for a account in [Stripe](https://stripe.com/en-ca) and obtain auth publishable and secret keys
  3. Setup account in [AWS](https://aws.amazon.com/s3/) and enable S3 Storage services, obtain Access and Secret Access keys. Also create an S3 bucket
  4. ENV variables (SERVER):

     - NODE_DEV : development/test
     - SYNC_MODEL: true (sequelize will force sync the model) , false (sequelize will not force sync the model)
     - REACT_APP_STRIPE_PUBLISHABLE_KEY (Publishable Key from Stripe)
     - REACT_APP_STRIPE_SECRET_KEY (Secret Key from Stripe)
     - AWS_ACCESS_KEY_ID (AWS Acess Key)
     - AWS_SECRET_ACCESS_KEY (AWS Secret Access Key)
     - S3_BUCKET_NAME (S3 bucket name to upload images)

  5. If tables are wiped clean due to syncing of models, use [seeds.sql](./server/helpers/seeds.sql) to populate test data

- ### Guest Login Details
  ### Login as Landlord
        - User Id: landlord
        - Password: abcd
  ### Login as Tenant
        - User Id: tenant
        - Password: abcd
