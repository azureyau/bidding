import "@/styles/globals.css";
import Error from "next/error";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/src/Component/layout";
import { SWRConfig } from "swr";
const port = process.env.PORT || 10000;

const fetcher = async (...args) => {
  const response = await fetch(...args);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}
