import PropTypes from "prop-types";
import React, { memo } from "react";
import LongforItem from "components/longfor-item";
import ScrollView from "baseUi/scroll-view";
import { HomeLongforStyleWrapper } from "./style";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  return (
    <HomeLongforStyleWrapper>
      <ScrollView>
        {infoData?.list.map((item) => {
          return <LongforItem key={item.city} itemData={item} />;
        })}
      </ScrollView>
    </HomeLongforStyleWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongfor;
