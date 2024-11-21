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
	return (
		<div className="flex flex-col space-y-2 mb-4">
			{field.label && (
				<label htmlFor="text-field" className="text-gray-700 font-medium">
					{field.label}
				</label>
			)}
			<input
				id="text-field"
				type="text"
				required={field.required}
				placeholder={field.placeholder || ""}
				className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			/>
		</div>
	);
};

export default TextField;
