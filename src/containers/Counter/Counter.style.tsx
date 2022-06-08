import styled from "styled-components";
import { variant } from "styled-system";
import { CountViewProps } from "./Counter.props";

const counterSize = variant({
  prop: "size",
  key: "counterStyles"
})
const counterTextStyle = variant({
  prop: "variant",
  key: "counterTextStyles"
})


export const CountView = styled("p")<CountViewProps>(
  { 
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "1.2",
    fontFamily: '"Inter-Bold", "Inter", sans-serif',
  },
  counterSize,
  counterTextStyle
)
