import React from "react";
import TextField from "./fieldTypes/TextField";
import EmailField from "./fieldTypes/EmailField";

// Define the structure of a single field object
interface FieldObject {
	type: string;
	id: string;
	field: {
		required: boolean;
	};
}

// Define the type for the Fields component's props
interface FieldsProps {
	fields: FieldObject[]; // An array of field objects
}

const Fields: React.FC<FieldsProps> = ({ fields }) => {
	function formSubmit(e: React.FormEvent) {
		e.preventDefault();
		console.log("Submitted");
	}

	return (
		<form onSubmit={formSubmit}>
			{fields.map((field, index) => {
				if (field.type === "text") {
					return <TextField key={index} field={field.field} />;
				}
				if (field.type === "email") {
					return <EmailField key={index} />;
				}
				return null; // Return null if no matching type
			})}
		</form>
	);
};

export default Fields;
