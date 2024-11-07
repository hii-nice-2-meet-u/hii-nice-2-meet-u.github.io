function convert__Celsius_To_Fahrenheit(Celsius) {
	return +((Celsius * 9) / 5 + 32).toFixed(2);
}

function convert__Celsius_To_Kelvin(Celsius) {
	return +(+Celsius + 273.15).toFixed(2);
}

function convert__Fahrenheit_To_Celsius(Fahrenheit) {
	return +(((Fahrenheit - 32) * 5) / 9).toFixed(2);
}

function convert__Kelvin_To_Celsius(Kelvin) {
	return +(Kelvin - 273.15).toFixed(2);
}

function UpdateTemperature() {
	var Element_yC = document.getElementById("id-Celsius");
	var Element_yF = document.getElementById("id-Fahrenheit");
	var Element_yK = document.getElementById("id-Kelvin");

	var yC = Element_yC.value;
	var yF = Element_yF.value;
	var yK = Element_yK.value;
	var AbsoluteZero = false;

	if (Element_yC === document.activeElement) {
		if (yC >= -273.15) {
			yK = convert__Celsius_To_Kelvin(yC);
			yF = convert__Celsius_To_Fahrenheit(yC);
		} else {
			yK = null;
			yF = null;
			AbsoluteZero = true;
		}
	}
	if (Element_yF === document.activeElement) {
		if (yF >= -459.67) {
			yC = convert__Fahrenheit_To_Celsius(yF);
			yK = convert__Celsius_To_Kelvin(yC);
		} else {
			yC = null;
			yK = null;
			AbsoluteZero = true;
		}
	}
	if (Element_yK === document.activeElement) {
		if (yK >= 0) {
			yC = convert__Kelvin_To_Celsius(yK);
			yF = convert__Celsius_To_Fahrenheit(yC);
		} else {
			yC = null;
			yF = null;
			AbsoluteZero = true;
		}
	}

	if (yC == "" || yF == "" || yK == "") {
		Element_yC.value = null;
		Element_yF.value = null;
		Element_yK.value = null;
	} else if (isNaN(yC) || isNaN(yF) || isNaN(yK)) {
		Element_yC.style.color = "#AA0808";
		Element_yF.style.color = "#AA0808";
		Element_yK.style.color = "#AA0808";
	} else if (AbsoluteZero != true) {
		Element_yC.value = yC;
		Element_yF.value = yF;
		Element_yK.value = yK;

		Element_yC.style.color = "#000000";
		Element_yF.style.color = "#000000";
		Element_yK.style.color = "#000000";
	} else {
		if (yC != null) {
			Element_yC.style.color = "#FF5C77";
			Element_yF.value = "-";
			Element_yK.value = "-";
		} else if (yF != null) {
			Element_yF.style.color = "#FF5C77";
			Element_yC.value = "-";
			Element_yK.value = "-";
		} else if (yK != null) {
			Element_yK.style.color = "#FF5C77";
			Element_yC.value = "-";
			Element_yF.value = "-";
		}
	}
}

function FixNumeric(event) {
	const allowedKeys = [
		"Backspace",
		"Delete",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp",
		"ArrowDown",
		"Home",
		"End",
		"Control",
		"Alt",
		"Tab",
		"-",
		".",
		"Enter",
	];

	// Allow number keys, numpad numbers, and specific allowed keys
	if (
		(event.key >= "0" && event.key <= "9") || // keys 0-9
		allowedKeys.includes(event.key) || // Other allowed keys
		event.ctrlKey ||
		event.altKey // Ctrl or Alt for shortcuts
	) {
		return true;
	}

	// Prevent any other key
	event.preventDefault();
	return false;
}
