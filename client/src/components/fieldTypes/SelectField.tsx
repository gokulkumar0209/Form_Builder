import React from "react";

interface Option {
	value: string;
	label: string;
}

interface SelectObjects {
	id: string;
	label?: string;
	required?: boolean;
	options?: Option[];
}

interface SelectFieldProps {
	field: SelectObjects;
}

const SelectField: React.FC<SelectFieldProps> = ({ field }) => {
	return (
		<div className="flex flex-col space-y-2 mb-4">
			{field.label && (
				<label htmlFor={field.id} className="text-gray-700 font-medium">
					{field.label}
				</label>
			)}

			<select
				id={field.id}
				name={field.id}
				required={field.required}
				className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			>
				<option value="" disabled>
					Select an option
				</option>

				{field.options?.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectField;
