import React from "react";

interface JsonInputProps {
	jsonContent: string;
	setJsonContent: (value: string) => void;
}

const JsonInputField: React.FC<JsonInputProps> = ({
	jsonContent,
	setJsonContent,
}) => {
	return (
		<div className="w-full">
			<textarea
				className="bg-yellow-300 w-full flex-row h-96 p-4 break-words"
				value={jsonContent} // Ensure the textarea value is controlled by jsonContent
				onChange={(e) => setJsonContent(e.target.value)}
			/>
		</div>
	);
};

export default JsonInputField;
