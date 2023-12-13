/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NotesUIOverridesProps = {
    NotesUI?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    data?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Button38954166?: PrimitiveOverrideProps<ButtonProps>;
    Button38954199?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NotesUIProps = React.PropsWithChildren<Partial<ViewProps> & {
    notes?: any;
} & {
    overrides?: NotesUIOverridesProps | undefined | null;
}>;
export default function NotesUI(props: NotesUIProps): React.ReactElement;
