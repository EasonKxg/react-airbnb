import React, { memo } from "react";
import DetailInfo from "./children/Detail-info/DetailInfo";
import DetailPictures from "./children/Detail-pictures/DetailPictures";


const Detail = memo((props) => {
  return (
    <>
      <DetailPictures />
      <DetailInfo />

    </>
  );
});

export default Detail;
