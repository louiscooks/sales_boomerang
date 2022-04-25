import { useState } from "react";
function FormSelect(props) {
	console.log("this is the options for select", props.options);
	const [value, setValue] = useState("");

	function handleSelectOnChange(e) {
		console.log(e.target.value);
		setValue((previous) => {
			return e.target.value;
		});
		props.setRgb((previous) => {
			return e.target.value;
		});
	}
	if (props.options.length) {
		return (
			<select
				value={value}
				name={props.name}
				onChange={(e) => {
					handleSelectOnChange(e);
				}}
			>
				{props.options.map((option) => (
					<option value={option.value} key={option.id}>
						{option.label}
					</option>
				))}
			</select>
		);
	}
	return null;
}

export default FormSelect;
