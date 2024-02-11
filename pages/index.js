import Layout from "@/components/Layout";
import { Card, Grid, Text } from "@geist-ui/core";
import Link from "next/link";

export default function Home() {
  const articles = [
    {
      title: "Deploying a NextJS App with AWS Elastic Beanstalk and GitLab",
      slug: "deploying-a-nextjs-app-with-aws-elastic-beanstalk-and-gitlab",
    },
    { title: "1" },
    { title: "1" },
    { title: "1" },
  ];
  return (
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
  );
  // (
  //   <>
  //     <Head>
  //       <title>
  //         Dev Gotchas | If you want to build community, build stupendous
  //         software
  //       </title>
  //     </Head>
  //             {posts.map((post) => (
  //               <Link
  //                 as={NextLink}
  //                 href={`/${post.slug}`}
  //                 title={`${post.title} | If you want to build community, build stupendous software`}
  //                 key={post.ID}
  //               >
  //                 <Text dangerouslySetInnerHTML={{ __html: post.title }} />
  //               </Link>
  //             ))}
}
