import styled from "styled-components";

export const RoomItemStyleWrpper = styled.div`
  width: 246px;
  padding: 8px;
  color: red;
  .inner-wrap {
    .image {
      height: 160px;
      border-radius: 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
        background-size: 100% 100%;
        border-radius: 5px;
      }
    }
  }
  .desc {
    margin: 5px 0;
    color: #39576a;
    font-size: 14px;
    font-weight: 600;
  }
  .name {
    height: 35px;
    font-weight: 600;
    margin-bottom: 5px;
    color: ${(props) => props.theme.text.secondaryColor};

    ${(props) => props.theme.mixin.ellipsis}
  }
`;
