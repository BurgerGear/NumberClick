var clicks = 0;
var saveData = {
	clicks: clicks
}
function save(){
	saveData.clicks = clicks;
	localStorage.setItem("save",JSON.stringify(saveData));
}
function load(){
	var save = JSON.parse(localStorage.getItem("save"));
	if (typeof save.clicks !== "undefined") clicks = save.clicks;
	document.getElementById("counter").textContent = clicks;
}
function btnclick(number)
{
clicks = clicks + number
document.getElementById("counter").textContent = clicks;
}
