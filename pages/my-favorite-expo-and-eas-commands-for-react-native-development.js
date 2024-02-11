import { Snippet, Text } from "@geist-ui/core";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function MyFavoriteExpoAndEasCommandsForReactNativeDevelopment() {
  return (
    <>
      <Head>
        <title>
          My Favorite Expo and EAS Commands for React Native Development | Dev
          Gotchas
        </title>
      </Head>
      <Layout>
        <Text h1>
          My Favorite Expo and EAS Commands for React Native Development
        </Text>
        <Text>
          These are some commands I use very often for developing React Native
          apps with Expo. Keep in mind some additional packages such as
          expo-dev-client and expo-updates may be required. You may also need to
          update your eas.json channels.
        </Text>
        <Text h2>Previewing your App Locally</Text>
        <Snippet>expo start -c</Snippet>
        <Text>
          The -c flag just clears the cache which I find helpful. In the latest
          version of Expo it will prompt you to run the development build or
          inside Expo Go. You can also just add the –dev-client flag to your
          command if you’d like to run your app in your development build.
        </Text>
        <Text h2>Creating a Dev Build</Text>
        <Snippet>eas build --profile development</Snippet>
        <Text h2>Creating a Dev Build for iOS Simulators</Text>
        <Snippet>
          eas build --profile development-simulator --platform ios
        </Snippet>
        <Text>
          This will require a separate “development-simulator” profile with some
          additional configuration inside your eas.json file.
        </Text>
        <Text h2>ESA Updates</Text>
        <Snippet>eas update</Snippet>
        <Text>
          Updates are self explanatory but can be used, also to distribute your
          app internally whiteout having to run a local server. You will need
          expo-updates installed for this one.
        </Text>
        <Text h2>Submit your App to the GooglePlay and App Stores</Text>
        <Snippet>eas submit</Snippet>
        <Text>
          This will bundle your build and send it to the appropriate store for
          people to download and enjoy!
        </Text>
      </Layout>
    </>
  );
}
