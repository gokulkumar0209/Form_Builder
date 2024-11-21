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
		<div className="flex flex-col space-y-2 mb-4">
			{field.label && (
				<label className="text-gray-700 font-medium">{field.label}</label>
			)}
			<input
				type="number"
				placeholder={field.placeholder}
				required={field.required}
				min={field.min}
				max={field.max}
				className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
			/>
			{(field.min !== undefined || field.max !== undefined) && (
				<p className="text-xs text-gray-500">
					{field.min !== undefined && field.max !== undefined
						? `Enter a value between ${field.min} and ${field.max}`
						: field.min !== undefined
						? `Minimum value: ${field.min}`
						: `Maximum value: ${field.max}`}
				</p>
			)}
		</div>
	);
};

export default NumberField;
