import { Text } from "@geist-ui/core";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function BeforeYouTransferYourMysqlDatabaseToDigitalOceansManagedMysql() {
  return (
    <>
      <Head>
        <title>
          Before you Transfer your MySQL Database to Digital Ocean Managed MySQL
          | Dev Gotchas
        </title>
      </Head>
      <Layout>
        <Text h1>
          Before you Transfer your MySQL Database to Digital Ocean Managed MySQL
        </Text>
      </Layout>
    </>
  );
}
