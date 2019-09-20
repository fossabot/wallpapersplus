import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `Wallpaperplus`, `iOS`, `Gallery`]}
      />
      <div className="">
        <Gallery></Gallery>
      </div>
    </Layout>
  );
}

export default IndexPage;
