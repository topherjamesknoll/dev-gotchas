// export async function getStaticProps() {
//   const posts = await axios
//     .get("https://public-api.wordpress.com/rest/v1.1/sites/220124193/posts")
//     .then((response) => response.data.posts);
//
//   return {
//     props: { posts },
//     revalidate: 10,
//   };
// }

export default function Home() {
  return null;
  // (
  //   <>
  //     <Head>
  //       <title>
  //         Dev Gotchas | If you want to build community, build stupendous
  //         software
  //       </title>
  //       <meta
  //         property={"og:title"}
  //         content={
  //           "Dev Gotchas | If you want to build community, build stupendous software"
  //         }
  //       />
  //     </Head>
  //     <Container maxW={"container.xl"} py={8}>
  //       <SimpleGrid columns={2} spacing={2}>
  //         <GridItem colSpan={[2, 1]}>
  //           <Box pt={2}>
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
  //           </Box>
  //         </GridItem>
  //         <GridItem colSpan={[2, 1]}>
  //           <Link
  //             as={NextLink}
  //             href={"/"}
  //             title={
  //               "Dev Gotchas | If you want to build community, build stupendous software"
  //             }
  //           >
  //             <Heading
  //               as={"h1"}
  //               fontSize={["3rem", "4rem"]}
  //               lineHeight={1}
  //               mt={4}
  //               mb={0}
  //             >
  //               Developer Gotchas
  //             </Heading>
  //           </Link>
  //           <Text>
  //             by&nbsp;
  //             <Text as={"span"}>
  //               <Link
  //                 as={NextLink}
  //                 href={"https://www.linkedin.com/in/topherjamesknoll"}
  //               >
  //                 Topher
  //               </Link>
  //             </Text>
  //           </Text>
  //           {posts.map((post) => (
  //             <Box key={post.ID} id={post.slug}>
  //               <Link
  //                 as={NextLink}
  //                 href={`/${post.slug}`}
  //                 title={`${post.title} | If you want to build community, build stupendous software`}
  //                 key={post.ID}
  //               >
  //                 <Heading
  //                   as={"h2"}
  //                   fontSize={"2rem"}
  //                   dangerouslySetInnerHTML={{ __html: post.title }}
  //                 />
  //               </Link>
  //               <Box
  //                 mb={4}
  //                 __css={{
  //                   h2: { fontSize: "1rem", fontWeight: 900, my: 4 },
  //                   p: { my: 4 },
  //                   a: {
  //                     color: "primary.500",
  //                   },
  //                   pre: {
  //                     bg: "gray.50",
  //                     color: "primary.500",
  //                     p: 4,
  //                     overflow: "auto",
  //                   },
  //                 }}
  //                 dangerouslySetInnerHTML={{ __html: post.content }}
  //               />
  //             </Box>
  //           ))}
  //         </GridItem>
  //       </SimpleGrid>
  //     </Container>
  //   </>
  // );
}
