import styled from "styled-components";

export const RoomItemStyleWrpper = styled.div`
  width: ${(props) => props.itemWidth};
  padding: 8px;
  color: red;
  .inner-wrap {
    /* .image {
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
    } */
    .item-image-wrap {
      height: 160px;
      border-radius: 5px;
      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
        background-size: 100% 100%;
        border-radius: 5px;
      }
    }
    .slider {
      position: relative;
      cursor: pointer;
      &:hover {
        .control {
          display: flex;
        }
      }
      .control {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        display: none;
        justify-content: space-between;
        bottom: 0;
        color: #fff;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );

          &.right {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
        }
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
