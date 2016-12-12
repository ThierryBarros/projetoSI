var lista = [] 
var tarefaFeita=0;

function MudarCor() {
	var cor = document.getElementById('cor').value;
	document.body.style.background = cor;
}

function AdicionarTarefa(){
	var tarefa = document.getElementById('tarefa').value;
	lista.push(tarefa);
	AtualizarDados();
	AdicionaElementoLista();
	progresso();
}

function RemoverElemento(elemento){
	for (i = 0; i < lista.length; i++) {
		if(lista[i]=="elemento"){
			lista.splice(i,1);
		}
	}
}

function progresso(){
	if(lista.length!=0){
	document.getElementById("pg").value = tarefaFeita/lista.length*100;
	}else{
		document.getElementById("pg").value = 100;
	}
}


function LimparLista(){
	lista = [];
	tarefaFeita=0;
	document.getElementById("lista").innerHTML = "";
	AtualizarDados();
	progresso();
}

function AtualizarDados(){
	document.getElementById("tarefas").innerHTML = "Total de tarefas a completar: "+(lista.length-tarefaFeita);
	document.getElementById("completos").innerHTML = "Completos: "+tarefaFeita;
}

function AdicionaElementoLista(){
	text = "";

	var valor = lista[lista.length-1];
	
	text +="<input type='checkbox'  id="+valor+"  name='tarefas' onClick='tarefaRealizada(name)'  value="+valor+"> "+lista[lista.length-1] +" "+"<input type='button' class='botao' value='X' onClick='excluirTarefa()'>"+ "</br>" ;
	
	document.getElementById("lista").innerHTML += text;
	
	
}

function tarefaRealizada(name){
	marcardesmarcar(name);
	AtualizarDados();
	progresso();
}

function excluirTarefa(valor){
	var text="";
	var elementos = document.getElementsByName(tarefas);
	for(var i=0;i<elementos.length;i++){
		if(elementos[i].value!=valor){
			text +="<input type='checkbox' name='tarefas' onClick='tarefaRealizada(name)'  value="+elementos[i]+"> "+elementos[i] +" "+"<input type='button' class='botao' value='X' onClick='excluirTarefa()'>"+ "</br>" ;
		}
	}
	lista.pop();
	AtualizarDados();
	document.getElementById("lista").innerHTML = text;
}

function marcardesmarcar(name) {
	tarefaFeita=0;
	checkboxes = document.getElementsByName('tarefas');
		for(i=0;i<checkboxes.length;i++){
			if(checkboxes[i].checked){
				tarefaFeita++;
			}
		}
}