import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";
import FeaturedGallery from "../components/FeaturedGallery";
import PageProgress from "../components/PageProgress";
import CookieScript from "../components/CookieScript";
import ScrollToTop from "react-scroll-up";

function IndexPage() {

  return (
    <div>
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
        <PageProgress></PageProgress>
        <ScrollToTop showUnder={1000}>
          <span className="bg-blue-700 cursor-pointer float-right m-4 -mr-8 p-6 text-white hover:text-gray-200 text-lg hover:shadow-2xl shadow-lg rounded-full">
            UP
          </span>
        </ScrollToTop>

        <div>
          <FeaturedGallery></FeaturedGallery>
          <Gallery></Gallery>
        </div>
      </Layout>
    </div>
  );
}

export default IndexPage;
