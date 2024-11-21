import React, { useState, useEffect } from "react";

interface EmailObject {
	label?: string;
	required?: boolean;
	placeholder?: string;
	validation?: { message?: string };
}

interface EmailProps {
	field: EmailObject;
}

const EmailField: React.FC<EmailProps> = ({ field }) => {
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		const validateEmail = () => {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (email && !emailRegex.test(email)) {
				setMessage(
					field.validation?.message || "Please enter a valid email address."
				);
			} else {
				setMessage("");
			}
		};

		const timer = setTimeout(validateEmail, 1000); // Debounce validation
		return () => clearTimeout(timer);
	}, [email, field.validation]);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	return (
		<div className="flex flex-col space-y-2 mb-4">
			{field.label && (
				<label htmlFor="email" className="text-gray-700 font-medium">
					{field.label}
				</label>
			)}
			<input
				id="email"
				type="email"
				required={field.required}
				placeholder={field.placeholder}
				onChange={handleEmailChange}
				value={email}
				className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
			{message && (
				<p role="alert" className="text-red-500 text-sm">
					{message}
				</p>
			)}
		</div>
	);
};

export default EmailField;
