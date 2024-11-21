import React from "react";
import TextField from "./fieldTypes/TextField";
import EmailField from "./fieldTypes/EmailField";
import CheckBoxField from "./fieldTypes/CheckBoxField";
import PasswordField from "./fieldTypes/PasswordField";
import DateField from "./fieldTypes/DateField";
import NumberField from "./fieldTypes/NumberField";
import RadioField from "./fieldTypes/RadioField";
import TeleField from "./fieldTypes/TeleField";
import SelectField from "./fieldTypes/SelectField";
import FileField from "./fieldTypes/FileField";

interface Validation {
	pattern?: string;
	message?: string;
}

interface Option {
	value: string;
	label: string;
}

interface Field {
	id: string;
	type: string;
	label: string;
	required?: boolean;
	placeholder?: string;
	validation?: Validation;
	options?: Option[];
	accept?: string[];
	[key: string]: any;
}

interface FieldsProps {
	fields: Field[];
}

const Fields: React.FC<FieldsProps> = ({ fields }) => {
	const formSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted");
	};

	const renderField = (field: Field) => {
		switch (field.type) {
			case "checkbox":
				return <CheckBoxField key={field.id} field={field} />;
			case "date":
				return <DateField key={field.id} field={field} />;
			case "email":
				return <EmailField key={field.id} field={field} />;
			case "file":
				return <FileField key={field.id} field={field} />;
			case "number":
				return <NumberField key={field.id} field={field} />;
			case "password":
				return <PasswordField key={field.id} field={field} />;
			case "radio":
				return <RadioField key={field.id} field={field} />;
			case "text":
				return <TextField key={field.id} field={field} />;
			case "tel":
				return <TeleField key={field.id} field={field} />;
			case "select":
				return <SelectField key={field.id} field={field} />;
			default:
				console.warn(`Unsupported field type: ${field.type}`);
				return null;
		}
	};

	return (
		<form
			onSubmit={formSubmit}
			className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg space-y-6"
		>
			{fields.map((field) => renderField(field))}

			<button
				type="submit"
				className="w-full py-3 px-6 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
			>
				Submit
			</button>
		</form>
	);
};

export default Fields;
