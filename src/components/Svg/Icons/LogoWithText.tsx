import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const src = isDark ? "https://cloudfront.ghostnft.io/images/logo-white.png" : "https://cloudfront.ghostnft.io/images/logo.png";
  return (
    <img src="https://cloudfront.ghostnft.io/images/round-512.png" width={32} height={32}/>
    // <img src={src} />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
