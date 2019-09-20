import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

function Gallery() {
  const ImgQuery = useStaticQuery(graphql`
    query Images {
      allFile {
        edges {
          node {
            name
            id
            base
            birthTime(fromNow: true)
            prettySize
            publicURL
            ext
            mode
          }
        }
        totalCount
      }
    }
  `);
  return (
    <div>
      <div>
        <Link to="/">
          <button className="rounded-full h-16 w-16 text-xl p-4 bg-gray-800 text-teal-100 float-right">
            {ImgQuery.allFile.totalCount}
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-between sm:justify-center xs:justify-center">
        {ImgQuery.allFile.edges.map(({ node }) => (
          <a href={node.publicURL} target="_blank" rel="noopener noreferrer">
            <div
              key={node.id}
              className="shadow-2xl border overflow-hidden rounded-lg mx-2 my-4 p-2 bg-white"
            >
              <img
                src={node.publicURL}
                className="rounded-lg w-64 "
                alt={node.base}
              />
              <div className="p-2">
                <div className="flex justify-between items-center ">
                  <span className="text-gray-600 text-xs font-semibold">
                    {node.birthTime}
                  </span>
                  <span className="text-right text-gray-600 tracking-wider text-xs font-semibold">
                    {node.ext}
                  </span>
                </div>

                <span className="text-gray-700 text-lg text-center leading-tight font-semibold">
                  {node.name}
                </span>
                <div className="flex">
                  <button className="w-full bg-blue-500 hover:bg-transparent font-semibold hover:text-blue-700 text-white mt-2 px-4 border border-blue-500 text-xs rounded">
                    {node.prettySize}
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
