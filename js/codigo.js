/*************inicio do codigo criado pelo desenvolvedor**************/

//pega altura da tela
var W = window.innerWidth;
var H = window.innerHeight;

/******************************************************
funcoes que dão inicio no carregamento da pagina
*******************************************************/
function inicia(){
	
	/*capa*/
	var capa = document.getElementById("capa-parallax");
	capa.style.width = W + "px";
	capa.style.height = H + "px";
	/*posicionamento scroll-down*/
	var down = document.getElementById("scroll-down");
	down.style.top = (H-120) + "px";
	down.style.left = ((W/2) + 40) + "px";
	
	/*marca*/
	var marca = document.getElementById("marca");
	marca.style.width = W + "px";
	marca.style.height = H + "px";
	
	var projeto = document.getElementById("projeto");
	var projetoLargura = projeto.clientWidth;
	var projetoAltura = projeto.clientHeight;
	projeto.style.left = ((W/2) - (projetoLargura/2)) + "px";
	projeto.style.top = ((H/2) - (projetoAltura/2)) + "px";
	
	if (W <= 570)
	{
		projeto.style.width = 520 + "px";
		projeto.style.left = ((W/2) - 250) + "px";
		projeto.style.top = ((H/2) - (projetoAltura/2)) + "px";
		if (W <= 320)
		{
		projeto.style.width = 300 + "px";
		projeto.style.left = ((W/2) - 145) + "px";
		projeto.style.top = ((H/2) - (projetoAltura/3) + 30) + "px";
		}
	}
	
	/*posicionamento menu*/
	var menu = document.getElementById("menu-capa");
	var menuTamanho = menu.clientWidth;
	menu.style.top = ((H/2)-120) + "px";
	menu.style.left = ((W/2)-190) + "px";
	
	/*projeto-tutorial*/
	var milesima = document.getElementById("milesima");
	var milesimaLargura = milesima.clientWidth;
	var milesimaAltura = milesima.clientHeight;
	milesima.style.left = ((W/2) - (milesimaLargura/2)) + "px";
	milesima.style.top = ((H/2) - (milesimaAltura/2)) + "px";
	
	if (W <= 570)
	{
		milesima.style.width = 520 + "px";
		milesima.style.left = ((W/2) - 250) + "px";
		milesima.style.top = ((H/2) - (milesimaAltura/2)) + "px";
		if (W <= 533)
		{
			milesima.style.width = 300 + "px";
			milesima.style.left = ((W/2) - 145) + "px";
			milesima.style.top = ((H/2) - (milesimaAltura/3) + 30) + "px";
			if (W <= 320)
			{
				milesima.style.width = 300 + "px";
				milesima.style.left = ((W/2) - 145) + "px";
				milesima.style.top = ((H/2) - (milesimaAltura/3) + 30) + "px";
			}
		}
	}
	
	/*tamanho contracapa*/
	var contracapa = document.getElementById("contracapa");
	var imgContraCapa = document.getElementsByClassName("cem");
	var alturaContracapa = contracapa.clientHeight;
	
	//imgContraCapa.item(0).style.height = alturaContracapa + "px";
	
	//deixa menu como display none
	var backMenu = document.getElementById("back-menu");
	backMenu.style.display = "none";
	
	//ajustes de botoes
	if (W <= 980)
	{
		var menu = document.getElementById("menu");
		var btnMenu = document.getElementsByClassName("barra-menu");
		var scrollDown = document.getElementById("scroll-down");
		
		//muda tamanho da area de contato do mouse com o btnMenu
		menu.style.width = 75 + "px";
		menu.style.height = 50 + "px";
		//muda tamanho do botao de scrollDown
		for (var i = 0; i < btnMenu.length; i++)
		{
			btnMenu[i].style.width = 75 + "px";
			btnMenu[i].style.height = 15 + "px";
		}
		
		//muda tamanho do botao de scrollDown
		scrollDown.style.width = 80 + "px";
		scrollDown.style.height = 80 + "px";
	}
}

