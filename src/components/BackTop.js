import React from "react";

import { Link } from "gatsby";


function BackTop() {
  return (
    <div className="BackTop">
    <Link href="#anchor_BackTop">
      <button className="mt-8 float-right -mr-16" >
        <span className="bg-blue-700 cursor-pointer float-right m-4 -mr-8 p-6 text-white hover:text-gray-200 text-lg hover:shadow-2xl shadow-lg rounded-full">
          UP
        </span>
      </button>
    </Link>
    </div>
  );
}

export default BackTop;
