import React, { memo } from "react";
import HeaderCenter from "./children/header-center";
import HeaderLeft from "./children/header-left";
import HeaderRight from "./children/header-right";
import { HeaderStyleWrapper } from "./style";

const AppHeader = memo(() => {
  return (
    <HeaderStyleWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderStyleWrapper>
  );
});

export default AppHeader;
