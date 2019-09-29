import React from "react";
import ScrollToTop from "react-scroll-up";

function ToTop() {
  return (
    <ScrollToTop showUnder={160}>
      <span className="bg-blue-700 text-white p-2 -mr-2 sm:-mr-6 p-8 sm:p-2 xs:p-1 round hover:shadow-xl">
        UP
      </span>
    </ScrollToTop>
  );
}
export default ToTop;
