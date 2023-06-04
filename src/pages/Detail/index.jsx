import React, { memo } from "react";
import { useSelector } from "react-redux";
import DetailInfo from "./children/Detail-info/DetailInfo";
import DetailPictures from "./children/Detail-pictures/DetailPictures";

const Detail = memo((props) => {
  const { detailInfo } = useSelector((store) => {
    return {
      detailInfo: store.detailModule.detailInfo,
    };
  });

  return (
    <>
      <DetailInfo />
      <DetailPictures />
    </>
  );
});

export default Detail;
