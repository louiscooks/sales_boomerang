function FormSelect(props) {
	if (props.options.length) {
		return (
			<select
				value={props.value}
				name={props.name}
				onChange={(e) => {
					props.handleSelectOnChange(e);
				}}
			>
				{props.options.map((option) => (
					<option value={option.value} key={option.id} name={option.value}>
						{option.label}
					</option>
				))}
			</select>
		);
	}
	return null;
}

export default FormSelect;
