import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
// import { changeCurrentPageAction } from "store/modules/entire/createActions";
import { fetchRoomListAction } from "store/modules/entire/createActions";
import { EntirePaginationStylwWrapper } from "./style";

const EntirePagination = memo((props) => {
  const dispatch = useDispatch();
  const { currentPage, totalCount, roomList } = useSelector((state) => {
    return {
      currentPage: state.entireModule.currentPage,
      totalCount: state.entireModule.totalCount,
      roomList: state.entireModule.roomList,
    };
  }, shallowEqual);
  console.log(currentPage);
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  function handleChangePage(event, page) {
    window.scrollTo(0, 0);
    dispatch(fetchRoomListAction(page - 1));
  }
  return (
    <EntirePaginationStylwWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination
            count={totalPage}
            color="primary"
            onChange={handleChangePage}
          />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </EntirePaginationStylwWrapper>
  );
});

export default EntirePagination;
