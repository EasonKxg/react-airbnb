import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "components/room-item";
import { SectionRoomsStyleWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props;
  return (
    <SectionRoomsStyleWrapper>
      {roomList?.map((item) => {
        return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />;
      })}
    </SectionRoomsStyleWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string,
};

export default SectionRooms;
