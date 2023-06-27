import Link from "next/link";
import axios from "axios";
import Head from "next/head";
import { Card, Grid, Page, Text } from "@geist-ui/core";

export async function getStaticProps() {
  const posts = await axios
    .get("https://public-api.wordpress.com/rest/v1.1/sites/220124193/posts")
    .then((response) => response.data.posts);

  return {
    props: { posts },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>
          Dev Gotchas | Stupendous Web | If you want to build community, build
          stupendous software
        </title>
        <meta
          property={"og:title"}
          content={
            "Dev Gotchas | Stupendous Web | If you want to build community, build stupendous software"
          }
        />
      </Head>
      <Page dotBackdrop w={"1600px"}>
        <Page.Content>
          <Grid.Container gap={2} justify={"flex-start"} w={"100%"}>
            <Grid xs={8}>
              <div>
                {posts.map((post) => (
                  <Link
                    href={`#${post.slug}`}
                    title={`${post.title} | Stupendous Web | If you want to build community, build stupendous software`}
                    key={post.ID}
                  >
                    <Text>{post.title}</Text>
                  </Link>
                ))}
              </div>
            </Grid>
            <Grid xs={16}>
              <div>
                <Link
                  href={"/"}
                  title={
                    "Dev Gotchas | Stupendous Web | If you want to build community, build stupendous software"
                  }
                >
                  <Text h1>Developer Gotchas</Text>
                </Link>
                <Text>
                  by&nbsp;
                  <Text span>
                    <Link
                      href={"https://stupendousweb.com"}
                      title={
                        "Software Development Services | Stupendous Web | If you want to build community, build stupendous software"
                      }
                    >
                      Stupendous Web
                    </Link>
                  </Text>
                </Text>
                {posts.map((post) => (
                  <Card key={post.ID} shadow mb={2} id={post.slug}>
                    <Text h2>{post.title}</Text>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </Card>
                ))}
              </div>
            </Grid>
          </Grid.Container>
        </Page.Content>
      </Page>
    </>
  );
}
