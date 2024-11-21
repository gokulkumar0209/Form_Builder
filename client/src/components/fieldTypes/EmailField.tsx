import React, { useState, useEffect } from "react";

// interface ValidationObject {
// 	pattern?: RegExp;
// 	message?: string;
// }

interface EmailObject {
	label?: string;
	required?: boolean;
	placeholder?: string;
	validation?: any;
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
			if (email && emailRegex && !emailRegex.test(email)) {
				setMessage(
					field.validation?.message || "Please enter a valid email address."
				);
			} else {
				setMessage("");
			}
		};

		const timer = setTimeout(validateEmail, 1000);
		return () => clearTimeout(timer);
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
				value={email}
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
