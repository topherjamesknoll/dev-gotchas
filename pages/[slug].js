// export async function getStaticPaths() {
//   const posts = (
//     await axios.get(
//       "https://public-api.wordpress.com/rest/v1.1/sites/220124193/posts"
//     )
//   ).data?.posts;
//   console.log("posts", posts);
//   const paths = posts?.map((post) => ({
//     params: { slug: post.slug },
//   }));
//
//   return { paths, fallback: false };
// }
//
// export async function getStaticProps({ params }) {
//   const post = (
//     await axios.get(
//       `https://public-api.wordpress.com/rest/v1.1/sites/220124193/posts/slug:${params.slug}`
//     )
//   ).data;
//
//   return {
//     props: {
//       article: post,
//     },
//     revalidate: 10,
//   };
// }

export default function Article() {
  return null;
  // (
  //   <>
  //     <Head>
  //       <title>{article.title} | Dev Gotchas</title>
  //       <meta
  //         property={"og:title"}
  //         content={`${article.title} | Dev Gotchas`}
  //       />
  //     </Head>
  //     <Container maxW={"container.sm"} py={8}>
  //       <Link
  //         as={NextLink}
  //         href={"/"}
  //         title={
  //           "Dev Gotchas | If you want to build community, build stupendous software"
  //         }
  //       >
  //         <Heading as={"p"} fontSize={"1rem"} mt={4} mb={0}>
  //           Developer Gotchas
  //         </Heading>
  //       </Link>
  //       <Text>
  //         by&nbsp;
  //         <Text as={"span"}>
  //           <Link
  //             as={NextLink}
  //             href={"https://www.linkedin.com/in/topherjamesknoll"}
  //           >
  //             Topher
  //           </Link>
  //         </Text>
  //       </Text>
  //       <Heading
  //         as={"h1"}
  //         dangerouslySetInnerHTML={{ __html: article.title }}
  //       />
  //       <Box
  //         __css={{
  //           h2: { fontWeight: 900, my: 4 },
  //           p: { my: 4 },
  //           a: {
  //             color: "primary.500",
  //           },
  //           pre: {
  //             bg: "gray.50",
  //             color: "primary.500",
  //             p: 4,
  //             overflow: "auto",
  //           },
  //         }}
  //         dangerouslySetInnerHTML={{ __html: article.content }}
  //       />
  //     </Container>
  //   </>
  // );
}
