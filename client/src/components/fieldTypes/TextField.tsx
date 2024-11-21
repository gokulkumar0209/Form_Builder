import React from "react";

interface TextFieldProps {
	field: Field;
}
interface Field {
	required: boolean;
}
const TextField: React.FC<TextFieldProps> = ({ field }) => {
	return <input type="text" required={field.required} />;
};

TextField.propTypes = {};

export default TextField;
