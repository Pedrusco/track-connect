$(function(){
	function Adicionar(){
		$("#tableCadastro tbody").append(
			"<tr>"+
      "<td'><input type='text'/></td>"+ /*ID*/
			"<td ><input type='text'/></td>"+ /*Nome da musica*/
			"<td><input type='text'/></td>"+ /*Nome do artista*/
			"<td><input type='text'/></td>"+ /*Nome do album*/
      "<td><input type='text'/></td>"+ /*Link*/
      "<td><input type='text'/></td>"+ /*Plataforma*/
			"<td><input type='text'/></td>"+ /*Botoes*/
			"<td><img src='images/disk.png' class='btnSalvar'><img src='images/delete.png' class='btnExcluir'/></td>"+
			"</tr>");

		$(".btnSalvar").bind("click", Salvar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Salvar(){
		var par = $(this).parent().parent(); //tr
    var tdId = par.children("td:nth-child(1)");
		var tdNomeMusica = par.children("td:nth-child(2)");
		var tdNomeArtista = par.children("td:nth-child(3)");
		var tdNomeAlbum = par.children("td:nth-child(4)");
    var tdLink = par.children("td:nth-child(5)");
    var tdPlataforma = par.children("td:nth-child(6)");
		var tdBotoes = par.children("td:nth-child(7)");

    tdId.html(tdId.children("input[type=text]").val());
    tdNomeMusica.html(tdNomeMusica.children("input[type=text]").val());
		tdNomeArtista.html(tdNomeArtista.children("input[type=text]").val());
		tdNomeAlbum.html(tdNomeAlbum.children("input[type=text]").val());
    tdLink.html(tdLink.children("input[type=text]").val());
    tdPlataforma.html(tdPlataforma.children("input[type=text]").val());
		tdBotoes.html("<img src='images/delete.png'class='btnExcluir'/><img src='images/pencil.png' class='btnEditar'/>");

		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Editar(){
		var par = $(this).parent().parent(); //tr
    var tdId = par.children("td:nth-child(1)");
		var tdNomeMusica = par.children("td:nth-child(2)");
		var tdNomeArtista = par.children("td:nth-child(3)");
		var tdNomeAlbum = par.children("td:nth-child(4)");
    var tdLink = par.children("td:nth-child(5)");
    var tdPlataforma = par.children("td:nth-child(6)");
		var tdBotoes = par.children("td:nth-child(7)");

    tdId.html("<input type='text' id='txtId' value='"+tdId.html()+"'/>");
		tdNomeMusica.html("<input type='text' id='txtNomeMusica' value='"+tdNomeMusica.html()+"'/>");
		tdNomeArtista.html("<input type='text'id='txtNomeArtista' value='"+tdNomeArtista.html()+"'/>");
		tdNomeAlbum.html("<input type='text' id='txtNomeAlbum' value='"+tdNomeAlbum.html()+"'/>");
    tdLink.html("<input type='text' id='txtLink' value='"+tdLink.html()+"'/>");
    tdPlataforma.html("<input type='text' id='txtPlataforma' value='"+tdPlataforma.html()+"'/>");
		tdBotoes.html("<img src='images/disk.png' class='btnSalvar'/>");

		$(".btnSalvar").bind("click", Salvar);
		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Excluir(){
	    var par = $(this).parent().parent(); //tr
	    par.remove();
	};

	$(".btnEditar").bind("click", Editar);
	$(".btnExcluir").bind("click", Excluir);
	$("#btnAddMusic").bind("click", Adicionar);
});
