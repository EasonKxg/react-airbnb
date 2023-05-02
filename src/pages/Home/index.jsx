import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import HomeBanner from "./children/HomeBanner";
import HomeSection from "./children/HomeSection";
import HomeSectionTab from "./children/HomeSectionTab";
import HomeLongfor from "./children/HomeLongfor";
import { feachHomeDataAction } from "store/modules/home";
import { HomeStyleWrapper } from "./style";
import { isEmptyObject } from "../../utils/isEmptyObject";

const Home = memo(() => {
  const dispatch = useDispatch();

  // 发起请求
  useEffect(() => {
    dispatch(feachHomeDataAction());
  }, [dispatch]);

  // 映射 store 得数据
  const {
    goodPriceInfo,
    goodHighscore,
    homeDiscount,
    hotRecommend,
    logforData,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.homeModule.goodPriceInfo,
      goodHighscore: state.homeModule.goodHighscore,
      homeDiscount: state.homeModule.homeDiscount,
      hotRecommend: state.homeModule.hotRecommend,
      logforData: state.homeModule.longforData,
    }),
    shallowEqual
  );

  return (
    <HomeStyleWrapper>
      <HomeBanner />
      <div className="conter-wrap">
        {isEmptyObject(homeDiscount) && (
          <HomeSectionTab infoData={homeDiscount} />
        )}
        {isEmptyObject(hotRecommend) && (
          <HomeSectionTab infoData={hotRecommend} />
        )}

        {isEmptyObject(logforData) && <HomeLongfor infoData={logforData} />}
        {isEmptyObject(goodPriceInfo) && (
          <HomeSection infoData={goodPriceInfo} />
        )}
        {isEmptyObject(goodHighscore) && (
          <HomeSection infoData={goodHighscore} />
        )}
      </div>
    </HomeStyleWrapper>
  );
});

export default Home;
