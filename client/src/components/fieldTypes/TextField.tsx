import React from "react";

interface Field {
	required?: boolean;
	label?: string;
	placeholder?: string;
}
interface TextFieldProps {
	field: Field;
}

const TextField: React.FC<TextFieldProps> = ({ field }) => {
	console.log(field.placeholder);
	return (
		<>
			<label>{field.label ? field.label : ""}</label>
			<input
				type="text"
				required={field.required}
				placeholder={field.placeholder}
			/>
		</>
	);
};

TextField.propTypes = {};

export default TextField;
