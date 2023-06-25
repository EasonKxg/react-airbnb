import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeHeaderConfig } from "store/modules/main";
import DetailInfo from "./children/Detail-info/DetailInfo";
import DetailPictures from "./children/Detail-pictures/DetailPictures";

const Detail = memo((props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfig({ isFixed: true }));
  }, []);
  return (
    <>
      <DetailPictures />
      <DetailInfo />
    </>
  );
});

export default Detail;
