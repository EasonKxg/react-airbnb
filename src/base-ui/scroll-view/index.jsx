import React, { memo, useState, useEffect, useRef } from "react";
import { ScrollViewStyleWrapper } from "./style";
import IconArrowLeft from "assets/svg/icon-arrow-left";
import IconArrowRight from "assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(true);
  const [showLeft, setShowLeft] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const scrollRef = useRef();
  const totalInstanceRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;
    const totalScroll = scrollWidth - clientWidth;
    totalInstanceRef.current = totalScroll;

    setShowRight(totalScroll > 0);
  }, [props.children]);

  function handleClick(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollRef.current.children[newIndex];
    const offsetLeft = newEl.offsetLeft;
    scrollRef.current.style.transform = `translate(${-offsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRight(totalInstanceRef.current > offsetLeft);
    setShowLeft(offsetLeft > 0);
  }
  return (
    <ScrollViewStyleWrapper>
      {showLeft && (
        <div onClick={(e) => handleClick(false)} className="control left">
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div onClick={(e) => handleClick(true)} className="control right">
          <IconArrowRight />
        </div>
      )}
      <div className="scroll-conent">
        <div className="scroll" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewStyleWrapper>
  );
});

export default ScrollView;
