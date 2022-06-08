import styled from "styled-components";
import { buttonStyle, variant } from "styled-system"
import { ButtonProps, ButtonTextProps } from "./Button.props";

const titleColors = variant({
  prop: "variant",
  key: "buttonText"
})

const titleStyles = variant({
  prop: "size",
  key: "buttonTextStyles"
})

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes"
});


export const ButtonBox = styled("button")<ButtonProps>(
  {
    display: "flex",
    cursor: "pointer",
    border: "none",
    outline: "none",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  buttonStyle,
  buttonSize
)

export const ButtonTitle = styled("p")<ButtonTextProps>({
  fontWeight: "700",
  fontFamily: '"Inter-Bold", "Inter", sans-serif',
  lineHeight: '1.2',
  margin: 0
},
  titleStyles,
  titleColors
)
