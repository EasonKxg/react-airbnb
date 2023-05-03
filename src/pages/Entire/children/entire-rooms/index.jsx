import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import RoomItem from "components/room-item";
import { EntireRoomStyleWrapper } from "./style";
const EntireRoom = memo((props) => {
  const { roomList } = useSelector((state) => {
    return {
      roomList: state.entireModule.roomList,
    };
  }, shallowEqual);

  return (
    <EntireRoomStyleWrapper>
      {roomList.map((item) => {
        return <RoomItem itemData={item} key={item.id} itemWidth="18%" />;
      })}
    </EntireRoomStyleWrapper>
  );
});


export default EntireRoom;
