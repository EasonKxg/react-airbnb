import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import classNames from "classnames";
import Indicator from "baseUi/indicator";
import IconArrowLeft from "assets/svg/icon-arrow-left";
import IconArrowRight from "assets/svg/icon-arrow-right";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import { RoomItemStyleWrpper } from "./style";

const RoomItem = memo((props, event) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const carouselRef = useRef();
  const [selectIndex, setSelectIndex] = useState(0);

  function handleControlClick(type = "left", event) {
    type === "left" ? carouselRef.current.prev() : carouselRef.current.next();
    const length = itemData.picture_urls.length;
    let newIndex = type === "left" ? selectIndex - 1 : selectIndex + 1;
    if (newIndex <= 0) newIndex = length - 1;
    if (newIndex >= length - 1) newIndex = 0;

    setSelectIndex(newIndex);

    // 阻止事件冒泡
    event.stopPropagation();
  }
  function handleItemClick() {
    if (itemClick) itemClick(itemData);
  }
  const pictureElement = (
    <div className="image">
      <img src={itemData.picture_url} alt="404" />
    </div>
  );

  const sliderElement = (
    <div className="slider">
      {/* 面板 */}
      <div className="control">
        <div
          className="btn left"
          onClick={(event) => handleControlClick("left", event)}
        >
          <IconArrowLeft width="30" height="30" />
        </div>
        <div
          className="btn right"
          onClick={(event) => handleControlClick("right", event)}
        >
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      {/* 指示器 */}
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div key={item} className="item">
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      {/* 图片轮播图 */}
      <Carousel dots={false} ref={carouselRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="item-image-wrap" key={item}>
              <img src={item} alt="404" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
  return (
    <RoomItemStyleWrpper itemWidth={itemWidth} onClick={handleItemClick}>
      <div className="inner-wrap">
        {!itemData.picture_urls ? pictureElement : sliderElement}
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
        <Rating
          name="half-rating"
          disabled
          defaultValue={itemData.reviews_count ?? 4.5}
          precision={0.1}
          sx={{ color: itemData.star_rating_color }}
          size="small"
        />
      </div>
    </RoomItemStyleWrpper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
};

export default RoomItem;
