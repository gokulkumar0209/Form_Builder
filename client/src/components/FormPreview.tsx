import React, { useEffect, useState } from "react";
import Fields from "./FieldsForm";

interface Field {
	id: string;
	type: string;
	label: string;
	required?: boolean;
	placeholder?: string;
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

	const formTitleErrorMessage = "Please Enter Form Title 'formTitle'";
	const formDescriptionErrorMessage =
		"Please Enter Form Description 'formDescription'";

	useEffect(() => {
		try {
			const parsedData = JSON.parse(jsonContent);
			setFormObject(parsedData);
			setError(""); // Clear error if JSON parsing is successful
		} catch (error) {
			console.error("Error parsing JSON:", error);
			setError("Invalid JSON format. Please check the input.");
		}
	}, [jsonContent]);

	return (
		<div className="w-full  md:w-[60%] p-6 bg-gray-800 rounded-lg shadow-lg">
			{error && (
				<div className="text-red-500 text-lg font-semibold mb-4">{error}</div>
			)}

			<div className="mb-4">
				{formObject?.formTitle ? (
					<h1 className="text-2xl font-bold text-white">
						{formObject.formTitle}
					</h1>
				) : (
					<h1 className="text-2xl font-bold text-red-400">
						{formTitleErrorMessage}
					</h1>
				)}
			</div>

			<div className="mb-6">
				{formObject?.formDescription ? (
					<h2 className="text-xl text-gray-300">
						{formObject.formDescription}
					</h2>
				) : (
					<h2 className="text-xl text-gray-400">
						{formDescriptionErrorMessage}
					</h2>
				)}
			</div>

			<div>
				{formObject?.fields?.length ? (
					<Fields fields={formObject.fields} />
				) : (
					<p className="text-gray-400">Please Enter Form Fields</p>
				)}
			</div>
		</div>
	);
};

export default FormPreview;
