import React from "react";

const Input = ({ type, label, id }: any) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} />
		</div>
	);
};

export default Input;
