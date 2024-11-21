import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

interface JsonInputFieldProps {
	jsonContent: string;
	setJsonContent: React.Dispatch<React.SetStateAction<string>>;
}

const JsonInputField: React.FC<JsonInputFieldProps> = ({
	jsonContent,
	setJsonContent,
}) => {
	const [editorTheme, setEditorTheme] = useState<"vs-dark" | "vs-light">(
		"vs-dark"
	);

	// Handle changes in the Monaco editor
	const handleEditorChange = (value: string | undefined) => {
		if (value) {
			setJsonContent(value);
		}
	};

	// Download JSON content as a .json file
	const handleDownload = () => {
		const blob = new Blob([jsonContent], { type: "application/json" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "data.json";
		link.click();
	};

	// Copy JSON content to clipboard
	const handleCopy = () => {
		navigator.clipboard.writeText(jsonContent).then(() => {
			alert("JSON copied to clipboard!");
		});
	};

	// Toggle between light and dark modes for Monaco editor
	const toggleTheme = () => {
		setEditorTheme(editorTheme === "vs-dark" ? "vs-light" : "vs-dark");
	};

	return (
		<div className="space-y-4">
			<h2 className="text-2xl text-white font-semibold">JSON Input</h2>

			<div className="flex space-x-4 mb-4">
				<button
					onClick={handleCopy}
					className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-400 focus:outline-none"
				>
					Copy
				</button>

				<button
					onClick={handleDownload}
					className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-400 focus:outline-none"
				>
					Download
				</button>

				<button
					onClick={toggleTheme}
					className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-400 focus:outline-none"
				>
					{editorTheme === "vs-dark" ? "Light Mode" : "Dark Mode"}
				</button>
			</div>

			<MonacoEditor
				height="500px"
				width="100%"
				language="json"
				value={jsonContent}
				onChange={handleEditorChange}
				theme={editorTheme}
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
