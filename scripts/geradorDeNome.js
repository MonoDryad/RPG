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
        gerarBiografia()
    }else{
        return(gerarPersonagem())
    }
} else{
    console.log('tudo certo 2')
    randomizarStatusPrimeiro()
    geraraAleatorio()
    gerarBiografia()
}
}

function gerarBiografia(){
    vilasDisponiveis = ['Stonedale','Baregrave','Knighthall','Autumnpass','Midmeadow','Mossmoor','Lostguard','Mudhold','Madstrand','Quickrock','Sauroux','Soilès','Perpizieu','Gresart','Grevin','Gennenin','Maiciennes','Roalès','Perpilles','Angoumans','Gasca','Vitorín','Paría','Oviestile','Granarcia','Cantasca','Mativa','Canca','Tarrasca',"Choyonne",'Champinin']
    escolherVila = Math.floor(Math.random() * (vilasDisponiveis.length - 1) + 1)
    vilaEscolhida = vilasDisponiveis[escolherVila]

    // vidaBoaouRuim = Math.floor(Math.random() * 4)
    // if(vidaBoaouRuim > 2){
    //     vidaBoa = 'rica'
    // }else{
    //     vidaBoa = 'trabalhando pesado todos os dias e ganhando quase nada em troca'
    // }

    let comQuemCresceu = Math.floor(Math.random() * 10)
    let viveuCom 
    let oQueAconteceuParaFicarSem
    let ficouTraumatizado
    tragedia = Math.floor(Math.random() * 10)
    if(comQuemCresceu == 2 && tragedia < 4 ){
        oQueAconteceuParaFicarSem = 'a sua mãe morreu com o seu nascimento'
    } else if(comQuemCresceu == 2 && tragedia > 4){
        oQueAconteceuParaFicarSem = 'a sua mãe morreu por um grupo de bandido quando você era mais novo'
    } else if(comQuemCresceu == 2 && tragedia > 6){
        oQueAconteceuParaFicarSem = 'a sua mãe abandonou você e seu pai após o seu nascimento'
    } else if(comQuemCresceu == 3 && tragedia < 3){
        oQueAconteceuParaFicarSem = 'o seu pai abandonou você e sua mãe após o seu nascimento'
    }  else if(comQuemCresceu == 3 && tragedia > 3){
        oQueAconteceuParaFicarSem = 'o seu pai morreu enquanto servia ao rei'
    } else if(comQuemCresceu == 3 && tragedia > 5){
        oQueAconteceuParaFicarSem = 'o seu pai foi setenciado a morte por roubar joías'
    } else if(comQuemCresceu == 3 && tragedia > 7){
        oQueAconteceuParaFicarSem = 'o seu pai foi brutalmente assassinado na sua frente'
        ficouTraumatizado = true
    }

    switch(comQuemCresceu){
        case 1:
            viveuCom = 'com o seu pai e sua mãe'
            break
        case 2:
            viveuCom = 'com o seu pai'
            break
        case 3:
            viveuCom = 'com a sua mãe'
            break
        case 5:
            viveuCom = 'com os avós'
            break
        case 6:
            viveuCom = 'com a avó'
            break        
        case 7:
            viveuCom = 'com o avô'
            break
        case 8:
            viveuCom = 'com seu tio e tia'
            break
        case 9:
            viveuCom = 'com sua tia'
            break
        case 10:
            viveuCom = 'com seu tio'
            break
        default:
            viveuCom = 'orfão'
    }

    if(suaRaça == 'Humano'){
        $('#biografia').val(`${seuNome} nasceu na vila ${vilaEscolhida},`)
        if(viveuCom == 'orfão'){
        $('#biografia').val($('#biografia').val() + ` onde passou a infância e adolescência como um ${viveuCom}`)
        } else{
            $('#biografia').val($('#biografia').val() + ` onde viveu ${viveuCom}`)
        }
    }else{
        $('#biografia').val(`Você é da vila ${vilaEscolhida}`)
    }
}

