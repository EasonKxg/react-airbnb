import React, { memo } from "react";
import { CenterStyleWrapper } from "./style";
import IconSearchBar from "assets/svg/icon-search-bar";

const HeaderCenter = memo(() => {
  return (
    <CenterStyleWrapper>
      <div className="titel">搜索房源和体验</div>
      <div className="icon-search">
        <IconSearchBar />
      </div>
    </CenterStyleWrapper>
  );
});

export default HeaderCenter;
