import React from "react";
import Head from "next/head";
import { pageRenderer } from "@small-island-projects/small-island-components/lib/esm/index.js";

const HomePage = () => {
  const { body } = pageRenderer();

  return (
    <>
      <Head>
        <title>
          Small Island Productions - Emotion using the vanilla version
          supporting SSR
        </title>
      </Head>
      <div>
        <h1>Small Island Productions - Emotion Vanilla example</h1>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </>
  );
};

export default HomePage;
