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
		<div className="w-full max-w-4xl p-6">
			<textarea
				className="bg-gray-800 text-white border-2 border-gray-600 rounded-lg w-full h-96 p-4  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
				value={jsonContent}
				onChange={(e) => setJsonContent(e.target.value)}
				placeholder="Enter your JSON content here"
			/>
		</div>
	);
};

export default JsonInputField;
