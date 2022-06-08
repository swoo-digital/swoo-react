import styled from "styled-components";
import { variant } from "styled-system";
import { ThemeControllersProps } from "./ThemeControllers.props";


const boxStyle = variant({
	prop: "variant",
	key: "boxs"
})

export const ThemeControllers = styled("div")<ThemeControllersProps>(
	{
		position: 'fixed',
		right: '30px',
		top: '30px',
	},
	boxStyle
)

export default ThemeControllers;



