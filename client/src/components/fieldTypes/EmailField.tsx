import React, { useState, useEffect } from "react";

interface ValidationObject {
	pattern?: RegExp;
	message?: string;
}

interface EmailObject {
	label?: string;
	required?: boolean;
	placeholder?: string;
	validation?: ValidationObject;
}

interface EmailProps {
	field: EmailObject;
}

const EmailField: React.FC<EmailProps> = ({ field }) => {
	const [email, setEmail] = useState<string>(""); // Email state
	const [message, setMessage] = useState<string>(""); // Validation message state

	useEffect(() => {
		const validateEmail = () => {
			const emailRegex =
				 /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (email && emailRegex && !emailRegex.test(email)) {
				setMessage(
					field.validation?.message || "Please enter a valid email address."
				);
			} else {
				setMessage(""); // Clear message if valid
			}
		};

		const timer = setTimeout(validateEmail, 500); // Debounce for 500ms
		return () => clearTimeout(timer); // Cleanup
	}, [email, field.validation]);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	return (
		<div>
			{field.label && <label htmlFor="email">{field.label}</label>}
			<input
				id="email"
				type="email"
				required={field.required}
				placeholder={field.placeholder}
				onChange={handleEmailChange}
				value={email} // Controlled input
			/>
			{message && (
				<p role="alert" style={{ color: "red" }}>
					{message}
				</p>
			)}
		</div>
	);
};

export default EmailField;
