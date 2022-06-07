import styled from "styled-components";
import { buttonStyle, variant } from "styled-system"
import { ButtonProps, ButtonTextProps } from "./Button.props";

const titleStyles = variant({
  prop: "variant",
  key: "buttonText"
})

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes"
});

export const ButtonBox = styled("button")<ButtonProps>(
  {
    "box-sizing": "border-box",
    "flex-shrink": 0,
    "width": "160px",
    "height": "auto",
    "display": "flex",
    "flex-direction": "row",
    "align-items": "center",
    padding: "16px",
    overflow: "visible",
    border: "none",
    outline: "none",
    "justify-content": "center",
    cursor: "pointer"
  },
  buttonStyle,
  buttonSize
)

export const ButtonTitle = styled("p")<ButtonTextProps>({
  "flex-shrink": 0,
  width: "auto", /* 23px */
  height: "auto", /* 29px */
  "white-space": "pre",
  "font-weight": "700",
  "font-family": '"Inter-Bold", "Inter", sans-serif',
  "font-size": "24px",
  "letter-spacing": "0px",
  "line-height": '1.2',
  margin: 0
},
  titleStyles
)
