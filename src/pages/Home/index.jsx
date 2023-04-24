import React, { memo } from "react";
import { getHomeGoodPriceData } from "../../services/modules/home";

const Home = memo(() => {
  const data = getHomeGoodPriceData();
  console.log(data);
  return <div>Home</div>;
});

export default Home;
