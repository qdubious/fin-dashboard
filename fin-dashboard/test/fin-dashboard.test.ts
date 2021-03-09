import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as FinDashboard from '../lib/fin-dashboard-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new FinDashboard.FinDashboardStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
