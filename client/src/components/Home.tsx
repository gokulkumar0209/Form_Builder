import { useState } from "react";
import JsonInputField from "./JsonInputField";
import FormPreview from "./FormPreview";

function Home() {
	const [jsonContent, setJsonContent] = useState<string>("");
	const [darkMode, setDarkMode] = useState<boolean>(true); // State to toggle dark mode

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<div
			className={`w-full flex justify-center items-center p-4 space-x-8 transition-all duration-300 ${
				darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
			}`}
		>
			<div className="absolute top-4 right-4">
				<button
					onClick={toggleDarkMode}
					className="p-2 bg-blue-500 text-white rounded-full shadow-lg focus:outline-none hover:bg-blue-400"
				>
					{darkMode ? "Light Mode" : "Dark Mode"}
				</button>
			</div>

			<div className="flex flex-col md:flex-row w-full max-w-6xl space-y-6 md:space-y-0 md:space-x-8">
				{/* Json Input Section */}
				<div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
					<JsonInputField
						jsonContent={jsonContent}
						setJsonContent={setJsonContent}
					/>
				</div>

				{/* Form Preview Section */}
				<div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
					<FormPreview jsonContent={jsonContent} />
				</div>
			</div>
		</div>
	);
}

export default Home;
