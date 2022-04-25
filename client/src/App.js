import $ from "jquery";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import formatSelectOptions from "./Utils/formatSelectOptions";
import validateInput from "./Utils/validateInput.js";
import Form from "./Components/Form/Form";
import FormSelect from "./Components/Form/FormSelect/FormSelect";
import colorQuery from "./Controller/Color";

function App() {
	const [rgb, setRgb] = useState("255,255,255");
	const [color, setColor] = useState(false);
	const [header, setHeader] = useState("white");
	const [value, setValue] = useState("");

	useEffect(() => {
		handleGetRequest();
	}, []);

	const handlePostSubmit = useCallback((e) => {
		e.preventDefault();
		//this sole job is to get the payload
		let payload = {};
		$("#color-form input[type=text]").each((idx, input) => {
			const value = $(`input[name=${input.name}]`).val().trim();
			const isValid = validateInput(value);
			if (isValid === true) {
				payload[input.name] = parseInt(value);
				return;
			}
			if (isValid === null) {
				payload[input.name] = null;
				return;
			}
		});
		// console.log(payload);
		const url = "http://localhost:8080/colors";
		colorQuery.getRandomColor(url, payload, setRgb);
	}, []);
	return (
		<>
			<header style={{ background: `rgb(${rgb})` }} className="mainHeader">
				<h1 className="header-title">HelloWorld</h1>
			</header>
			<main>
				<section>
					<h2>
						My favorite color is {header} or {rgb}
					</h2>
				</section>
				<div className="row">
					<div className="col-12">
						<h5>Select your favorite color:</h5>
					</div>
					<div className="col-3 offset-3">
						<FormSelect
							name="currentColor"
							value={value}
							handleSelectOnChange={handleSelectOnChange}
							options={color && formatSelectOptions(color)}
						/>
					</div>
				</div>
				<Form handlePostSubmit={handlePostSubmit} />
			</main>
			<footer></footer>
		</>
	);

	function handleSelectOnChange(e) {
		setValue((previous) => {
			return e.target.value;
		});
		setRgb((previous) => {
			return e.target.value;
		});
		//loops through select options
		const options = $('select[name="currentColor"] option');
		let name = null;
		options.map((idx, option) => {
			//matches the option with the option that has been selected
			if (option.value === e.target.value) {
				name = option.innerHTML;
			}
		});
		setHeader((previous) => {
			return name;
		});
	}

	function handleGetRequest(params = null) {
		let url = "http://localhost:8080/colors";
		if (params !== null) {
			url = url + "/" + params;
		}
		colorQuery.getColors(url, setColor);
	}
}

export default App;
