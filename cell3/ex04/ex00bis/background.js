let button = document.querySelector("#click");

button.onclick = function()
{
	let randomColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
	document.body.style.backgroundColor = randomColor;
}
