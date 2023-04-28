import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "services/modules/home";

// 使用 createAsyncThunk 创建异步请求函数
const feachHomeDataAction = createAsyncThunk("homeData", async () => {
  const res = await getHomeGoodPriceData();
  return res;
});

const home = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: [],
  },
  reducers: {
    changeGoodPriceInfoAction(state, action) {
      state.goodPriceInfo = action.payload;
    },
  },

  // 处理 createAsyncThunk 返回得结果
  extraReducers: {
    [feachHomeDataAction.fulfilled](state, action) {
      state.goodPriceInfo = action.payload;
    },
  },
});

export const { changeGoodPriceInfoAction } = home.actions;
export { feachHomeDataAction };

export default home.reducer;
