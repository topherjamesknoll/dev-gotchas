import { Container, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container max={"container.sm"} py={16}>
      <Text fontWeight={"bold"}>Developer Gotchas</Text>
      <h1>Firebase Storage and NextJS</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        harum illum ipsum modi nihil omnis provident quidem soluta. Animi
        corporis cupiditate doloremque dolorum esse maxime porro provident
        soluta vel? Cum.
      </p>
      <h2>Heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at aut
        deleniti dignissimos dolorum, exercitationem, impedit maiores nam nihil
        non odio optio pariatur perspiciatis ratione rerum sit, vitae.
        Repudiandae, veritatis!
      </p>
      <pre>
        <code>node --version</code>
      </pre>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        assumenda, at consectetur corporis cum cumque eaque eius enim esse
        laudantium molestias natus nemo optio placeat quasi, qui quibusdam quo
        voluptate!
      </p>
    </Container>
  );
}
