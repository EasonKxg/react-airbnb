import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "components/section-header";
import SectionRooms from "components/section-rooms";
import SectionFooter from "components/section-footer";

import { HomeSectionStyleWrapper } from "./style";  

function HomeSection(props) {
  const { infoData = {} } = props;

  return (
    <HomeSectionStyleWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData?.list?.slice(0, 8)} itemWidth={"23%"} />
      <SectionFooter />
    </HomeSectionStyleWrapper>
  );
}

HomeSection.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSection;
