import React from "react";

interface CheckBoxObject {
	label?: string;
	required?: boolean;
}

interface CheckBoxFieldProps {
	field: CheckBoxObject;
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({ field }) => {
	return (
		<div className=" ">
			<label htmlFor="">{field.label}</label>
			<input type="checkbox" required={field.required} />
		</div>
	);
};

export default CheckBoxField;
