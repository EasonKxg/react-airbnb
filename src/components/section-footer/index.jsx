import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { SectionFooterStyleSwrpper } from "./style";
import IconMoreArrow from "assets/svg/icon-more-arrow";
import theme from "assets/theme";

const SectionFooter = memo((props) => {
  const navigate = useNavigate();
  const { name } = props;
  let messageName = `显示全部房源`;
  if (name) messageName = `显示全部${name}房源`;

  function toEntireClick() {
    navigate("/entire");
  }
  return (
    <SectionFooterStyleSwrpper
      color={name ? theme.color.secondaryColor : "#000"}
    >
      <span className="name" onClick={toEntireClick}>
        {messageName}
      </span>
      <span className="icon">
        <IconMoreArrow />
      </span>
    </SectionFooterStyleSwrpper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default SectionFooter;
