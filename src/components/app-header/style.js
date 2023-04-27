import styled from "styled-components";

export const HeaderStyleWrapper = styled.div`
  display: flex;
  height: 80px;
  ${(props) => props.theme.mixin.lineBottom}
`;
