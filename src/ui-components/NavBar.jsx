/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Heading, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1230px"
      height="110px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <View
        width="1230px"
        height="110px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(4,125,149,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="calc(50% - 20px - 0px)"
        left="calc(50% - 45.5px - 510px)"
        level="3"
        children="Notes"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        border="1px SOLID rgba(13,26,38,1)"
        top="32px"
        left="1063px"
        backgroundColor="rgba(255,255,255,1)"
        size="large"
        isDisabled={true}
        variation="primary"
        children="Sign Out"
        {...getOverrideProps(overrides, "Button3887806")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        border="1px SOLID rgba(13,26,38,1)"
        top="32px"
        left="868px"
        backgroundColor="rgba(255,255,255,1)"
        size="large"
        isDisabled={true}
        variation="primary"
        children="Create Note"
        {...getOverrideProps(overrides, "Button3887810")}
      ></Button>
    </View>
  );
}
