import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./children/entire-filter";
import filterData from "assets/data/filter_data";
import EntireRoom from "./children/entire-rooms";
import EntirePagination from "./children/entire-pagination";
import { changeHeaderConfig } from "store/modules/main";
import { fetchRoomListAction } from "store/modules/entire/createActions";
import { EntireStyleWrapper } from "./style";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfig({ isFixed: true }));
  });
  return (
    <EntireStyleWrapper>
      <EntireFilter filterData={filterData} />
      <EntireRoom />
      <EntirePagination />
    </EntireStyleWrapper>
  );
});

export default Entire;
