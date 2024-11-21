import React, { useEffect, useState } from "react";
import Fields from "./FieldsForm";

// Define the structure of the field objects
interface Field {
	id: string;
	type: string;
	label: string;
	required?: boolean;
	placeholder?: string;
	// Add other field-specific properties as needed
}

interface FormPreviewProps {
	jsonContent: string;
}

interface FormObject {
	formTitle?: string;
	formDescription?: string;
	fields?: Field[];
}

const FormPreview: React.FC<FormPreviewProps> = ({ jsonContent }) => {
	const [formObject, setFormObject] = useState<FormObject | null>(null);
	const [error, setError] = useState<string>("");

	// Error messages
	const formTitleErrorMessage = "Please Enter Form Title 'formTitle'";
	const formDescriptionErrorMessage =
		"Please Enter Form Description 'formDescription'";

	// Parse JSON content and update state
	useEffect(() => {
		try {
			const parsedData = JSON.parse(jsonContent);
			setFormObject(parsedData); // Update state with parsed data
			setError(""); // Clear error if JSON parsing is successful
		} catch (error) {
			console.error("Error parsing JSON:", error); // Handle any potential JSON parsing errors
			setError("Invalid JSON format. Please check the input.");
		}
	}, [jsonContent]); // Added jsonContent as dependency to re-run effect on changes

	return (
		<div className="w-full md:w-[60%]">
			{error && (
				<div
					className="error-message"
					style={{ color: "red", marginBottom: "1rem" }}
				>
					{error}
				</div>
			)}

			<div>
				{formObject?.formTitle ? (
					<h1>{formObject.formTitle}</h1>
				) : (
					<h1>{formTitleErrorMessage}</h1>
				)}
			</div>

			<div>
				{formObject?.formDescription ? (
					<h2>{formObject.formDescription}</h2>
				) : (
					<h2>{formDescriptionErrorMessage}</h2>
				)}
			</div>

			<div>
				{formObject?.fields?.length ? (
					<Fields fields={formObject.fields} />
				) : (
					<h2>Please Enter Form Fields</h2>
				)}
			</div>
		</div>
	);
};

export default FormPreview;
