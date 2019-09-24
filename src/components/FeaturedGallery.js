import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function FeaturedGallery() {
  const ImgFeatured = useStaticQuery(graphql`
    query FeaturedImages {
      allFile(filter: { absolutePath: { regex: "/walls/featured/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(fit: FILL) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
            base
            id
            publicURL
            prettySize
          }
        }
        totalCount
      }
    }
  `);
  return (
    <div>
      <h2 className="text-gray-900 font-semibold text-2xl">Featured Gallery</h2>
      <div className="flex flex-wrap justify-center">
        {ImgFeatured.allFile.edges.map(({ node }) => (
          <a
            href={node.publicURL}
            key={node.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              key={node.id}
              className="shadow-2xl border overflow-hidden rounded-lg mx-2 my-4 p-2 bg-white"
            >

                <Img
                  key={node.id}
                  sizes={node.childImageSharp.fluid}
                  className="rounded-lg w-64 "
                  alt={node.base}
                />

            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FeaturedGallery;
