/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { updateNotes } from "../graphql/mutations";
import { getOverrideProps,useStateMutationAction} from "./utils";
import { Notes } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function UpdateNote(props) {
  const { notes, overrides, ...rest } = props;
  const [
    textFieldThreeEightSixSevenTwoFourFiveThreeValue,
    setTextFieldThreeEightSixSevenTwoFourFiveThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightSixSevenTwoFiveFiveNineValue,
    setTextFieldThreeEightSixSevenTwoFiveFiveNineValue,
  ] = useStateMutationAction("");
  const buttonThreeEightSixEightTwoOneNineOnClick = useDataStoreUpdateAction({
    fields: {
      Tile: textFieldThreeEightSixSevenTwoFourFiveThreeValue,
      Text: textFieldThreeEightSixSevenTwoFiveFiveNineValue,
    },
    id: notes?.id,
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
      {...getOverrideProps(overrides, "UpdateNote")}
      {...rest}
    >
      <View
        width="983px"
        height="549px"
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
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Button
        width="412px"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-end"
        position="absolute"
        top="464px"
        left="284px"
        size="large"
        isDisabled={false}
        variation="default"
        children="Save"
        onClick={() => {
          buttonThreeEightSixEightTwoOneNineOnClick();
        }}
        {...getOverrideProps(overrides, "Button3868219")}
      ></Button>
      <TextField
        width="620px"
        height="98px"
        label="Title"
        position="absolute"
        top="calc(50% - 49px - 167.5px)"
        left="7.73%"
        right="29.2%"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeEightSixSevenTwoFourFiveThreeValue}
        onChange={(event) => {
          setTextFieldThreeEightSixSevenTwoFourFiveThreeValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField38672453")}
      ></TextField>
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
          value={textFieldThreeEightSixSevenTwoFiveFiveNineValue}
          onChange={(event) => {
            setTextFieldThreeEightSixSevenTwoFiveFiveNineValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField38672559")}
        ></TextField>
      </Flex>
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
        {...getOverrideProps(overrides, "Button38954162")}
      ></Button>
    </View>
  );
}
