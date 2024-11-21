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
		<div className="flex flex-col space-y-2 mb-4">
			{field.label && (
				<label htmlFor={field.label} className="text-gray-700 font-medium">
					{field.label}
				</label>
			)}
			<input
				type="date"
				required={field.required}
				placeholder={field.placeholder}
				className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
		</div>
	);
};

export default DateField;
