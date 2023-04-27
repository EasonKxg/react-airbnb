import styled from "styled-components";

export const CenterStyleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  height: 48px;
  line-height: 48px;
  box-sizing: border-box;
  border-radius: 40px;
  margin-top: calc((80px - 48px) / 2);
  border: 1px solid #ddd;
  color: ${(props) => props.theme.text.secondaryColor};
  .titel {
    height: 40px;
    line-height: 40px;
    margin-left: 24px;
  }
  .icon-search {
    display: flex;
    justify-content: center;
    width: 32px;
    height: 32px;
    align-items: center;
    border-radius: 50%;
    margin-right: 12px;
    background-color: ${(props) => props.theme.color.primaryColor};
    color: #fff;
  }
`;
