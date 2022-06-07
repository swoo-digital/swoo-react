import { FC } from "react";
import { buttonVariant, buttonSize } from "./Button.props";
import { ButtonBox, ButtonTitle } from "./Button.style";

interface ButtonProps {
	title: string | number;
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
	testId?: string;
	variant?: buttonVariant,
	size?: buttonSize
}

const Button: FC<ButtonProps> = ({ title, onClick, testId, variant = "primary", size = "medium" }) => {
	return (
		<ButtonBox
			size={size}
			variant={variant}
			data-testid={testId} onClick={onClick}>
			<ButtonTitle variant={variant}>
				{title}
			</ButtonTitle>
		</ButtonBox>
	)
}

export default Button
