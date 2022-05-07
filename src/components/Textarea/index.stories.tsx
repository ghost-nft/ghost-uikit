import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Search from "../Svg/Icons/Search";
import StarFill from "../Svg/Icons/StarFill";
import Heading from "../Heading/Heading";
import Textarea from "./Textarea";
import { scales } from "./types";
import Box from "../Box/Box";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div>
      {Object.keys(scales).map((key) => (
        <>
          <Heading mb="16px">{key}</Heading>
          <Row>
            <Textarea type="text" scale={scales[key]} value="Value" />
            <Textarea type="text" scale={scales[key]} placeholder="Placeholder..." />
            <Textarea type="text" scale={scales[key]} value="Disabled" disabled />
            <Textarea type="text" scale={scales[key]} value="Success" isSuccess />
            <Textarea type="text" scale={scales[key]} value="Warning" isWarning />
          </Row>
        </>
      ))}
    </div>
  );
};