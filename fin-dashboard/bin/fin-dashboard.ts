#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FinDashboardStack } from '../lib/fin-dashboard-stack';

const app = new cdk.App();
new FinDashboardStack(app, 'FinDashboardStack');
