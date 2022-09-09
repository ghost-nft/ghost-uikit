import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path d="M7.963 11.98 3.053 9.08 7.962 16l4.913 -6.92 -4.915 2.9h0.002zM8.037 0 3.127 8.149l4.91 2.903 4.91 -2.9L8.037 0z" />
    </Svg>
  );
};

export default Icon;
