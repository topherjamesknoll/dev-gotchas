import { Container, Text } from "@chakra-ui/react";
import axios from "axios";

export async function getStaticProps() {
  const posts = await axios
    .get("https://public-api.wordpress.com/rest/v1.1/sites/220124193/posts")
    .then((response) => response.data.posts);

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Container max={"container.sm"} py={16}>
      <Text fontWeight={"bold"}>Developer Gotchas</Text>
      {posts.map((post) => (
        <>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
      ))}
    </Container>
  );
}
