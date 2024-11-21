import React from "react";

interface FileObject {
	label?: string;
	required?: boolean;
	placeholder?: string;
	accept?: Array<string>;
}

interface FieldFieldProps {
	field: FileObject;
}

const FileField: React.FC<FieldFieldProps> = ({ field }) => {
	// let field = {
	// 	id: "resume",
	// 	type: "file",
	// 	label: "Upload Resume",
	// 	required: true,
	// 	placeholder: "Upload your resume in PDF format",
	// 	accept: [".pdf", ".doc", ".docx"],
	// };
	return (
		<div>
			<label htmlFor="">{field.label}</label>
			<input
				type="file"
				accept={field.accept?.join(", ")}
				required={field.required}
				placeholder={field.placeholder}
			/>
		</div>
	);
};

export default FileField;
