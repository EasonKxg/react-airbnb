import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import classNames from "classnames";
import { EntireFilterStyleWrapper } from "./style";

const EntireFilter = memo((props) => {
  const { filterData } = props;
  const [selectItems, setSelectItems] = useState([]);

  function handleItemClick(item) {
    const newData = [...selectItems];
    if (newData.includes(item)) {
      const index = newData.findIndex((current) => current === item);
      newData.splice(index, 1);
    } else {
      newData.push(item);
    }
    setSelectItems(newData);
  }

  return (
    <EntireFilterStyleWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => handleItemClick(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </EntireFilterStyleWrapper>
  );
});

EntireFilter.propTypes = {
  filterData: PropTypes.array,
};

export default EntireFilter;
