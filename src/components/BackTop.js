import React from "react";

import { Link } from "gatsby";
import ScrollMagic from "ScrollMagic";


function BackTop() {
  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
		duration: "100%",	// the scene should last for a scroll distance of 100px
		offset: 150	// start this scene after scrolling for 50px
	})
	.setPin("#my-sticky-element") // pins the element for the the scene's duration
	.addTo(controller); // assign the scene to the controller
  return (
    <div className="BackTop">
    <Link href="/#anchor_BackTop">
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
