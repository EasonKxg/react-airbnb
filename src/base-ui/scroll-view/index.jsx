import React, { memo, useState, useEffect, useRef } from "react";
import { ScrollViewStyleWrapper } from "./style";

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(true);
  const [offsetY, setOffsetY] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;
    const totalScroll = scrollWidth - clientWidth;
    console.dir(scrollRef.current);
    setOffsetY(totalScroll);
    setShowRight(totalScroll > 0);
  });

  function handleClick(event) {
    scrollRef.current.style.transform = `translate(${-offsetY}px)`;
  }
  return (
    <ScrollViewStyleWrapper>
      <button>左侧按钮</button>
      {showRight && <button onClick={(e) => handleClick()}>右侧按钮</button>}
      <div className="scroll-conent" ref={scrollRef}>
        <div className="scroll">{props.children}</div>
      </div>
    </ScrollViewStyleWrapper>
  );
});

export default ScrollView;
