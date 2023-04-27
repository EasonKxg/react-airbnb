import React from "react";
import PanelStyleWrapper from "./style";

export default function Panel() {
  return (
    <PanelStyleWrapper>
      <div className="login-wrap">
        <div className="login line">
          <div>注册</div>
          <div>登录</div>
        </div>
        <div className="login">
          <div>来爱彼迎发布房源</div>
          <div>帮助</div>
        </div>
      </div>
    </PanelStyleWrapper>
  );
}
