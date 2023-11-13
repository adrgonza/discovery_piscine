let button = $("#click");

button.click(function()
{
	let randomColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
	$("body").css("background-color", randomColor);
});
