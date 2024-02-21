import Layout from "@/components/Layout";
import { Card, Grid, Text } from "@geist-ui/core";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const articles = [
    {
      title:
        "How to Automatically Update Users to the Latest Version of your Expo App",
      slug: "how-to-automatically-update-users-to-the-latest-version-of-your-expo-app"
    },
    {
      title: "Deploying a NextJS App with AWS Elastic Beanstalk and GitLab",
      slug: "deploying-a-nextjs-app-with-aws-elastic-beanstalk-and-gitlab"
    },
    {
      title: "My Favorite Expo and EAS Commands for React Native Development",
      slug: "my-favorite-expo-and-eas-commands-for-react-native-development"
    },
    {
      title: "Before Running Zend on a Mac in the 21st Century",
      slug: "before-running-zend-on-a-mac-in-the-21st-century"
    },
    {
      title:
        "Before you Transfer your MySQL Database to Digital Ocean Managed MySQL",
      slug: "before-you-transfer-your-mysql-database-to-digital-oceans-managed-mysql"
    },
    {
      title: "How to Deploy an Express App to Vercel",
      slug: "how-to-deploy-an-express-app-to-vercel"
    },
    {
      title:
        "Before you get Started with Firebase Storage Inside your NextJS App",
      slug: "before-you-get-started-with-firebase-storage-inside-your-nextjs-app"
    }
  ];
  return (
    <>
      <Head>
        <title>Development Gotchas by Topher</title>
      </Head>
      <Layout>
        <Grid.Container gap={2}>
          {articles.map((article) => (
            <Grid key={article.slug} xs={8}>
              <Card shadow width={"100%"}>
                <Text h3>
                  <Link
                    href={`/${article.slug}`}
                    title={`${article.title} | Dev Gotchas`}
                  >
                    {article.title}
                  </Link>
                </Text>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
}
