import { Code, Snippet, Text } from "@geist-ui/core";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function BeforeYouGetStartedWithFirebaseStorageInsideYourNextjsApp() {
  return (
    <>
      <Head>
        <title>
          Before you get Started with Firebase Storage inside your NextJS App |
          Dev Gotchas
        </title>
      </Head>
      <Layout>
        <Text h1>
          Before you get Started with Firebase Storage inside your NextJS App
        </Text>

        <Text h2>CORS</Text>
        <Text>
          Be sure to update your bucket’s CORS policies to allow connecting from
          your origin via the http request methods you are using.
        </Text>

        <Text>
          First, install the gcloud SDK. Then run the following to login.
        </Text>

        <Snippet>gcloud init</Snippet>
        <Text>
          Then navigate to the directory where your preferred CORS JSON settings
          are stored. Then run the following and replace cors.json with the
          filename of your cors JSON.
        </Text>

        <Code block>
          gsutil cors set cors.json gs://&lt;project slug&gt;.appspot.com
        </Code>
        <Text h2>Bucket Permissions</Text>
        <Text>
          In your Firebase console navigate to Storage -&gt; Rules. Use the
          following settings, replacing &lt;project slug&gt; with your project
          slug.
        </Text>
        <Code block>{`service firebase.storage {
    match /b/<Code slug>.appspot.com/o {
        match /{allPaths=**} {
            // Allow access by all users
            allow read, write;
        }
    }
}`}</Code>
      </Layout>
    </>
  );
}
