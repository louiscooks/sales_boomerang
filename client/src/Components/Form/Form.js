import { memo } from "react";
import FormInput from "./FormInput/FormInput.js";

function Form(props) {
	return (
		<form id={"color-form"}>
			<div className="row d-flex justify-content-center m-0 p-0">
				<h5>Style header with a random color</h5>
				<div className="col-11 mb-3 ">
					<div className="row row-cols-3">
						<FormInput name="red" label="Red Color" />
						<FormInput name="green" label="Green Color" />
						<FormInput name="blue" label="Blue Color" />
					</div>
				</div>
				<div className="col-12 d-flex justify-content-center">
					<button
						onClick={props.handlePostSubmit}
						className={"btn btn-primary"}
					>
						Generate Random Color
					</button>
				</div>
			</div>
		</form>
	);
}

export default memo(Form);
