import React, { memo } from "react";
import IconLogo from "assets/svg/icon_logo";
import { LeftStyleWrapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <LeftStyleWrapper>
      <div className="logo">
        <IconLogo />
      </div>
    </LeftStyleWrapper>
  );
});

export default HeaderLeft;
