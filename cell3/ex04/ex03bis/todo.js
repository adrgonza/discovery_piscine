	let button = $("#button");
	let list = $("#ft_list");

	function guardarLista() {
		let lista_tareas = [];
		list.children().each(function() {
			lista_tareas.push($(this).text());
		});
		document.cookie = "lista_tareas=" + JSON.stringify(lista_tareas);
	}
	function cargarLista() {
		let cookie = document.cookie;
		let lista_tareas = [];
		if (cookie.indexOf("lista_tareas=") !== -1) {
			lista_tareas = JSON.parse(cookie.split("lista_tareas=")[1].split(";")[0]);
		}
		if (lista_tareas.length > 0) {
			$.each(lista_tareas, function(index, value) {
				let tarea = $("<li>").text(value);
				list.append(tarea);
			});
		}
	}
	$(window).on("load", cargarLista);
	$(window).on("unload", guardarLista);
	button.on("click", function() {
		let text = prompt("Nombre de la tarea");
		if (text == null || text == "") {
			return;
		}
		let new_elemment = $("<li>").text(text);
		list.append(new_elemment);
	});
	list.on("click", "li", function() {
		let confirmar = window.confirm("¿Seguro que quieres eliminar este elemento?");
		if (confirmar) {
			$(this).remove();
		}
	});
