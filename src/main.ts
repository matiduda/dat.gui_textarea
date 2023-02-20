import './style.css'

// ES6:
import * as dat from 'dat.gui';

// Add a string controller.
var dataJSON = {
	JSON: "{}"
};

const object = {
	name: "Name",
	surname: "Surname",
	money: "50",
	age: 32
};

const gui = new dat.GUI();
const folder = gui.addFolder("Custom");

const changeInput = folder.add(object, 'name');

function updateFromJSON(json) {
	console.log(JSON.parse(json));
}

function insertTextArea(controller: dat.GUIController) {

	const controllerDomElement = controller.domElement;

	const textArea = document.createElement("textarea");
	textArea.name = "post";
	textArea.rows = 3;
	textArea.cols = 20;
	textArea.setAttribute("type", "text");
	textArea.setAttribute("spellcheck", "false");
	textArea.value = JSON.stringify(object, undefined, 2);
	textArea.onchange = (event) => updateFromJSON(event.target.value);
	const textAreaStyle = `
		margin-top: 10px;
		width: calc(100% - 10px);
		padding-right: 5px;
		resize: vertical;
		border: none;
		background-color: #303030;
		color: #1ec453;
	`
	textArea.setAttribute("style", textAreaStyle);

	controllerDomElement.innerHTML = '';

	controllerDomElement.appendChild(textArea);

	return textArea;
}

const input_div = folder.add(dataJSON, 'JSON');

const textAreaRef = insertTextArea(input_div);

changeInput.onChange((value) => {
	textAreaRef.value = JSON.stringify(object, undefined, 2);
})