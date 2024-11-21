import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

interface Field {
	id: string;
	type: string;
	label: string;
	required?: boolean;
	placeholder?: string;
	options?: { value: string; label: string }[];
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

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const formTitleErrorMessage = "Please Enter Form Title 'formTitle'";
	const formDescriptionErrorMessage =
		"Please Enter Form Description 'formDescription'";

	const onSubmit = (data: any) => {
		console.log("Form Data Submitted: ", data);
	};

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
		<div className="w-full md:w-[60%] p-8 bg-gray-800 rounded-lg shadow-lg space-y-6">
			{error && (
				<div className="text-red-500 text-lg font-semibold mb-4">{error}</div>
			)}

			<div className="mb-4">
				{formObject?.formTitle ? (
					<h1 className="text-3xl font-semibold text-white">
						{formObject.formTitle}
					</h1>
				) : (
					<h1 className="text-3xl font-semibold text-red-400">
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

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				{formObject?.fields?.map((field) => (
					<div key={field.id} className="mb-4">
						<label
							htmlFor={field.id}
							className="block text-gray-300 text-lg font-medium mb-2"
						>
							{field.label}
						</label>
						<Controller
							name={field.id}
							control={control}
							rules={{ required: field.required }}
							defaultValue=""
							render={({ field: controllerField }) => {
								switch (field.type) {
									case "text":
									case "email":
									case "password":
									case "number":
									case "date":
										return (
											<input
												{...controllerField}
												type={field.type}
												id={field.id}
												className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
												placeholder={field.placeholder}
											/>
										);
									case "select":
										return (
											<select
												{...controllerField}
												id={field.id}
												className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
											>
												{field.placeholder && (
													<option value="">{field.placeholder}</option>
												)}
												{field.options?.map((option, index) => (
													<option key={index} value={option.value}>
														{option.label}
													</option>
												))}
											</select>
										);
									case "radio":
										return (
											<div className="flex space-x-4">
												{field.options?.map((option, index) => (
													<div key={index} className="flex items-center">
														<input
															{...controllerField}
															type="radio"
															id={option.value}
															value={option.value}
															className="w-4 h-4 text-blue-500"
														/>
														<label
															htmlFor={option.value}
															className="ml-2 text-gray-300"
														>
															{option.label}
														</label>
													</div>
												))}
											</div>
										);
									case "checkbox":
										return (
											<div className="flex items-center space-x-2">
												<input
													{...controllerField}
													type="checkbox"
													id={field.id}
													className="w-4 h-4 text-blue-500"
												/>
												<label htmlFor={field.id} className="text-gray-300">
													{field.label}
												</label>
											</div>
										);
									case "textarea":
										return (
											<textarea
												{...controllerField}
												id={field.id}
												className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
												placeholder={field.placeholder}
											/>
										);
									case "file":
										return (
											<input
												{...controllerField}
												type="file"
												id={field.id}
												className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
											/>
										);
									default:
										return <></>;
								}
							}}
						/>
						{errors[field.id] && (
							<p className="text-red-400 text-sm mt-1">
								{field.required && `${field.label} is required`}
							</p>
						)}
					</div>
				))}

				<button
					type="submit"
					className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default FormPreview;
