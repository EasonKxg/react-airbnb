import React, { memo } from "react";
import PropTypes from "prop-types";
import { SectionHeaderStyleWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subtitle = "默认子标题" } = props;

  return (
    <SectionHeaderStyleWrapper>
      <h1 className="title">{title}</h1>
      <div className="subtitle">{subtitle}</div>
    </SectionHeaderStyleWrapper>
  );
});

SectionHeader.prototypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default SectionHeader;
