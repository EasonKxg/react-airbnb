import React, { memo, useState } from "react";
import { CenterStyleWrapper, CenterSearchSrtleWrapper } from "./style";
import SearchTabs from "./children/search-tabs";
import SearchSections from "./children/search-sections";
import IconSearchBar from "assets/svg/icon-search-bar";
import SearchTitles from "assets/data/search_titles";

const HeaderCenter = memo(() => {
  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map((item) => item.title);
  function handleTabClick(index) {
    setTabIndex(index);
  }
  return (
    // <CenterStyleWrapper>
    //   <div className="titel">搜索房源和体验</div>
    //   <div className="icon-search">
    //     <IconSearchBar />
    //   </div>
    // </CenterStyleWrapper>

    <CenterSearchSrtleWrapper>
      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={handleTabClick} />
        <div className="infos">
          <SearchSections searchInfos={SearchTitles[tabIndex]["searchInfos"]} />
        </div>
      </div>
      {/* <SearchSections /> */}
    </CenterSearchSrtleWrapper>
  );
});

export default HeaderCenter;
