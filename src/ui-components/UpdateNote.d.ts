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
export declare type UpdateNoteOverridesProps = {
    UpdateNote?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    Button3868219?: PrimitiveOverrideProps<ButtonProps>;
    TextField38672453?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    TextField38672559?: PrimitiveOverrideProps<TextFieldProps>;
    Button38954162?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UpdateNoteProps = React.PropsWithChildren<Partial<ViewProps> & {
    notes?: any;
} & {
    overrides?: UpdateNoteOverridesProps | undefined | null;
}>;
export default function UpdateNote(props: UpdateNoteProps): React.ReactElement;
