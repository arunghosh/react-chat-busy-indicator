import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function BusyIndicator({ busy, length, delay }) {
  const [position, setPosition] = useState(0);
  const updatePosition = () => setPosition(pos => (pos + 1) % length);

  useEffect(() => {
    if (!busy || !delay) return;
    const timerId = setInterval(updatePosition, delay);
    return () => clearInterval(timerId);
  }, [delay, busy, length]);

  return (
    <div>
      {Array.from({ length }, (_, index) => (
        <BusyItem key={index} current={position === index}>
          &nbsp;
        </BusyItem>
      ))}
    </div>
  );
}

const BusyItem = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background: ${props => (props.current ? "#2980b9" : "#bdc3c7")};
  margin: 0px 0.3rem 0px 0;
  display: inline-block;
  line-height: 0.6rem;
`;
