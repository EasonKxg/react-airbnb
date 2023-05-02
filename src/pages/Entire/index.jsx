import React, { memo } from "react";
import EntireFilter from "./children/entire-filter";
import { EntireStyleWrapper } from "./style";
import filterData from "assets/data/filter_data";

const Entire = memo(() => {
  return (
    <EntireStyleWrapper>
      <EntireFilter filterData={filterData} />
    </EntireStyleWrapper>
  );
});

export default Entire;
