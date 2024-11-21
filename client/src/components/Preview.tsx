import React, { useEffect, useState } from "react";
import Fields from "./FieldsForm";

interface InputProps {
	jsonContent: string;
}
interface FormObject {
	formTitle?: string;
	formDescription?: string;
	fields?: Array<any>;
}
const Preview: React.FC<InputProps> = ({ jsonContent }) => {
	const [formObject, setFormObject] = useState<FormObject | null>(null);
	const formTitleError = "Please Enter Form Title  'formTitle'";
	const formDescriptionError =
		"Please Enter Form Description  'formDescription";
	useEffect(() => {
		try {
			const parsedData = JSON.parse(jsonContent);
			setFormObject(parsedData); // Update state with parsed data
		} catch (error) {
			console.error("Error parsing JSON:", error); // Handle any potential JSON parsing errors
			setFormObject(null); // In case of an error, reset to null or handle as needed
		}
	}, [jsonContent]);

	return (
		<div className=" w-[60%]">
			<div>
				{formObject && formObject.formTitle ? (
					<h1>{formObject.formTitle}</h1>
				) : (
					<h1>{formTitleError}</h1>
				)}
			</div>
			<div>
				{formObject && formObject.formDescription ? (
					<h2>{formObject.formDescription}</h2>
				) : (
					<h2>{formDescriptionError}</h2>
				)}
			</div>
			<div>
				{formObject && formObject.fields ? (
					<Fields fields={formObject.fields} />
				) : (
					<h2>Please Enter Form Fields</h2>
				)}
			</div>
		</div>
	);
};

export default Preview;
