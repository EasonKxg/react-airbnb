import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Button } from "antd";

import { feachHomeDataAction } from "../../store/modules/home";
import { HomeStyleWrapper } from "./style";
import HomeBanner from "./children/HomeBanner/HomeBanner";
import SectionHeader from "components/section-header";
import RoomItem from "components/room-item";

const Home = memo(() => {
  const dispatch = useDispatch();
  // 发起请求
  useEffect(() => {
    dispatch(feachHomeDataAction());
  }, [dispatch]);

  // 映射 store 得数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.homeModule.goodPriceInfo,
    }),
    shallowEqual
  );

  return (
    <HomeStyleWrapper>
      <HomeBanner />
      <Button type="primary">Primary Button</Button>

      <div className="conter-wrap">
        <SectionHeader title={goodPriceInfo.title} />
        <div className="good-price">
          {goodPriceInfo?.list?.slice(0, 8).map((item) => {
            return <RoomItem itemData={item} key={item.id} />;
          })}
        </div>
      </div>
    </HomeStyleWrapper>
  );
});

export default Home;
