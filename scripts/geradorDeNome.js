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
        randomizarStatusPrimeiro()
        geraraAleatorio()
        gerarBiografia()
    }else{
        return(gerarPersonagem())
    }
} else{
    randomizarStatusPrimeiro()
    geraraAleatorio()
    gerarBiografia()
}
}

function gerarBiografia()
{

        vilasDisponiveis = ['Stonedale','Baregrave','Knighthall','Autumnpass','Midmeadow','Mossmoor','Lostguard','Mudhold','Madstrand','Quickrock','Sauroux','Soilès','Perpizieu','Gresart','Grevin','Gennenin','Maiciennes','Roalès','Perpilles','Angoumans','Gasca','Vitorín','Paría','Oviestile','Granarcia','Cantasca','Mativa','Canca','Tarrasca',"Choyonne",'Champinin']
        escolherVila = Math.floor(Math.random() * vilasDisponiveis.length)
        vilaEscolhida = vilasDisponiveis[escolherVila]

    // infancia e adolecencia
    let familiaDoPersonagem = 
    {
        parentes: ['o pai','a mãe','a mãe e o pai'],
        brincavaCom: ['sozinho','com a irmã','com o irmão','amigos']
    }
    let nomesParentes = 
    {
        mae: ['Gillia','Thyxia','Fayeth','Irhaal','Snasdrida','Urchin','Lilla','Alexa'],
        pai: ['Edyrm','Eldrin','Raeran','Fylson','Maddarlun','Gogren','Wesgroli','Drurshen'],
        irma: ['Lilli','Topaz','Asari','Alice','Akayle','Syndra','Keya','Fayeth'],
        irmao: ['Aimon','Ranber','Luthais','Thossouc','Bugrel','Firmotir','Hulas','Mobet'],
        melhorAmigo: ['Hestrarlun','Rulf','Tommie','Remi','Aalart','Rainerus','Otelin','Gefroy']
    }
    let personalidade =
    {
        oLugarOndeBrincava: ['no bosque','no quintal', 'no meio da vila', 'dentro de casa','não tinha'],
        refeicaoFavorita: ['Peixe grelhado','Feijão grosso','Caramujo Estrela','Pimentão da lama','Salada do Outono','Waimon frito','Waimon cozido','Ondou assado','Ondou cozido','não tinha'],
        animalFavorito: ['gato','cachorro','gineo','bilbo','não tinha'],
        maiorMedoInfancia: ['altura','bandido','fogo','aranha','monstros','escuro','não tinha'],
        brincadeiraFavorita: ['esconde-esconde','familia-real','pega-pega','não tinha'],
        quandoCrescer: ['um cavaleiro nobre','um cientista renomado','um imperador','um heroi',',']
    }
    let condicao =
    {
        financeiro: ['muito pobre','pobre','moderada'],
    }
    let relacionamentos =
    {   
        seRelacionou: false,
        quantasVezes: Math.floor(Math.random() * 6 - 1),
    }
    let tragedia =
    {
        aTragediaVaiAcontecer: Math.floor(Math.random() * 40),
        aconteceuAlgumaTragedia: false,
        oQueAconteceu: ['a vila foi assaultada','o pai foi assassinado','a peste atingiu sua vila']
    }
    let aprendizado = 
    {
        foiAoColegio: false,
        estudouOQue: ['medicina','a arte da guerra','politica'],
        concluiu: true,
    }

    let aleatorizacao = 
    {
        escolherParentes: Math.floor(Math.random() * 2),
        parentesEscolhidos: familiaDoPersonagem.parentes[escolherParentes]
    }

    console.log(aleatorizacao.parentesEscolhidos)
    // Texto que vai aparecer na tela
    // $('#Biografia-text').text(`${seuNome} nasceu na vila ${aleatorizacaoDaVila.vilaEscolhida}, ${aleatorizacao.parentesEscolhidos}`)

}


