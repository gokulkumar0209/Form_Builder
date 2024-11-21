import React from "react";
import TextField from "./fieldTypes/TextField";
import EmailField from "./fieldTypes/EmailField";

// Define the structure for a single field object with arbitrary properties
interface Field {
	type: string; // `type` could be any string that identifies the field type
	[key: string]: any; // Other properties can be added dynamically
}

interface FieldsProps {
	fields: Field[]; // Array of arbitrary field objects
}

const Fields: React.FC<FieldsProps> = ({ fields }) => {
	// Form submit handler
	function formSubmit(e: React.FormEvent) {
		e.preventDefault();
		console.log("Form submitted");
	}

	return (
		<form onSubmit={formSubmit} className=" grid">
			{fields.map((field, index) => {
				// You can use the 'type' property or any other property to determine the component
				if (field.type === "text") {
					return <TextField key={index} field={field} />;
				}
				if (field.type === "email") {
					return <EmailField key={index} field={field} />;
				}

				// Handle other field types dynamically here
				

				// Return null if no matching type is found
				return null;
			})}
			<button type="submit">Submit</button>
		</form>
	);
};

export default Fields;
