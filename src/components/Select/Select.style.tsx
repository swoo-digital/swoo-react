import styled from "styled-components";
import { variant } from "styled-system"
import { SelectProps } from "./Select.props";


const selectStyle = variant({
  prop: "variant",
  key: "buttons"
})

const selectSize = variant({
  prop: "selectSize",
  key: "buttonSizes"
});


export const SelectBox = styled("select")<SelectProps>(
  {
    display: "flex",
    cursor: "pointer",
    border: "none",
    outline: "none",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    padding:10
  },
  selectStyle,
  selectSize
)
