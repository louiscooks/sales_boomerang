function FormInput(props) {
	return (
		<div className="label-group">
			<label className="label">{props.label}</label>
			<input type={"text"} name={props.name} className={"form-control"} />
		</div>
	);
}

export default FormInput;
