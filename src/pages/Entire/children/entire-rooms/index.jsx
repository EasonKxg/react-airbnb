import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import RoomItem from "components/room-item";
import { changeDetailInfoAction } from "store/modules/detail";
import { EntireRoomStyleWrapper } from "./style";

const EntireRoom = memo((props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { roomList } = useSelector((state) => {
    return {
      roomList: state.entireModule.roomList,
    };
  }, shallowEqual);

  const handleItemClick = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");
    },
    [navigate, dispatch]
  );

  return (
    <EntireRoomStyleWrapper>
      {roomList.map((item) => {
        return (
          <RoomItem
            itemData={item}
            key={item.id}
            itemWidth="18%"
            itemClick={handleItemClick}
          />
        );
      })}
    </EntireRoomStyleWrapper>
  );
});

export default EntireRoom;
