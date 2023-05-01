import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ScrollView from "baseUi/scroll-view";
import { SectionTabStyleWrapper } from "./style";

function SectionTab(props) {
  const [current, setCurrent] = useState(0);
  const { tanNames = [], tabClick } = props;
  function handleItemClick(index, name) {
    setCurrent(index);
    tabClick(index, name);
  }
  for (let i = 0; i < 10; i++) {
    tanNames.push(`地名${i}`);
  }
  return (
    <SectionTabStyleWrapper>
      <ScrollView>
        {tanNames.map((item, index) => {
          return (
            <div
              className={classNames("item-tab", { active: current === index })}
              key={item}
              onClick={(e) => handleItemClick(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </SectionTabStyleWrapper>
  );
}

SectionTab.propTypes = {
  tanNames: PropTypes.array,
};

export default SectionTab;
