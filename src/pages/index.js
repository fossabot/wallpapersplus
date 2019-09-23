import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";
import CookieScript from "../components/CookieScript";
import { Icon } from "antd";
import Back2Top from "react-back2top";

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
      <Back2Top>
        <button>
          <Icon
            className="bg-gray-900 rounded-full m-2 p-4 align-baseline "
            type="up"
          />
        </button>
      </Back2Top>
      <div className="">
        <Gallery></Gallery>
      </div>
    </Layout>
  );
}

export default IndexPage;
