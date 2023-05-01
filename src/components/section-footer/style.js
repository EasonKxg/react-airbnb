import styled from "styled-components";

export const SectionFooterStyleSwrpper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  height: 20px;
  line-height: 20px;
  .name {
    cursor: pointer;
    color: ${(props) => props.color};
  }
  .icon {
    height: 20px;
  }
`;
