import React from "react";
import MonacoEditor from "@monaco-editor/react";

const copyToClipboard = (jsonContent: string) => {
	navigator.clipboard.writeText(jsonContent).then(
		() => alert("JSON copied to clipboard!"),
		(err) => alert("Failed to copy: " + err)
	);
};

const downloadJson = (jsonContent: string) => {
	const blob = new Blob([jsonContent], { type: "application/json" });
	const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "form-schema.json";
	link.click();
};

interface JsonInputProps {
	jsonContent: string;
	setJsonContent: (value: string) => void;
}

const JsonInputField: React.FC<JsonInputProps> = ({
	jsonContent,
	setJsonContent,
}) => {
	const handleEditorChange = (value: string | undefined) => {
		setJsonContent(value || "");
	};

	return (
		<div className="w-full max-w-4xl p-6">
			<div className="flex justify-between mb-4">
				<button
					onClick={() => copyToClipboard(jsonContent)}
					className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
				>
					Copy JSON
				</button>
				<button
					onClick={() => downloadJson(jsonContent)}
					className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
				>
					Download JSON
				</button>
			</div>

			<MonacoEditor
				height="400px"
				defaultLanguage="json"
				value={jsonContent}
				onChange={handleEditorChange}
				theme="vs-dark"
				options={{
					minimap: { enabled: false },
					scrollBeyondLastLine: false,
					wordWrap: "on",
					automaticLayout: true,
					tabSize: 2,
					fontSize: 14,
					lineNumbers: "on",
				}}
			/>
		</div>
	);
};

export default JsonInputField;
