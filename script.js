var btnCB = document.querySelector("input[type='checkbox']");
console.log(btnCB);
btnCB.addEventListener("change", (event) => {
	// console.log(event);
	if (event.target.checked) {
		console.log("Checked!");
	}
	else {
		console.log("Unchecked!");
	}
})