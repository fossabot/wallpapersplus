import React from "react";
import ScrollToTop from "react-scroll-up";

function ToTop() {
  return (
    <ScrollToTop showUnder={160}>
      <span
      className="bg-blue-700 text-white p-4 m-2 round hover:shadow-xl"
      >UP</span>
    </ScrollToTop>
  );
}
export default ToTop;
