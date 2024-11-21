import  { useState } from "react";
import Input from "./Input";
import Preview from "./Preview";

function Home() {
	const [jsonContent, setJsonContent]=useState("")
	return (
		<div className="w-[100vw] flex">
			<Input jsonContent={jsonContent}   setJsonContent={setJsonContent} />
			<Preview  jsonContent={jsonContent} />
		</div>
	);
}

export default Home;
