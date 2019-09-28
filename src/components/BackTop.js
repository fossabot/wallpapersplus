import React from "react";
import updateOnScroll from "uos";
import { Link } from "gatsby";

function BackTop() {
  updateOnScroll(0.2, 1, progress => {
    let letProgress = (progress * 100).toFixed(3);
    if (letProgress <= 5) {
      console.log("Dont Show");
    } else {
      console.log("Show");
    }
  });

  return (
    <div className="BackTop">
    <Link to="#anchor_BackTop">
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
