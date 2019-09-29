import React from "react";
import renderer from "react-test-renderer";

import ToTop from "../ToTop";

describe("ToTop", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ToTop />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
