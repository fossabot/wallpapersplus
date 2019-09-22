import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";
import CookieScript from "../components/CookieScript";
import Script from "react-load-script";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `Wallpaperplus`, `iOS`, `Gallery`]}
      />
    <Script url="../components/scripts/alert.js"></Script>
      <CookieScript></CookieScript>
      <div className="">
        <Gallery></Gallery>
      </div>
    </Layout>
  );
}

export default IndexPage;
