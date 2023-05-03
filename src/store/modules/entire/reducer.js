import * as actionTypes from "./constants";

const initialState = {
  roomList: [],
  totalCount: 0,
  currentPage: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.data };
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.count };
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
}

export default reducer;
