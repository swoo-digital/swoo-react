
export type buttonVariant = "primary" | "secondary"

export type buttonSize = "small" | "medium" | "large"

export interface VariantProps {
  variant: buttonVariant;
  size: buttonSize;
}

export interface TextVariantProps {
  variant: buttonVariant; 
}

export type ButtonProps = VariantProps

export type ButtonTextProps = TextVariantProps