import React, { useState } from "react";
import updateOnScroll from "uos";
import { Progress } from "antd";

function PageProgress() {
  const [progress, setProgress] = useState(0);
  updateOnScroll(0, 1, progress => {
    setProgress(progress * 100);
    console.log({ progress });
  });

  return (
    <div className="PageProgress">
      <Progress
        strokeColor={{
          from: "#108ee9",
          to: "#87d068"
        }}
        percent={progress}
        status="active"
      />
    </div>
  );
}

export default PageProgress;
