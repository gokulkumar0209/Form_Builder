import React from "react";

interface OptionObject {
	value?: string;
	label?: string;
}

interface RadioObject {
	id: string;
	label: string;
	required?: boolean;
	options?: Array<OptionObject>;
}

interface RadioFieldProps {
	field: RadioObject;
}

const RadioField: React.FC<RadioFieldProps> = ({ field }) => {
	return (
		<div className="flex flex-col space-y-2 mb-4">
			<label className="text-gray-700 font-medium">{field.label}</label>
			<div className="space-y-2">
				{field.options?.map((option) => (
					<div key={option.value} className="flex items-center space-x-2">
						<input
							type="radio"
							id={option.value}
							name={field.id}
							value={option.value}
							required={field.required}
							className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
						/>
						<label
							htmlFor={option.value}
							className="text-gray-600 cursor-pointer"
						>
							{option.label}
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default RadioField;
