import styled from "styled-components";

const PanelStyleWrapper = styled.div`
  .login-wrap {
    position: absolute;
    margin-top: 30px;
    width: 245px;
    height: 200px;
    right: 24px;
    padding-top: 10px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    z-index: 99;
    .line {
      ${(props) => props.theme.mixin.lineBottom}
    }
    .login {
      height: 97px;
      div {
        height: 48px;
        line-height: 48px;
        padding-left: 12px;
      }
      div:hover {
        background-color: #f7f7f7;
      }
    }
  }
`;

export default PanelStyleWrapper;
