import React from "react";
import styled from "styled-components";

const SkeletonPulse = styled.div`
  display: inline-block;
  width: ${(props) => `${props.width}%` || "100%"};
  height: ${(props) => `${props.height}%` || "100%"};
  background: linear-gradient(-90deg, #03080f 0%, #081221 50%, #03080f 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  border-radius: ${(props) => `${props.borderRadius}px` || "0px"};
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SkeletonBar = styled(SkeletonPulse)`
  width: 5.5em;
  /* border-radius: 5px; */
  &::before {
    content: "\00a0"
  }
`;

export const Skeleton = (props) => <SkeletonPulse {...props} />;

export { SkeletonBar };
