import {
  Box,
  Container,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import NextLink from "next/link";
import Head from "next/head";

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
      <Container maxW={"container.xl"} py={16}>
        <SimpleGrid columns={3}>
          <GridItem colSpan={[3, 1]}>
            {posts.map((post) => (
              <Link as={NextLink} href={`#${post.slug}`} key={post.ID}>
                <Text>{post.title}</Text>
              </Link>
            ))}
          </GridItem>
          <GridItem colSpan={[3, 2]}>
            <Heading
              as={"h1"}
              fontSize={"1rem"}
              fontWeight={"bold"}
              lineHeight={2}
            >
              Developer Gotchas
            </Heading>
            {posts.map((post) => (
              <Box key={post.ID} id={post.slug}>
                <Heading fontSize={"4rem"}>{post.title}</Heading>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </Box>
            ))}
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
}
