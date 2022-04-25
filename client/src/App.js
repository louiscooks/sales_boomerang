import $ from "jquery";
import "./App.css";
import { useState, useEffect } from "react";
import buildApi from "./Utils/Api/index.js";

import validateInput from "./Utils/validateInput.js";
import Form from "./Components/Form/Form";
import FormSelect from "./Components/Form/FormSelect/FormSelect";
const API = buildApi();
function getRandomColor(url, body, setState) {
	API.makePostRequest(url, body)
		.then((data) => setState((previous) => data.rgb))
		.catch((e) => console.log(e));
}
function getColors(url, setState) {
	API.makeGetRequest(url)
		.then((data) => setState((previous) => data.colors))
		.catch((e) => console.log(e));
}

function App() {
	const [rgb, setRgb] = useState("255,255,255");
	const [color, setColor] = useState(false);
	const [header, setHeader] = useState("color");
	function handlePostSubmit(e) {
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
		getRandomColor(url, payload, setRgb);
	}
	useEffect(() => {
		handleGetRequest();
	}, []);
	function formatSelectOptions(obj) {
		const arr = Object.entries(obj);
		let data = [];
		arr.forEach(([key, value], idx) => {
			let entity = { id: (idx += 1), label: key, value: value };
			data.push(entity);
		});
		return data;
	}
	function handleGetRequest(params = null) {
		let url = "http://localhost:8080/colors";
		if (params !== null) {
			url = url + "/" + params;
		}
		getColors(url, setColor);
	}

	console.log("this is color");
	return (
		<>
			<header style={{ background: `rgb(${rgb})` }} className="mainHeader">
				<h1 className="header-title">HelloWorld</h1>
			</header>
			<main>
				<section>
					<h2>My favorite color is {rgb}</h2>
				</section>
				<Form handlePostSubmit={handlePostSubmit} />
				<FormSelect
					name="currentColor"
					setHeader={setHeader}
					setRgb={setRgb}
					options={color && formatSelectOptions(color)}
				/>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
