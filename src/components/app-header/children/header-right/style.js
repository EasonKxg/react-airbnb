import styled from "styled-components";

export const RightStyleWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .gobal {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #f7f7f7;
    margin-right: 10px;
    border-radius: 50%;
  }
  .user {
    display: flex;
    align-items: center;
    padding: 5px 8px;
    border-radius: 20px;
    margin-right: 24px;
    border: 1px solid #dddddd;
    cursor: pointer;
    svg {
      padding: 0 5px;
    }

    ${(props) => props.theme.mixin.boxShadow}
  }
`;
