/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNoteOverridesProps = {
    CreateNote?: PrimitiveOverrideProps<ViewProps>;
    Button3856997?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    TextField3856995?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3856996?: PrimitiveOverrideProps<TextFieldProps>;
    Button38954151?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreateNoteProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreateNoteOverridesProps | undefined | null;
}>;
export default function CreateNote(props: CreateNoteProps): React.ReactElement;
