import styled from "styled-components";

export const HeaderStyleWrapper = styled.div`
  ${(props) => props.theme.mixin.lineBottom}

  .content{
    position: relative;
    background-color: #fff;
    z-index: 99;
    .top{
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
  .search-area{
    height: 100px;
  }
  .cover{
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
  }
`;
