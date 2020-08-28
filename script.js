function hide_div(div, button, hide) {
	if (hide == true) {
		div.style.display = "flex";
		button.style.background = "#002b56"
	} 
	else {
		div.style.display = "none";
		button.style.background = "#0085bd"
  	}
}

function teens() {
	hide_div(document.getElementById("adults_div"), document.getElementById("adults_button"), false)
	hide_div(document.getElementById("teens_div"), document.getElementById("teens_button"), true)
}

function adults() {
	hide_div(document.getElementById("teens_div"), document.getElementById("teens_button"), false)
	hide_div(document.getElementById("adults_div"), document.getElementById("adults_button"), true)
}

function unity() {
	hide_div(document.getElementById("unity"), document.getElementById("unity_button"), true)
	hide_div(document.getElementById("persistence"), document.getElementById("persistence_button"), false)
	hide_div(document.getElementById("integrity"), document.getElementById("integrity_button"), false)
	hide_div(document.getElementById("excellence"), document.getElementById("excellence_button"), false)
}

function persistence() {
	hide_div(document.getElementById("unity"), document.getElementById("unity_button"), false)
	hide_div(document.getElementById("persistence"), document.getElementById("persistence_button"), true)
	hide_div(document.getElementById("integrity"), document.getElementById("integrity_button"), false)
	hide_div(document.getElementById("excellence"), document.getElementById("excellence_button"), false)
}

function integrity() {
	hide_div(document.getElementById("unity"), document.getElementById("unity_button"), false)
	hide_div(document.getElementById("persistence"), document.getElementById("persistence_button"), false)
	hide_div(document.getElementById("integrity"), document.getElementById("integrity_button"), true)
	hide_div(document.getElementById("excellence"), document.getElementById("excellence_button"), false)
}

function excellence() {
	hide_div(document.getElementById("unity"), document.getElementById("unity_button"), false)
	hide_div(document.getElementById("persistence"), document.getElementById("persistence_button"), false)
	hide_div(document.getElementById("integrity"), document.getElementById("integrity_button"), false)
	hide_div(document.getElementById("excellence"), document.getElementById("excellence_button"), true)
}