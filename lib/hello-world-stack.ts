import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as nodeLambda from '@aws-cdk/aws-lambda-nodejs';

interface HelloWorldStackProps extends cdk.StackProps {
  skillId: string;
}
export class HelloWorldStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: HelloWorldStackProps) {
    super(scope, id, props);

    const handler = new nodeLambda.NodejsFunction(this, `SkillHandler`);

    new lambda.CfnPermission(this, `SkillPermission`, {
      action: 'lambda:InvokeFunction',
      functionName: handler.functionArn,
      principal: "alexa-appkit.amazon.com",
      eventSourceToken: props.skillId,
    });

    new cdk.CfnOutput(this, `SkillHandlerArn`, {
      value: handler.functionArn
    });
  }
}
