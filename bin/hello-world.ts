#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloWorldStack } from '../lib/hello-world-stack';

const skillId = process.env.SKILL_ID!;
const app = new cdk.App();
new HelloWorldStack(app, 'HelloWorldStack', {
  skillId
});