/******************************************
funcoes que dão inicio no resize da pagina
******************************************/
function redimencao(){
	//pega altura da tela
	var W = window.innerWidth;
	var H = window.innerHeight;
	
	/*capa*/
	var capa = document.getElementById("capa-parallax");
	capa.style.width = W + "px";
	capa.style.height = H + "px";
	/*redimenciona e posiciona img front*/
	var alturaFront = document.getElementById("front").clientHeight;
	document.getElementById("front").style.top = (H - alturaFront) + "px";
	/*posicionamento scroll-down*/
	var down = document.getElementById("scroll-down");
	down.style.top = (H-120) + "px";
	down.style.left = ((W/2) + 40) + "px";
	
	/*marca*/
	var marca = document.getElementById("marca");
	marca.style.width = W + "px";
	marca.style.height = H + "px";
	
	var projeto = document.getElementById("projeto");
	var projetoLargura = projeto.clientWidth;
	var projetoAltura = projeto.clientHeight;
	projeto.style.left = ((W/2) - (projetoLargura/2)) + "px";
	projeto.style.top = ((H/2) - (projetoAltura/2)) + "px";
	
	if (W <= 570)
	{
		projeto.style.width = 520 + "px";
		projeto.style.left = ((W/2) - 250) + "px";
		projeto.style.top = ((H/2) - (projetoAltura/2)) + "px";
		if (W <= 320)
		{
		projeto.style.width = 300 + "px";
		projeto.style.left = ((W/2) - 145) + "px";
		projeto.style.top = ((H/2) - (projetoAltura/3) + 30) + "px";
		}
	}
	
	/*posicionamento menu*/
	var menu = document.getElementById("menu-capa");
	var menuTamanho = menu.clientWidth;
	menu.style.top = ((H/2)-120) + "px";
	menu.style.left = ((W/2)-190) + "px";
	
	/*projeto-tutorial*/
	var milesima = document.getElementById("milesima");
	var milesimaLargura = milesima.clientWidth;
	var milesimaAltura = milesima.clientHeight;
	milesima.style.left = ((W/2) - (milesimaLargura/2)) + "px";
	milesima.style.top = ((H/2) - (milesimaAltura/2)) + "px";
	
	if (W <= 570)
	{
		milesima.style.width = 520 + "px";
		milesima.style.left = ((W/2) - 250) + "px";
		milesima.style.top = ((H/2) - (milesimaAltura/2)) + "px";
		if (W <= 533)
		{
			milesima.style.width = 300 + "px";
			milesima.style.left = ((W/2) - 145) + "px";
			milesima.style.top = ((H/2) - (milesimaAltura/3) + 30) + "px";
			if (W <= 320)
			{
				milesima.style.width = 300 + "px";
				milesima.style.left = ((W/2) - 145) + "px";
				milesima.style.top = ((H/2) - (milesimaAltura/3) + 30) + "px";
			}
		}
	}
	
	//ajustes de botoes
	if (W <= 980)
	{
		var menu = document.getElementById("menu");
		var btnMenu = document.getElementsByClassName("barra-menu");
		var scrollDown = document.getElementById("scroll-down");
		
		//muda tamanho da area de contato do mouse com o btnMenu
		menu.style.width = 75 + "px";
		menu.style.height = 50 + "px";
		//muda tamanho do botao de scrollDown
		for (var i = 0; i < btnMenu.length; i++)
		{
			btnMenu[i].style.width = 75 + "px";
			btnMenu[i].style.height = 15 + "px";
		}
		
		//muda tamanho do botao de scrollDown
		scrollDown.style.width = 80 + "px";
		scrollDown.style.height = 80 + "px";
	}
}

/************************************
funcoes de interação com menu
************************************/
function apareceMenu(){
	//troca botao de menu e aparece menu
	var btnMenu = document.getElementById("bt-menu");
	var backMenu = document.getElementById("back-menu");
	if ( btnMenu.src.match("menu") ) 
	{
       	btnMenu.src = "img/btn/fexar.png";
		backMenu.style.display = "block";
			
		/*posicionamento menu*/
		var menu = document.getElementById("menu-capa");
		var menuTamanho = menu.clientWidth;
		menu.style.top = ((H/2)-120) + "px";
		menu.style.left = ((W/2)-190) + "px";
    	} 
		else 
		{
        	btnMenu.src = "img/btn/menu.png";
			backMenu.style.display = "none";
    	}
	}
	
