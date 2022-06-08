import { sizeTypes, variantTypes } from "../../utils/types";


export interface VariantProps {
  variant?: variantTypes;
  selectSize?: sizeTypes; 
}

export interface TextVariantProps {
  variant: variantTypes;
  size: sizeTypes;
}

export interface option {
  title: string,
  value: string 
}

export type SelectProps = VariantProps

export type SelectTextProps = TextVariantProps