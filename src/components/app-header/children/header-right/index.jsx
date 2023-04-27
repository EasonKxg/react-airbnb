import React, { memo, useEffect, useState } from "react";
import IconGlobal from "assets/svg/icon_global";
import IconMenu from "assets/svg/icon_menu";
import IconAvatar from "assets/svg/icon_avatar";
import PanelStyleWrapper from "./children/Panel";
import { RightStyleWrapper } from "./style";

const HeaderRight = memo(() => {
  const [isPanel, setIsPanel] = useState(false);

  // 监听其他得点击,并关闭
  useEffect(() => {
    function handleWinClick() {
      setIsPanel(false);
    }
    window.addEventListener("click", handleWinClick, true);
    return () => {
      // 卸载事件
      window.removeEventListener("click", handleWinClick, true);
    };
  });

  function handleShowPanelClick() {
    setIsPanel(!isPanel);
  }
  return (
    <RightStyleWrapper>
      <div className="gobal">
        <IconGlobal />
      </div>
      <div className="user" onClick={() => handleShowPanelClick()}>
        <IconMenu />
        <IconAvatar />
        {isPanel && <PanelStyleWrapper />}
      </div>
    </RightStyleWrapper>
  );
});

export default HeaderRight;
