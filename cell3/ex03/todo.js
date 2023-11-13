let button = document.querySelector("#button");
let list = document.querySelector("#ft_list");

function guardarLista()
{
	let lista_tareas = [];
	for (let i = 1; i < list.children.length; i++)
		lista_tareas.push(list.children[i].textContent);
	document.cookie = "lista_tareas=" + JSON.stringify(lista_tareas);
}

function cargarLista()
{
	let cookie = document.cookie;
	let lista_tareas = [];
	if (cookie.indexOf("lista_tareas=") !== -1)
		lista_tareas = JSON.parse(cookie.split("lista_tareas=")[1].split(";")[0]);
	if (lista_tareas.length > 0)
	{
		for (let i = 0; i < lista_tareas.length; i++)
		{
			let tarea = document.createElement("li");
			tarea.textContent = lista_tareas[i];
			list.appendChild(tarea);
		}
	}
}

window.onload = cargarLista;
window.onunload = guardarLista;

button.onclick = function()
{
	let new_elemment = document.createElement("li");
	let text = document.createTextNode(prompt("Nombre de la tarea"));
	if (text == null || text == "")
		return;
	new_elemment.appendChild(text);
	list.appendChild(new_elemment);
}

list.onclick = function (event)
{
	let item = event.target;
	if (item.nodeName === "LI")
	{
		let confirmar = window.confirm("¿Seguro que quieres eliminar este elemento?");
		if (confirmar)
			item.remove();
	}
}


