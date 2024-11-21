import React from "react";

interface DateObject {
	label?: string;
	required?: boolean;
	placeholder?: string;
}

interface DateFieldProps {
	field: DateObject;
}

const DateField: React.FC<DateFieldProps> = ({ field }) => {
	return (
		<div>
			<label htmlFor="">{field.label}</label>
			<input
				type="date"
				required={field.required}
				placeholder={field.placeholder}
			/>
		</div>
	);
};

export default DateField;
