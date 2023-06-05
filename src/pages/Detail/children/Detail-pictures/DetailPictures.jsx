import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDetailInfoAction } from "store/modules/detail";
import { DetailPicturesStyleWrapper } from "./style";

const DetailPictures = memo(() => {
  const dispatch = useDispatch();
  const { detailInfo } = useSelector((store) => {
    return {
      detailInfo: store.detailModule.detailInfo,
    };
  });

  function setShowBrowser() {}

  useEffect(() => {
    // 判断是否刷新了页面，刷新了从缓存中获取数据
    if (!detailInfo.name) {
      const detailItemStr = window.sessionStorage.getItem("detailItem");
      if (detailItemStr) {
        const detailItem = JSON.parse(detailItemStr);
        dispatch(changeDetailInfoAction(detailItem));
      }
    }
  });
  return (
    <DetailPicturesStyleWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => setShowBrowser(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
    </DetailPicturesStyleWrapper>
  );
});

export default DetailPictures;
