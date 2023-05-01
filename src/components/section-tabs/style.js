import styled from "styled-components";

export const SectionTabStyleWrapper = styled.div`
  /* display: flex; */
  /* background-color: rebeccapurple; */
  .item-tab {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 10px 15px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};
  }
  .active {
    background-color: #088b93;
    color: #fff;
    transition: all 500ms;
  }
`;
