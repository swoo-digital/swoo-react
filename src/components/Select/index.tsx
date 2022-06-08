import { FC } from "react";
import { sizeTypes, variantTypes } from "../../utils/types";
import { option } from "./Select.props";
import { SelectBox } from "./Select.style";

interface SelectProps {
	title?: string | number;
	onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
	testId?: string;
	variant?: variantTypes,
	size?: sizeTypes,
	options: option[],
	value: any
}

const Select: FC<SelectProps> = ({
	onChange,
	testId,
	options,
	variant = "primary",
	size = "small",
	value,
	title
}) => {
	return (
		<SelectBox
			onChange={onChange}
			value={value}
			data-testid={testId}
			variant={variant}
			selectSize={size}
		>
			{
				options.length ? options.map((option: option) => {
					return <option key={option.value} value={option.value}> {option.title} </option>
				}) : <option value=""> {title} </option>
			}

		</SelectBox>
	)
}





export default Select