/*função para decidir qual o conteudo aparecerá*/
function conteudo(elemento){
	if (elemento == "trabalho")
	{
		//some botoes do menu
		document.getElementById("menu-capa").style.display = "none";
		//chama conteudo da div trabalho
		var opcoes = document.getElementsByClassName("opcoes");
		opcoes.item(0).style.display = "block";
		
		var trabalho = document.getElementById("trabalho");
		trabalho.style.display = "block";
		integrantes.style.display = "none";
		projeto.style.display = "none";
	}
	else if (elemento == "integrantes")
	{
		//some botoes do menu
		document.getElementById("menu-capa").style.display = "none";
		//chama class opcoes
		var opcoes = document.getElementsByClassName("opcoes");
		opcoes.item(0).style.display = "block";
		
		//chama conteudo de integrantes
		var integrantes = document.getElementById("integrantes");
		integrantes.style.display = "block";
	}
	else if (elemento == "projeto")
	{
		//some botoes do menu
		document.getElementById("menu-capa").style.display = "none";
		//chama conteudo da div trabalho
		var opcoes = document.getElementsByClassName("opcoes");
		opcoes.item(0).style.display = "block";
		
		var projeto = document.getElementById("projeto-detalhes");
		projeto.style.display = "block";
	}
}

/****************************
animação das barras do menu / apare menu
****************************/
var controleMenu = false;
function animaMenu(){
	//limpa menu e aparece botoes
	document.getElementsByClassName("opcoes").item(0).style.display = "none";
	document.getElementById("trabalho").style.display = "none";
	document.getElementById("integrantes").style.display = "none";
	document.getElementById("projeto-detalhes").style.display = "none";
	document.getElementById("menu-capa").style.display = "block";
		
	//impede principal ''fullpage'' de dar scroll
	var fullpage = document.getElementById("fullpage");
	var fullpagePosition = fullpage.style.top;
	fullpage.style.position = "static";
	//body com overflow hidden
	var corpo = document.getElementsByTagName("body");
	corpo.item(0).style.overflow = "hidden";
			
	var barras = document.getElementsByClassName("barra-menu");
	
	if(controleMenu == false)
	{
		//gera animação do botao de menu
		for (var i = 0; i < barras.length; i++)
		{
			barras[i].style.WebkitAnimation = "animamenu 0.4s forwards";
			barras[i].style.animation = "animamenu 0.4s forwards";
			if (i == 2)
			{
				controleMenu = true;
			}
		}
		//aparece menu
		var backMenu = document.getElementById("back-menu");
		backMenu.style.display = "block";
		backMenu.style.WebkitAnimation = "aparecemenu 0.4s forwards";
		backMenu.style.animation = "aparecemenu 0.4s forwards";
		/*posicionamento menu*/
		var menu = document.getElementById("menu-capa");
		var menuTamanho = menu.clientWidth;
		menu.style.top = ((H/2)-120) + "px";
		menu.style.left = ((W/2)-190) + "px";
		//some navegador lateral
		document.getElementById("fp-nav").style.display = "none";
	}
	else
	{
		//gera animação do botao de menu
		for (var i = 0; i < barras.length; i++)
		{
			barras[i].style.WebkitAnimation = "animamenureverse 0.4s reverse forwards";
			barras[i].style.animation = "animamenureverse 0.4s reverse forwards";
			if (i == 2)
			{
				controleMenu = false;
			}
		}
		//aparece navegador lateral
		document.getElementById("fp-nav").style.display = "block";
		//some menu
		var backMenu = document.getElementById("back-menu");
		backMenu.style.WebkitAnimation = "somemenu reverse 0.4s forwards";
		backMenu.style.animation = "somecemenu reverse 0.4s forwards";
		if (backMenu.style.opacity == 0)
		{
			backMenu.style.display = "none";
		}
		
		//volta fullpage de onde estava
		fullpage.style.position = "relative";
		//body volta overflow auto
		corpo.item(0).style.overflow = "auto";

	}
}

