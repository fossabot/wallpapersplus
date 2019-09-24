import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";
import CookieScript from "../components/CookieScript";
import ScrollToTop from "react-scroll-up";

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
      <ScrollToTop showUnder={160}>
        <span className="bg-blue-700 cursor-pointer float-right -mr-6 p-3 text-white hover:text-gray-200 text-lg hover:shadow-2xl shadow-lg rounded-full">
          UP
        </span>
      </ScrollToTop>
      <div className="">
        <Gallery></Gallery>
      </div>
    </Layout>
  );
}

export default IndexPage;
