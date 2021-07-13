
// Variables
let popup;
let popupContent;

window.addEventListener("load", function(args) {
	// Variables
	let popupExit = document.getElementsByClassName("exit")[0];
	
	popup = document.getElementsByClassName("popup")[0];
	popupContent = document.getElementsByClassName("popup-content")[0];
	
	popupExit.addEventListener("click", function(args) {
		popup.style.display = "none";
	});
});

function showPopup(content) {
	popup.style.display = "block";
	popupContent.innerHTML = content.outerHTML;
	console.dir(content);
}