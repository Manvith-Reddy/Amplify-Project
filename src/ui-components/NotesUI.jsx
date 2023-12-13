/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function NotesUI(props) {
  const { notes, overrides, ...rest } = props;
  return (
    <View
      width="760px"
      height="550px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(238,225,225,1)"
      {...getOverrideProps(overrides, "NotesUI")}
      {...rest}
    >
      <View
        width="760px"
        height="550px"
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="609px"
        height="274px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="108px"
        left="57px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={notes?.Text}
        {...getOverrideProps(overrides, "data")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="445px"
        height="44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="33px"
        left="46px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={notes?.Tile}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        border="1px SOLID rgba(255,255,255,1)"
        top="18px"
        left="650px"
        size="large"
        isDisabled={false}
        variation="default"
        children="Delete"
        {...getOverrideProps(overrides, "Button38954166")}
      ></Button>
      <Button
        width="68px"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-end"
        position="absolute"
        top="18px"
        left="calc(50% - 34px - -207px)"
        backgroundColor="rgba(255,255,255,1)"
        size="large"
        isDisabled={true}
        variation="primary"
        children="Edit"
        {...getOverrideProps(overrides, "Button38954199")}
      ></Button>
    </View>
  );
}
