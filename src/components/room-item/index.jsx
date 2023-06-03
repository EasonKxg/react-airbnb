import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import IconArrowLeft from "assets/svg/icon-arrow-left";
import IconArrowRight from "assets/svg/icon-arrow-right";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import { RoomItemStyleWrpper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  const carouselRef = useRef()

  function handleControlClick(type = 'left') {
    type === 'left' ? carouselRef.current.prev() : carouselRef.current.next()
  }
  return (
    <RoomItemStyleWrpper itemWidth={itemWidth}>
      <div className="inner-wrap">
        {/* <div className="image">
          <img src={itemData.picture_url} alt="404" />
        </div> */}

        {/* 却换 */}
        <div className="slider">
          {/* 面板 */}
          <div className="control">
            <div
              className="btn left"
              onClick={() => handleControlClick("left")}
            >
              <IconArrowLeft width="30" height="30" />
            </div>
            <div
              className="btn right"
              onClick={() => handleControlClick("right")}
            >
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          {/* 图片轮播图 */}
          <Carousel dots={false} ref={carouselRef}>
            {itemData?.picture_urls.map((item) => {
              return (
                <div className="item-image-wrap" key={item}>
                  <img src={item} alt="404" />
                </div>
              );
            })}
          </Carousel>
        </div>
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
