import React from "react";
import styled from "styled-components";
import { BinanceIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  BnbPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const BnbPrice: React.FC<Props> = ({ BnbPriceUsd, color = "textSubtle" }) => {
  return BnbPriceUsd ? (
    <PriceLink
      href="https://ghostnft.io/swap"
      target="_blank"
    >
      <BinanceIcon width="24px" mr="8px" />
      <Text color={color} bold>{`$${BnbPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(BnbPrice);
