import { useState } from "react";
import JsonInputField from "./JsonInputField";
import FormPreview from "./FormPreview";

function Home() {
	const [jsonContent, setJsonContent] = useState<string>("");

	return (
		<div className="w-full h-screen flex-col justify-center items-center p-4 space-x-8">
			<JsonInputField
				jsonContent={jsonContent}
				setJsonContent={setJsonContent}
			/>
			<FormPreview jsonContent={jsonContent} />
		</div>
	);
}

export default Home;
