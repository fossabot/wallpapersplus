import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";
import CookieScript from "../components/CookieScript";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`iPhone`,`reddit`,`jailbreak`,`cydia`,`sileo`,`unc0ver`, `Wallpapers`, `Wallpaperplus`, `iOS`, `Gallery`, `wallpaper`, `image`, `images`, `sileo`]}
      />
      <CookieScript></CookieScript>
      <div className="">
        <Gallery></Gallery>
      </div>
    </Layout>
  );
}

export default IndexPage;
