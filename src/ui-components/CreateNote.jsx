/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
//import { createNotes } from "../graphql/mutations";
import { Notes } from "../models";
import { schema } from "../models/schema";
import { getOverrideProps,useStateMutationAction,useDataStoreCreateAction} from "./utils";
import { Button, Flex, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function CreateNote(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeEightFiveSixNineNineSixValue,
    setTextFieldThreeEightFiveSixNineNineSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightFiveSixNineNineFiveValue,
    setTextFieldThreeEightFiveSixNineNineFiveValue,
  ] = useStateMutationAction("");
  const buttonThreeEightFiveSixNineNineSevenOnClick = useDataStoreCreateAction({
      fields: {
          Tile: textFieldThreeEightFiveSixNineNineSixValue,
          Text: textFieldThreeEightFiveSixNineNineFiveValue,
        },
        model: Notes,
        schema: schema,
        });
  return (
    <View
      width="983px"
      height="549px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateNote")}
      {...rest}
    >
      <Button
        width="412px"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-end"
        position="absolute"
        top="465px"
        left="calc(50% - 206px - -0.5px)"
        size="large"
        isDisabled={false}
        variation="default"
        children="Save"
        onClick={() => {
          buttonThreeEightFiveSixNineNineSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button3856997")}
      ></Button>
      <Flex
        gap="10px"
        direction="column"
        width="630px"
        height="119px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="215px"
        left="68px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <TextField
          width="620px"
          height="69px"
          label="Note"
          justifyContent="flex-end"
          shrink="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeEightFiveSixNineNineFiveValue}
          onChange={(event) => {
            setTextFieldThreeEightFiveSixNineNineFiveValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField3856995")}
        ></TextField>
      </Flex>
      <TextField
        width="620px"
        height="98px"
        label="Title"
        position="absolute"
        top="calc(50% - 49px - 139.5px)"
        left="7.93%"
        right="28.99%"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightFiveSixNineNineSixValue}
        onChange={(event) => {
          setTextFieldThreeEightFiveSixNineNineSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField3856996")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        border="1px SOLID rgba(255,255,255,1)"
        top="28px"
        left="893px"
        size="large"
        isDisabled={false}
        variation="default"
        children="X"
        {...getOverrideProps(overrides, "Button38954151")}
      ></Button>
    </View>
  );
}
