import PropTypes from "prop-types";
import React, { memo } from "react";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import { RoomItemStyleWrpper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;

  return (
    <RoomItemStyleWrpper itemWidth={itemWidth}>
      <div className="inner-wrap">
        {/* <div className="image">
          <img src={itemData.picture_url} alt="404" />
        </div> */}

        {/* 却换 */}
        
        {/* 图片轮播图 */}
        <Carousel dots={false}>
          {itemData?.picture_urls.map((item) => {
            return (
              <div className="item-image-wrap" key={item}>
                <img src={item} alt="404" />
              </div>
            );
          })}
        </Carousel>

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
