import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sandy Beach</title>
        <meta name="description" content="A sandy beach for experiments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen min-w-screen flex justify-center items-center bg-yellow-50">
        <div className="text-6xl">🌊🏝</div>
      </div>
    </>
  );
};

export default Home;
