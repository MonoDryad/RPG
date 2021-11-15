// Gerador de Nome aleatório

function geraraAleatorio(){
let nomesDisponiveis = ['Maneo','Poanpa','Onmain','Wiza','Pandwo','Oinan','Chor','Trarlon','Betmark','Uregin','Rymann','Bagorma','Ceodryt','Uilosdor','Bernya','Elichar','Standryt','Theam','Wingshim','Rodbelrion','Eär','Mithmoth','Raenmielnas','Eärmae','Grielthand','Loranlal','Anortor','Elenphant','Thosvashj',"Lë'galadh",'Shador']
let numAleatorio = Math.floor(Math.random() * nomesDisponiveis.length)
console.log(nomesDisponiveis[numAleatorio], numAleatorio)

$('#nome').val(nomesDisponiveis[numAleatorio])
}

// Gerador de Personagem

function gerarPersonagem(){


let escolherRaçaAleatorio = document.getElementById('raça')
let quantidadeRaça = escolherRaçaAleatorio.getElementsByTagName('option')
let escolhaDaRaça = Math.floor(Math.random() * (quantidadeRaça.length - 1) + 1)

escolherRaçaAleatorio.selectedIndex = escolhaDaRaça

setRaça()

let escolherClasseAleatorio = document.getElementById('classe')
let quantidadeClasse = escolherClasseAleatorio.getElementsByTagName('option')
let escolhaDaClasse = Math.floor(Math.random() * (quantidadeClasse.length - 1) + 1)

escolherClasseAleatorio.selectedIndex = escolhaDaClasse
setClasse()

if(suaRaça == 'Gnomo' && suaClasse == 'Monge' || suaRaça == 'Gnomo' && suaClasse == 'Paladino' || suaRaça == 'Gnomo' && suaClasse == 'Druída' || suaRaça == 'Gnomo' && suaClasse == 'Druída' || suaRaça == 'Gnomo' && suaClasse == 'Bardo' || suaRaça == 'Anão' && suaClasse == 'Ladino' || suaRaça == 'Anão' && suaClasse == 'Monge' || suaRaça == 'Anão' && suaClasse == 'Druída' || suaRaça == 'Anão' && suaClasse == 'Bardo' || suaRaça == 'Humano' && suaClasse == 'Druída' || suaRaça == 'Humano' && suaClasse == 'Bruxo' || suaRaça == 'Elfo' && suaClasse == 'Bruxo' || suaRaça == 'Elfo' && suaClasse == 'Paladino' || suaRaça == 'Meio-Elfo' && suaClasse == 'Bruxo' || suaRaça == 'Meio-Elfo' && suaClasse == 'Paladino'){
    return(gerarPersonagem())
} else if(suaRaça == 'Meio-Orc'){
    if(suaClasse == 'Guerreiro' || suaClasse == 'Monge' || suaClasse == "Paladino" || suaClasse == "Caçador" || suaClasse == "Sacerdote"){
        console.log('tudo certo')
        randomizarStatusPrimeiro()
        geraraAleatorio()
    }else{
        return(gerarPersonagem())
    }
} else{
    console.log('tudo certo 2')
    randomizarStatusPrimeiro()
    geraraAleatorio()
}

}

