import { Page, Text, Grid, Code } from "@geist-ui/core";
import Head from "next/head";

export default function DeployingANextJSAppWithAWSElasticBeanstalkAndGitLab() {
  return (
    <>
      <Head>
        <title>
          Deploying a NextJS App with AWS Elastic Beanstalk and GitLab | Dev
          Gotchas
        </title>
        <meta
          property={"og:title"}
          content={
            "Deploying a NextJS App with AWS Elastic Beanstalk and GitLab | Dev Gotchas"
          }
        />
      </Head>
      <Page>
        <Page.Content>
          <Grid.Container gap={2} justify={"center"}>
            <Grid xs={12} sm={9}>
              <div>
                <Text h1>
                  Deploying a NextJS App with AWS Elastic Beanstalk and GitLab
                </Text>
                <Text h2>IAM</Text>
                <ul>
                  <li>
                    Set up an Elastic Beanstalk role with a trust relationship
                    with Elastic Beanstalk and add the following permission
                    policies:
                  </li>
                  <ul>
                    <li>AWSElasticBeanstalkService</li>
                    <li>AWSElasticBeanstalkEnhancedHealth</li>
                  </ul>
                  <li>Setup and EC2 role with a trust relationship EC2</li>
                </ul>
                <Text h2>Elastic Beanstalk</Text>
                <ul>
                  <li>Create application</li>
                  <li>
                    Create environment with sample code. You must includ ethe
                    following across the various steps:
                  </li>
                  <ul>
                    <li>Environment Name</li>
                    <li>Platform (Node.js)</li>
                    <li>Your Elastic Beanstalk role, and your EC2 role</li>
                    <li>
                      Only use t3.small or higher. Anything less will time out
                      while installing packages.
                    </li>
                    <li>Add application environment (.env) variables.</li>
                  </ul>
                </ul>
                <Text h2>CodePipeline</Text>
                <ul>
                  <li>Choose the default S3 location.</li>
                  <li>Connect GitLab, choose repository, and choose branch.</li>
                  <li>
                    Choose and set up CodeBuild. (Latest version of Ubuntu)
                  </li>
                  <li>Add application environment (.env) variables.</li>
                  <li>
                    Choose your Elastic Beanstalk application and environment
                    for deployment.
                  </li>
                </ul>
                <Text h2>Storage</Text>
                <Text>
                  You will need settings similar to the following to set up your
                  buckets.
                </Text>
                <Text h2>CORS Policy</Text>
                <Code block my={0}>
                  {`[
    {
        AllowedHeaders: ["*"],
        AllowedMethods: ["GET", "HEAD", "PUT"],
        AllowedOrigins: ["*"],
        ExposeHeaders: [],
        MaxAgeSeconds: 3000,
    },
]`}
                </Code>
                <Text h2>Permissions</Text>
                <Code block>{`{
    "Version": "2012-10-17",
    "Id": "Policy123456789",
    "Statement": [{
        "Sid": "Statement1",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::<Bucket Name>/*"
    }]
}`}</Code>
              </div>
            </Grid>
          </Grid.Container>
        </Page.Content>
      </Page>
    </>
  );
}
