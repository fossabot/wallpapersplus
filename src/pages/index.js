import React from "react";
import BackToTop from "react-back-to-top";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";
import FeaturedGallery from "../components/FeaturedGallery";
import CookieScript from "../components/CookieScript";

function IndexPage() {
  return (
    <Layout>
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
      <BackToTop
        mainStyle={{
          width: "100%",
          height: "100%"
        }}
        percentStyle={{
          width: "100%",
          height: "100%"
        }}

        offsetTop={20}
        step={500}
        percent={true}
        visiblePercent={3}
      ></BackToTop>
      <div>
        <FeaturedGallery></FeaturedGallery>
        <Gallery></Gallery>
      </div>
    </Layout>
  );
}

export default IndexPage;
