import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
} from "services/modules/home";

// 使用 createAsyncThunk 创建异步请求函数
const feachHomeDataAction = createAsyncThunk(
  "homeData",
  async (payload, { dispatch, getState }) => {
    // const res = await getHomeGoodPriceData();
    // return res;

    // 请求
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    // 请求
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighscoreInfoAction(res));
    });
    //
    getHomeDiscountData().then((res) => {
      dispatch(changeHomeDiscountAction(res));
    });
    getHomeHotRecommendData().then((res) => {
      dispatch(changehotRecommend(res));
    });
    getHomeLongforData().then((res) => {
      console.log(res);
      dispatch(changeLongforData(res));
    });
  }
);

const home = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    goodHighscore: {},
    homeDiscount: {},
    hotRecommend: {},
    longforData: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, action) {
      state.goodPriceInfo = action.payload;
    },
    changeHighscoreInfoAction(state, action) {
      state.goodHighscore = action.payload;
    },
    changeHomeDiscountAction(state, action) {
      state.homeDiscount = action.payload;
    },
    changehotRecommend(state, action) {
      state.hotRecommend = action.payload;
    },
    changeLongforData(state, action) {
      state.longforData = action.payload;
    },
  },

  // 处理 createAsyncThunk 返回得结果
  extraReducers: {
    // [feachHomeDataAction.fulfilled](state, action) {
    //   state.goodPriceInfo = action.payload;
    // },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighscoreInfoAction,
  changeHomeDiscountAction,
  changehotRecommend,
  changeLongforData,
} = home.actions;
export { feachHomeDataAction };

export default home.reducer;
