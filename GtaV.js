//time Michael = Michael, Dave, Lester
var cartaMichael = {
    nome: "Michael De Santa",
   imagem: "https://static.wikia.nocookie.net/degta/images/1/19/SANTA%2C_Michael_de%2C_Grand_Theft_Auto_V%2C_GTA_5.jpg/revision/latest?cb=20160630141339",
    atributos: {
        Furtividade: 97,
        Tiro: 82,
        Direção: 83,
        Especial: 93
    }
}

var cartaLester = {
    nome: "Lester Crest",
   imagem: "https://static.wikia.nocookie.net/gta/images/3/36/Lester_photo_nextgen.png/revision/latest/scale-to-width-down/350?cb=20150623030751&path-prefix=pt",
    atributos: {
        Furtividade:100,
        Tiro: 35,
        Direção: 0,
        Especial: 95
    }
}

var cartaDave = {
    nome: "Dave Norton",
   imagem: "https://static.wikia.nocookie.net/gta/images/f/f5/Dave_N.png/revision/latest/scale-to-width-down/144?cb=20140814052658&path-prefix=pt",
    atributos: {
        Furtividade:93,
        Tiro: 80,
        Direção: 76,
        Especial: 87
    }
}

//time Franklin = Franklin, Lamar, Chop
var cartaFranklin = {
    nome: "Franklin Clinton",
   imagem: "https://static.wikia.nocookie.net/degta/images/1/13/CLINTON%2C_Franklin%2C_Grand_Theft_Auto_V%2C_GTA_5.jpg/revision/latest?cb=20160703141225",
    atributos: {
        Furtividade: 65,
        Tiro: 87,
        Direção: 95,
        Especial: 90 
    }
}

var cartaChop = {
    nome: "Chop", 
  imagem:"https://static.wikia.nocookie.net/gta/images/d/d6/Chop-GTA5.png/revision/latest/scale-to-width-down/350?cb=20180424202956&path-prefix=pt",
    atributos: {
        Furtividade: 45,
        Tiro: 0,
        Direção: 0,
        Especial: 100
    }
}

var cartaLamar = {
    nome: "Lamar Davis", 
  imagem:"https://static.wikia.nocookie.net/gta/images/6/62/Lamar-Davis_GTAVe.png/revision/latest/scale-to-width-down/149?cb=20161003143548&path-prefix=pt",
    atributos: {
        Furtividade: 57,
        Tiro: 85,
        Direção: 93,
        Especial: 87
    }
}

//time Trevor = Trevor, Chef, Ron
var cartaTrevor = {
    nome: "Trevor Philips", 
  imagem:"https://i.ytimg.com/vi/apJOPrryZls/maxresdefault.jpg",
    atributos: {
        Furtividade: 55,
        Tiro: 99,
        Direção: 79,
        Especial: 97
    }
}

var cartaChef = {
    nome: "Chef", 
  imagem:"https://static.wikia.nocookie.net/gta/images/0/0f/Chef.jpg/revision/latest/scale-to-width-down/329?cb=20161229145243&path-prefix=pt",
    atributos: {
        Furtividade: 55,
        Tiro: 95,
        Direção: 53,
        Especial: 90
    }
}

var cartaRon = {
    nome: "Ron Jakowski",
   imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcDttH6NZSnPm9KkVO5BgdUAESbU9iGcs4Lte1rMTLYgCUOpb-jWqz7anW_H6PQuWApQ&usqp=CAU",
    atributos: {
        Furtividade: 65,
        Tiro: 52,
        Direção: 78,
        Especial: 82
    }
}
//Kiflom!
var cartaSuperTrunfo = {
    nome: "Kraff",
   imagem: "https://static.wikia.nocookie.net/gtawiki/images/e/e3/Kifflom%21_Achievement-GTA_V.png/revision/latest?cb=20150209113140",
    atributos: {
        Furtividade: 100,
        Tiro: 100,
        Direção: 100,
        Especial: 100,
    }
}
                                                ////////
var cartaMaquina
var cartaJogador
var cartas = [cartaMichael, cartaFranklin, cartaTrevor, cartaRon, cartaChef, cartaLamar, cartaChop, cartaLester, cartaDave, cartaSuperTrunfo]

var pontosJogador = 0 
var pontosMaquina = 0 

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){//<
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  divPlacar.innerHTML  = html
  } 

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()
  
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")  
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
  
  var nome = ` <p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""
  
for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class = "resultado-final">Venceu!</p>'
       pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class = "resultado-final">Perdeu!</p>'
      pontosMaquina++
    } 
  else {
       htmlResultado = '<p class = "resultado-final">Empatou!</p>'
    }
  
 if(cartas.length == 0){
    alert("Fim de Jogo")
    
    
    if(pontosJogador > pontosMaquina){
      htmlResultado = '<p class="resultado-final"> Venceu</p>'
    }
    else if(pontosMaquina > pontosJogador) {
      htmlResultado = '<p class="resultado-final"> Perdeu</p>'
    }
    else {
      htmlResultado = '<p class="resultado-final"> Empatou</p>'
    }
   
   }
  else{
    document.getElementById("btnProximaRodada").disabled = false
  }

    divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
  
  atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina(){
   var divCartaMaquina = document.getElementById("carta-maquina")  
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""
  
for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){ 
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id= "carta-maquina" class="carta"></div>`
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled = true
  document.getElementById("btnProximaRodada").disabled = true
  
  var divResultado = document.getElementById("resultado")
  divResultado.innerHTML = ""
}