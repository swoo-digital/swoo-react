import { FC } from "react";
import { ButtonBox, ButtonTitle } from "./Button.style";

interface ButtonProps {
	title: string | number;
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
	testId?: string;
}

const Button: FC<ButtonProps> = ({ title, onClick, testId }) => {
	return (
		<ButtonBox data-testid={testId} onClick={onClick}>
			<ButtonTitle>
				{title}
			</ButtonTitle>
		</ButtonBox>
	)
}

export default Button
