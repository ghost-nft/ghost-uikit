import React from "react";
import { BnbPrice, BnbPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/BnbPrice",
  component: BnbPrice,
};

const Template: React.FC<BnbPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <BnbPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  BnbPriceUsd: 20.0,
};
