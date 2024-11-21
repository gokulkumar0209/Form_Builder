import React from "react";

interface NumberObject {
	label?: string;
	required?: boolean;
	placeholder?: string;
	min?: number;
	max?: number;
}

interface NumberFieldProps {
	field: NumberObject;
}

const NumberField: React.FC<NumberFieldProps> = ({ field }) => {
	return (
		<div>
			<label>{field.label}</label>
			<input
				type="number"
				placeholder={field.placeholder}
				required={field.required}
				{...(field.min && { min: field.min })}
				{...(field.max && { max: field.max })}
			/>
		</div>
	);
};

export default NumberField;
