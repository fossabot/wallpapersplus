import React from "react";
import { storiesOf } from "@storybook/react";
import { addons } from "@storybook/addons";
import updateOnScroll from "uos";
import { Progress } from "antd";

storiesOf(`Dashboard/PageProgress`, module).add(`default`, () => (
  <div className="PageProgress">
    <Progress
      strokeColor={{
        from: "#108ee9",
        to: "#87d068"
      }}
      percent={50}
      status="active"
    />
  </div>
));
