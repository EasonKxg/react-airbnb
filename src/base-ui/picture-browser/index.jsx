import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Indicator from "../indicator";
import IconClose from "assets/svg/icon-close";
import IconArrowLeft from "assets/svg/icon-arrow-left";
import IconArrowRight from "assets/svg/icon-arrow-right";
import IconTriangleArrowBottom from "assets/svg/icon-triangle-arrow-bottom";
import IconTriangleArrowTop from "assets/svg/icon-triangle-arrow-top";
import { PictureBrowserStyleWrapper } from "./style";

import classNames from "classnames";
const PictureBrowser = memo((props) => {
  const { closeClcik, pictureUrls } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);

  function handleCloseClcik() {
    if (closeClcik) closeClcik();
  }

  function hanldeControlClick(isNext = true) {
    let pictureIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (pictureIndex < 0) pictureIndex = pictureUrls.length - 1;
    if (pictureIndex > pictureUrls.length - 1) pictureIndex = 0;

    setCurrentIndex(pictureIndex);
    setIsNext(isNext);
  }

  return (
    <PictureBrowserStyleWrapper isNext={isNext} showList={showList}>
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
          {/* 动画组件 */}
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="404" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {showList ? (
                <IconTriangleArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="list">
            <Indicator>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                  >
                    <img src={item} alt="404" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserStyleWrapper>
  );
});

PictureBrowser.prototype = {
  pictureUrls: PropTypes.array,
};

export default PictureBrowser;
