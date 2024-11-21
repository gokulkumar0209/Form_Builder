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
		<div className="flex items-center space-x-3">
			<input
				type="checkbox"
				id={field.label}
				required={field.required}
				className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
			/>
			{field.label && (
				<label htmlFor={field.label} className="text-gray-700 font-medium">
					{field.label}
				</label>
			)}
		</div>
	);
};

export default CheckBoxField;
