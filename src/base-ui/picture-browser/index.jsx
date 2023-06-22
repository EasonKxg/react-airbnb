import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import IconClose from "assets/svg/icon-close";
import IconArrowLeft from "assets/svg/icon-arrow-left";
import IconArrowRight from "assets/svg/icon-arrow-right";

import { PictureBrowserStyleWrapper } from "./style";
const PictureBrowser = memo((props) => {
  const { closeClcik, pictureUrls } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleCloseClcik() {
    if (closeClcik) closeClcik();
  }

  function hanldeControlClick(isNext) {
    let pictureIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (pictureIndex < 0) pictureIndex = pictureUrls.length - 1;
    if (pictureIndex > pictureUrls.length - 1) pictureIndex = 0;

    setCurrentIndex(pictureIndex);
  }

  return (
    <PictureBrowserStyleWrapper>
      <div className="top">
        <div className="close-btn" onClick={handleCloseClcik}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => hanldeControlClick(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => hanldeControlClick(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
          <img src={pictureUrls[currentIndex]} alt="404" />
        </div>
      </div>
      <div className="preview">preview</div>
    </PictureBrowserStyleWrapper>
  );
});

PictureBrowser.prototype = {
  pictureUrls: PropTypes.array,
};

export default PictureBrowser;
