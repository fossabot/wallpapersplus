import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";
import FeaturedGallery from "../components/FeaturedGallery";
import PageProgress from "../components/PageProgress";
import CookieScript from "../components/CookieScript";
import BackTop from "../components/BackTop";

function IndexPage() {
  return (
    <Layout id="anchor_BackTop">
      <SEO
        title="Home"
        keywords={[
          `iPhone`,
          `reddit`,
          `jailbreak`,
          `cydia`,
          `sileo`,
          `unc0ver`,
          `Wallpapers`,
          `Wallpaperplus`,
          `iOS`,
          `Gallery`,
          `wallpaper`,
          `image`,
          `images`,
          `sileo`
        ]}
      />
      <CookieScript></CookieScript>
      <PageProgress></PageProgress>
      <BackTop></BackTop>

      <div>
        <FeaturedGallery></FeaturedGallery>
        <Gallery></Gallery>
      </div>
    </Layout>
  );
}

export default IndexPage;
