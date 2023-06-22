import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { changeDetailInfoAction } from "store/modules/detail";
import PictureBrowser from "baseUi/picture-browser";
import { DetailPicturesStyleWrapper } from "./style";

const DetailPictures = memo(() => {
  const [isShowPictureBrowser, setIsShowPictureBrowser] = useState(false);
  const dispatch = useDispatch();
  const { detailInfo } = useSelector((store) => {
    return {
      detailInfo: store.detailModule.detailInfo,
    };
  });

  useEffect(() => {
    // 判断是否刷新了页面，刷新了从缓存中获取数据
    if (!detailInfo.name) {
      const detailItemStr = window.sessionStorage.getItem("detailItem");
      if (detailItemStr) {
        const detailItem = JSON.parse(detailItemStr);
        dispatch(changeDetailInfoAction(detailItem));
      }
    }

    // 裁决 PictureBrowser 的滚动条
    window.document.body.style.overflow = "hidden";
    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, [shallowEqual]);

  function handleShowPictureBrowserClick(isState) {
    setIsShowPictureBrowser(isState);
  }

  const showBtnEl = (
    <div
      className="show-btn"
      onClick={() => handleShowPictureBrowserClick(true)}
    >
      查看照片
    </div>
  );

  return (
    <DetailPicturesStyleWrapper>
      <div className="pictures">
        <div className="left">
          <div
            className="item"
            onClick={() => handleShowPictureBrowserClick(true)}
          >
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
                onClick={() => handleShowPictureBrowserClick(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>

      {!isShowPictureBrowser && showBtnEl}

      {isShowPictureBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo?.picture_urls}
          closeClcik={() => handleShowPictureBrowserClick(false)}
        />
      )}
    </DetailPicturesStyleWrapper>
  );
});

export default DetailPictures;
