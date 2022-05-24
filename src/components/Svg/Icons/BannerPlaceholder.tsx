import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <img
      src="https://cloudfront.ghostnft.io/localnet/ghostnft/banner-sm.png"
      width="72"
      height="72"
    />
  );
};

export default Icon;