/*******************
funçoes que voltam para menu
********************/
function voltaMenu(){
	var projetoInfo = document.getElementById("projeto-detalhes");
	var integrantesInfo = document.getElementById("integrantes");
	var trabalhoInfo = document.getElementById("trabalho");
	
	projetoInfo.style.display = "none";
	integrantesInfo.style.display = "none";
	trabalhoInfo.style.display = "none";
	
	document.getElementById("menu-capa").style.display = "block";
	}
	
/************************
função que só é usada na página
*************************/
function iniciaPag(){
	/**************
	funcao para delimitar altura das class de escolha
	**************/		
	var alturaCerta = document.getElementById("ultima").clientHeight;
	var caminhos = document.getElementsByClassName("cincoenta");
	
	for (var i = 0; i < caminhos.length; i++)	
	{
		caminhos[i].style.height = alturaCerta + "px";
		caminhos[i].style.top = ((alturaCerta + 10) * -1) + "px";
	}
	
	/*****redimenciona e diminui body*********/
	var corpo = document.getElementsByTagName("body");
	var corpoTamanho = corpo.item(0).clientHeight;
	var documentoTodo = document.getElementsByTagName("html");
	
	documentoTodo.item(0).style.height = (corpoTamanho) + "px";
	
	//top da coprght
	var direitos = document.getElementsByClassName("direitos");
	for (var i = 0; i < direitos.length; i++)	
	{
		direitos[i].style.top = ((alturaCerta - 120) * -1) + "px";
	}
	
	//tira espaço sobrando em baixo do copyright
	var html = document.getElementsByTagName("html").item(0);
	var cem = document.getElementsByClassName("cem").item(0);
	cemTamanho = document.getElementsByClassName("cem").item(0).clientHeight;
	
	cem.style.height = (cemTamanho - alturaCerta) + "px";
	html.style.height = (cemTamanho - alturaCerta) + "px";
}

/*************************
funçoes que vão funcionar ao redimencionar paginas
**************************/
function redimencaoPag(){
	/**************
		funcao para delimitar altura das class de escolha
		**************/		
		var alturaCerta = document.getElementById("ultima").clientHeight;
		var caminhos = document.getElementsByClassName("cincoenta");
	
		for (var i = 0; i < caminhos.length; i++)	
		{
			caminhos[i].style.height = alturaCerta + "px";
			caminhos[i].style.top = ((alturaCerta + 10) * -1) + "px";
		}
		
		/*****redimenciona e diminui body*********/
	var corpo = document.getElementsByTagName("body");
	var corpoTamanho = corpo.item(0).clientHeight;
	var documentoTodo = document.getElementsByTagName("html")
	
	documentoTodo.item(0).style.height = (corpoTamanho) + "px";
	
	//top da coprght
	var direitos = document.getElementsByClassName("direitos");
	for (var i = 0; i < direitos.length; i++)	
	{
		direitos[i].style.top = ((alturaCerta - 20) * -1) + "px";
	}
}

/******************
controles do audio
******************/
function playPause() {
	var backAudio = document.getElementById("back-audio");
	var imgPlayPause = document.getElementById('control-audio');
    if (imgPlayPause.src.match("play")) 
	{
		backAudio.pause();
        imgPlayPause.src = "img/btn/audio-inpause.png";
    } 
	else 
	{
		backAudio.play();
		backAudio.volume = 0.45;
        imgPlayPause.src = "img/btn/audio-inplay.png";
    }
}

/*********************
funcoes da locução
**********************/
function locucao(elemento){
	/*alert (elemento.src);*/
	/*var teste = document.getElementsByClassName("cem").item(4).src;
	alert (teste);*/
	var musica = document.getElementById(elemento);
	musica.play();
}

//alert(H);