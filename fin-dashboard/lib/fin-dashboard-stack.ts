import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';

const finDashboardSpec = require('../resources/api.yaml');

export class FinDashboardStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const yahooFinClient = new lambda.Function(this, 'YahooFinanceHandler', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'yahooFinanceClient.handler'
        });

        const api = new apigw.LambdaRestApi(this, 'Endpoint', {
            handler: yahooFinClient
        });

        const cfnRestApi = api.node.defaultChild as apigw.CfnRestApi;
        cfnRestApi.body = finDashboardSpec;
    }
}
