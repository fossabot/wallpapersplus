import React, {useState} from "react";

import updateOnScroll from "uos";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "../components/Gallery";
import FeaturedGallery from "../components/FeaturedGallery";
import CookieScript from "../components/CookieScript";
import ScrollToTop from "react-scroll-up";

function IndexPage() {
  const [PageProgress, setPageProgress] = useState(0);

  updateOnScroll(0.0, 1.0, progress => {
    setPageProgress(PageProgress+1);
    console.log(PageProgress);
  });


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
        <ScrollToTop showUnder={1000}>
          <span className="bg-blue-700 cursor-pointer float-right m-4 p-6 text-white hover:text-gray-200 text-lg hover:shadow-2xl shadow-lg rounded-full">
          {PageProgress} %
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
