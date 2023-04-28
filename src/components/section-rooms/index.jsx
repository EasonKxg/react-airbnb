import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "components/room-item";
import { SectionRoomsStyleWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList } = props;

  return (
    <SectionRoomsStyleWrapper>
      {roomList?.map((item) => {
        return <RoomItem itemData={item} key={item.id} />;
      })}
    </SectionRoomsStyleWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
