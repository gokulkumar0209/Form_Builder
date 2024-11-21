import React from "react";

interface FileObject {
	label?: string;
	required?: boolean;
	accept?: Array<string>;
}

interface FileFieldProps {
	field: FileObject;
}

const FileField: React.FC<FileFieldProps> = ({ field }) => {
	// Ensure 'accept' is always an array before calling .join() on it
	const acceptTypes = Array.isArray(field.accept)
		? field.accept.join(", ")
		: undefined;

	return (
		<div className="flex flex-col space-y-2 mb-4">
			{field.label && (
				<label htmlFor="file-input" className="text-gray-700 font-medium">
					{field.label}
				</label>
			)}
			<input
				id="file-input"
				type="file"
				accept={acceptTypes}
				required={field.required}
				className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
			<p className="text-xs text-gray-500">
				{acceptTypes
					? `Allowed file types: ${acceptTypes}`
					: "No file type restrictions."}
			</p>
		</div>
	);
};

export default FileField;
