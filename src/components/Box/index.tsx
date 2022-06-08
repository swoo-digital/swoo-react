import styled from "styled-components";
import { variant } from "styled-system";
import { BoxProps } from "./Box.props";


const boxStyle = variant({
	prop: "variant",
	key: "boxs"
})

export const Box = styled("div")<BoxProps>(
	{
		display: "flex",
		flex: 1,
		height: "calc(100vh)",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	boxStyle
)

export default Box;



