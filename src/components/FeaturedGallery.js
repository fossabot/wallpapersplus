import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Carousel } from "antd";

function FeaturedGallery() {
  const ImgFeatured = useStaticQuery(graphql`
    query FeaturedImages {
      allFile(filter: { absolutePath: { regex: "/walls/featured/" } }) {
        edges {
          node {
            base
            id
            publicURL
            prettySize
            childImageSharp {
              fluid(fit: FILL) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        totalCount
      }
    }
  `);

  return (
    <div className="justify-center">
      <h2 className="text-gray-900 font-semibold text-2xl">Featured Gallery</h2>
      <div className="">
        <Carousel
          dots="true"
          effect="fade"
          autoplay
          className="mb-4"
        >
          {ImgFeatured.allFile.edges.map(({ node }) => (
            <a
              href={node.publicURL}
              key={node.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                key={node.id}
                sizes={node.childImageSharp.fluid}
                className="rounded-lg w-64 mx-auto border-2 border-gray-800 my-8"
                alt={node.base}
              />
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedGallery;
