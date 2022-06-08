import { FC } from "react";
import { sizeTypes, variantTypes } from "../../utils/types";
import { ButtonBox, ButtonTitle } from "./Button.style";

interface ButtonProps {
	title: string | number;
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
	testId?: string;
	variant?: variantTypes,
	size?: sizeTypes
}

const Button: FC<ButtonProps> = ({ title, onClick, testId, variant = "primary", size = "medium" }) => {
	return (
		<ButtonBox
			size={size}
			variant={variant}
			data-testid={testId}
			onClick={onClick}
		>
			<ButtonTitle size={size} variant={variant}>
				{title}
			</ButtonTitle>
		</ButtonBox>
	)
}

export default Button
