import React, { useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider";
import { useIntersection } from "./useIntersection";

export const CustomContentProgressbar = (props) => {
  const { children, color } = props;
  const [valueEnd, setValueEnd] = React.useState(66);
  const ref = useRef(); // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-50px"); // Trigger if 200px is visible from the element

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      ref={ref}
    >
      <div style={{ position: "absolute" }}>
        <ProgressProvider valueStart={0} valueEnd={valueEnd}>
          {(value) => (
            <CircularProgressbar
              styles={{
                trail: {
                  // Trail color
                  stroke: "transparent",
                },
                path: {
                  stroke: color
                }
              }}
              value={inViewport ? value : 0}
            />
          )}
        </ProgressProvider>
      </div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
