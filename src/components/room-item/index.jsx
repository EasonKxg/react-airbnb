import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemStyleWrpper } from "./style";

const RoomItem = memo((props) => {
  const { itemData } = props;
  console.log(itemData);
  return (
    <RoomItemStyleWrpper>
      <div className="inner-wrap">
        <div className="image">
          <img src={itemData.picture_url} alt="404" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
      </div>
    </RoomItemStyleWrpper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
