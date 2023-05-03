import * as actionTypes from "./constants";
import { getEntireRoomList } from "services/modules/entire";

export function changeCurrentPageAction(page) {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage: page,
  };
}

export function changeRoomListAction(data) {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    data,
  };
}

export function chnageTotalCountAction(count) {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    count,
  };
}

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    const { currentPage } = dispatch(changeCurrentPageAction(page));

    const res = await getEntireRoomList(currentPage * 20);
    const totalCount = res.totalCount;
    const list = res.list;

    dispatch(chnageTotalCountAction(totalCount));
    dispatch(changeRoomListAction(list));
  };
};
