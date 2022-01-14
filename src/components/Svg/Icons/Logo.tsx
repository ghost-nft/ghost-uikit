import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <img src="https://cloudfront.ghostnft.io/images/icon.png" />
    <img src="https://cloudfront.ghostnft.io/images/round-512.png" width={32} height={32}/>
  );
};

export default Icon;
