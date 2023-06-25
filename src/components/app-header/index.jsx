import React, { memo } from "react";
import HeaderCenter from "./children/header-center";
import HeaderLeft from "./children/header-left";
import HeaderRight from "./children/header-right";
import { HeaderStyleWrapper } from "./style";

const AppHeader = memo(() => {
  return (
    <HeaderStyleWrapper>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
        <div className="search-area"></div>
      </div> 
      <div className="cover"></div>
    </HeaderStyleWrapper>
  );
});

export default AppHeader;
