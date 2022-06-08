import { sizeTypes, variantTypes } from "../../utils/types";


export interface VariantProps {
  variant: variantTypes;
  size: sizeTypes;
}

export interface TextVariantProps {
  variant: variantTypes;
  size: sizeTypes;
}

export type ButtonProps = VariantProps

export type ButtonTextProps = TextVariantProps