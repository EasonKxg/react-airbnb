import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import SectionHeader from "components/section-header";
import SectionRooms from "components/section-rooms";
import SectionTab from "components/section-tabs";
import SectionFooter from "components/section-footer";
import { HomeSectionTabStyleWrapper } from "./style";

const HomeSectionTab = memo((props) => {
  const { infoData } = props;
  const initTabName = Object.keys(infoData.dest_list)[0];
  const [cityName, setCityName] = useState(initTabName);

  const handleTabClick = useCallback((index, name) => {
    setCityName(name);
  }, []);
  const tabNames = infoData?.dest_address?.map((item) => item.name);

  return (
    <HomeSectionTabStyleWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTab
        tanNames={tabNames}
        tabClick={(index, name) => handleTabClick(index, name)}
      />
      <SectionRooms
        roomList={infoData.dest_list?.[cityName]}
        itemWidth={"31%"}
      />
      <SectionFooter name={cityName} />
    </HomeSectionTabStyleWrapper>
  );
});

HomeSectionTab.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionTab;
