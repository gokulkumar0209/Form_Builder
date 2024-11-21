import React, { useState, useEffect } from "react";

interface PasswordObject {
	label?: string;
	required?: boolean;
	placeholder?: string;
	validation?: any;
}

interface PasswordProps {
	field: PasswordObject;
}

const PasswordField: React.FC<PasswordProps> = ({ field }) => {
	const [password, setPassword] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		const validatePassword = () => {
			const pattern =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
			if (!pattern.test(password)) {
				setMessage(
					"Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character."
				);
			} else {
				setMessage("");
			}
		};

		const timer = setTimeout(validatePassword, 1000);
		return () => clearTimeout(timer);
	}, [password]);

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	return (
		<div className="flex flex-col space-y-2 mb-4">
			{field.label && (
				<label htmlFor="password" className="text-gray-700 font-medium">
					{field.label}
				</label>
			)}
			<input
				id="password"
				type="password"
				required={field.required}
				placeholder={field.placeholder}
				onChange={handlePasswordChange}
				value={password}
				className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
			/>
			{message && (
				<p className="text-sm text-red-500" role="alert">
					{message}
				</p>
			)}
		</div>
	);
};

export default PasswordField;
