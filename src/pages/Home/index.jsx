import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { feachHomeDataAction } from "store/modules/home";
import { HomeStyleWrapper } from "./style";
import HomeBanner from "./children/HomeBanner";
import HomeSection from "./children/HomeSection";

const Home = memo(() => {
  const dispatch = useDispatch();
  // 发起请求
  useEffect(() => {
    dispatch(feachHomeDataAction());
  }, [dispatch]);

  // 映射 store 得数据
  const { goodPriceInfo, goodHighscore } = useSelector(
    (state) => ({
      goodPriceInfo: state.homeModule.goodPriceInfo,
      goodHighscore: state.homeModule.goodHighscore,
    }),
    shallowEqual
  );
  return (
    <HomeStyleWrapper>
      <HomeBanner />
      <div className="conter-wrap">
        <HomeSection infoData={goodPriceInfo} />
        <HomeSection infoData={goodHighscore} />
      </div>

      {/* <div className="conter-wrap">
        <SectionHeader title={goodPriceInfo.title} />
        <SectionRooms roomList={goodPriceInfo?.list?.slice(0, 8)} />
      </div>
      <div className="conter-wrap">
        <SectionHeader
          title={goodHighscore.title}
          subtitle={goodHighscore.subtitle}
        />
        <SectionRooms roomList={goodHighscore?.list?.slice(0, 8)} />
      </div> */}
    </HomeStyleWrapper>
  );
});

export default Home;
