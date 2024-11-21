import React, { useState, useEffect } from "react";

interface TeleFieldProps {
	field: {
		id: string;
		label?: string;
		required?: boolean;
		placeholder?: string;
		pattern?: string;
		validationMessage?: string;
	};
}

const TeleField: React.FC<TeleFieldProps> = ({ field }) => {
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	// Validate phone number when it changes
	useEffect(() => {
		const validatePhoneNumber = () => {
			let phoneRegex;
			try {
				// Use custom regex if provided, otherwise default to 10-digit numbers
				phoneRegex = field.pattern ? new RegExp(field.pattern) : /^\d{10}$/;
			} catch (error) {
				console.error("Invalid regex pattern:", error);
				phoneRegex = /^\d{10}$/; // Fallback to default
			}

			if (phoneNumber && !phoneRegex.test(phoneNumber)) {
				setMessage(
					field.validationMessage || "Please enter a valid phone number."
				);
			} else {
				setMessage("");
			}
		};

		const timer = setTimeout(validatePhoneNumber, 500); // Debounce validation
		return () => clearTimeout(timer);
	}, [phoneNumber, field.pattern, field.validationMessage]);

	const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(e.target.value);
	};

	return (
		<div className="flex flex-col space-y-2 mb-4">
			{field.label && (
				<label htmlFor={field.id} className="text-gray-700 font-medium">
					{field.label}
				</label>
			)}
			<input
				id={field.id}
				type="tel" // Use 'tel' input type for phone numbers
				placeholder={field.placeholder || "Enter your phone number"}
				required={field.required}
				value={phoneNumber}
				onChange={handlePhoneNumberChange}
				className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			/>
			{message && (
				<p className="text-red-500 text-sm mt-1" role="alert">
					{message}
				</p>
			)}
		</div>
	);
};

export default TeleField;
