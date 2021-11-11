//////////////////////////////////////////////////////////////////////////////////////////////////
// Criação de personagem // Pegar os Status e salvar // Local Storage ou Apenas em uma Var?     //
// Status randômico // cada raça tem sua classe e alinhamento, assim como seus status gerado -  //
// - de forma aleatória                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Informação do Personagem                       // - Em progresso 
let seuNome, suaRaça, suaClasse, seuAlinhamento   // - Só será finalizado depois do formulário de personagem     
//////////////////////////////////////////////////// 

//////////////////////////////////////////////
// Filtro para escolher o Alinhamento       // - Em progresso
let filtro1Alinhamento, filtro2Alinhamento  // - Pensar na lógica para filtrar dependendendo da raça e classe
//////////////////////////////////////////////

///////////////////////////////////////////////////////////
// querySelector das opções select                       //
let raça = document.querySelector('#raça')               //
let classe = document.querySelector('#classe')           //
let alinhamento = document.querySelector('#alinhamento') //
///////////////////////////////////////////////////////////
// addEventListener para ativar a função de escolha      //
raça.addEventListener('change', setEscolha)              //
classe.addEventListener('change', setEscolha)            //
alinhamento.addEventListener('change', setEscolha)       //
///////////////////////////////////////////////////////////

function setEscolha(){
    let escolherRaça = raça.value
    let escolherClasse = classe.value
    let escolherAlinhamento = alinhamento.value

    switch(escolherRaça){
        case 'humano':
            // Colocando em uma variável fora da function, indicando a sua raça
            suaRaça = 'Humano'
            filtro1Alinhamento = 1

            // habilitando e desabilitando as opçoes de classes
            document.getElementById('guerreiro').disabled = false
            document.getElementById('bardo').disabled = false
            document.getElementById('druida').disabled = true
            document.getElementById('monge').disabled = false
            document.getElementById('sacerdote').disabled = false
            document.getElementById('mago').disabled = false
            document.getElementById('bruxo').disabled = false
            document.getElementById('atirador').disabled = false
            document.getElementById('ladino').disabled = false
            document.getElementById('paladino').disabled = false
            document.getElementById('xama').disabled = true
        break
        case 'elfo':
            // Colocando em uma variável fora da function, indicando a sua raça
            suaRaça = 'Elfo'
            filtro1Alinhamento = 2

            // habilitando e desabilitando as opçoes de classes
            document.getElementById('guerreiro').disabled = false
            document.getElementById('bardo').disabled = false
            document.getElementById('druida').disabled = false
            document.getElementById('monge').disabled = false
            document.getElementById('sacerdote').disabled = false
            document.getElementById('mago').disabled = false
            document.getElementById('bruxo').disabled = true
            document.getElementById('atirador').disabled = false
            document.getElementById('ladino').disabled = false
            document.getElementById('paladino').disabled = true
            document.getElementById('xama').disabled = true
        break
        case 'meioelfo':
            // Colocando em uma variável fora da function, indicando a sua raça
            suaRaça = 'Meio-Elfo'
            filtro1Alinhamento = 3


            // habilitando e desabilitando as opçoes de classes
            document.getElementById('guerreiro').disabled = false
            document.getElementById('bardo').disabled = false
            document.getElementById('druida').disabled = false
            document.getElementById('monge').disabled = false
            document.getElementById('sacerdote').disabled = false
            document.getElementById('mago').disabled = false
            document.getElementById('bruxo').disabled = true
            document.getElementById('atirador').disabled = false
            document.getElementById('ladino').disabled = false
            document.getElementById('paladino').disabled = false
            document.getElementById('xama').disabled = true
        break
        case 'meioorc':
            // Colocando em uma variável fora da function, indicando a sua raça
            suaRaça = 'Meio-Orc'
            filtro1Alinhamento = 4

            // habilitando e desabilitando as opçoes de classes
            document.getElementById('guerreiro').disabled = false
            document.getElementById('bardo').disabled = true
            document.getElementById('druida').disabled = true
            document.getElementById('monge').disabled = false
            document.getElementById('sacerdote').disabled = false
            document.getElementById('mago').disabled = true
            document.getElementById('bruxo').disabled = true
            document.getElementById('atirador').disabled = false
            document.getElementById('ladino').disabled = true
            document.getElementById('paladino').disabled = false
            document.getElementById('xama').disabled = true
        break
        case 'anao':
            // Colocando em uma variável fora da function, indicando a sua raça
            suaRaça = 'Anão'
            filtro1Alinhamento = 5

            // habilitando e desabilitando as opçoes de classes
            document.getElementById('guerreiro').disabled = false
            document.getElementById('bardo').disabled = true
            document.getElementById('druida').disabled = true
            document.getElementById('monge').disabled = true
            document.getElementById('sacerdote').disabled = false
            document.getElementById('mago').disabled = false
            document.getElementById('bruxo').disabled = false
            document.getElementById('atirador').disabled = false
            document.getElementById('ladino').disabled = false
            document.getElementById('paladino').disabled = false
            document.getElementById('xama').disabled = false
        break
        case 'gnomo':
            // Colocando em uma variável fora da function, indicando a sua raça
            suaRaça = 'Gnomo'
            filtro1Alinhamento = 6

            // habilitando e desabilitando as opçoes de classes
            document.getElementById('guerreiro').disabled = false
            document.getElementById('bardo').disabled = true
            document.getElementById('druida').disabled = true
            document.getElementById('monge').disabled = true
            document.getElementById('sacerdote').disabled = false
            document.getElementById('mago').disabled = false
            document.getElementById('bruxo').disabled = false
            document.getElementById('atirador').disabled = true
            document.getElementById('ladino').disabled = false
            document.getElementById('paladino').disabled = true
            document.getElementById('xama').disabled = true
        break
        case 'halfling':
            // Colocando em uma variável fora da function, indicando a sua raça
            suaRaça = 'Halfling'
            filtro1Alinhamento = 7

            // habilitando e desabilitando as opçoes de classes
            document.getElementById('guerreiro').disabled = false
            document.getElementById('bardo').disabled = true
            document.getElementById('druida').disabled = true
            document.getElementById('monge').disabled = true
            document.getElementById('sacerdote').disabled = false
            document.getElementById('mago').disabled = false
            document.getElementById('bruxo').disabled = false
            document.getElementById('atirador').disabled = false
            document.getElementById('ladino').disabled = false
            document.getElementById('paladino').disabled = false
            document.getElementById('xama').disabled = false
        break
        case 'tiefling':
            // Colocando em uma variável fora da function, indicando a sua raça
            suaRaça = 'Tiefling'
            filtro1Alinhamento = 8

            // habilitando e desabilitando as opçoes de classes
            document.getElementById('guerreiro').disabled = true
            document.getElementById('bardo').disabled = false
            document.getElementById('druida').disabled = true
            document.getElementById('monge').disabled = true
            document.getElementById('sacerdote').disabled = true
            document.getElementById('mago').disabled = false
            document.getElementById('bruxo').disabled = false
            document.getElementById('atirador').disabled = false
            document.getElementById('ladino').disabled = false
            document.getElementById('paladino').disabled = true
            document.getElementById('xama').disabled = true
        break
        default:
            // Colocando em uma variável fora da function, indicando a sua raça
            suaRaça = ''

            filtro1Alinhamento = 0

            // habilitando e desabilitando as opçoes de classes
            document.getElementById('guerreiro').disabled = true
            document.getElementById('bardo').disabled = true
            document.getElementById('druida').disabled = true
            document.getElementById('monge').disabled = true
            document.getElementById('sacerdote').disabled = true
            document.getElementById('mago').disabled = true
            document.getElementById('bruxo').disabled = true
            document.getElementById('atirador').disabled = true
            document.getElementById('ladino').disabled = true
            document.getElementById('paladino').disabled = true
            document.getElementById('xama').disabled = true

    }

    switch(escolherClasse){
        case 'guerreiro':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Guerreiro'

            filtro2Alinhamento = 1

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'bardo':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Bardo'

            filtro2Alinhamento = 2

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'druida':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Druída'

            filtro2Alinhamento = 3

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'monge':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Monge'

            filtro2Alinhamento = 4

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'paladino':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Paladino'

            filtro2Alinhamento = 5

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'atirador':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Atirador'

            filtro2Alinhamento = 6

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'sacerdote':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Sacerdote'

            filtro2Alinhamento = 7

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'bruxo':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Bruxo'

            filtro2Alinhamento = 8

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'mago':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Mago'

            filtro2Alinhamento = 9

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'ladino':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Ladino'

            filtro2Alinhamento = 10

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'xama':
            // Colocando em uma variável fora da function, indicando a sua classe
            suaClasse = 'Xamã'

            filtro2Alinhamento = 11

            document.getElementById('status-personagem').style.display = 'block'
            break
        default:
            suaClasse = ''

            filtro2Alinhamento = 0

            document.getElementById('status-personagem').style.display = 'none'
    }
}

function randomizarStatusPrimeiro(){
    // Agora Testando sem o LOOP
    // 
    // Vai ser gerado um valor randômico para cada status do personagem
    // FORÇA, DESTREZA, CONTITUIÇÃO, INTELIGÊNCIA, SABEDORA, CARISMA E PONTOS DE VIDA.
    // A raça e a classe vai modificar esse valor.
        if(suaRaça == 'Humano' && suaClasse == 'Guerreiro'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 8) + 8)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 10) + 10)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (18 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 2) + 2)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 2) + 2)
        } else if(suaRaça == 'Humano' && suaClasse == 'Bardo'){

            document.getElementById('força').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (11 - 3) + 3)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)
        } else if(suaRaça == 'Humano' && suaClasse == 'Monge'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 14) + 14)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (14 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (14 - 8) + 8)
        } else if(suaRaça == 'Humano' && suaClasse == 'Paladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (18 - 14) + 14)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)
        } else if(suaRaça == 'Humano' && suaClasse == 'Atirador'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        } else if(suaRaça == 'Humano' && suaClasse == 'Sacerdote'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)
        } else if(suaRaça == 'Humano' && suaClasse == 'Bruxo'){

            document.getElementById('força').value = Math.floor(Math.random() * (8 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 8) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 8) + 12)
        } else if(suaRaça == 'Humano' && suaClasse == 'Mago'){

            document.getElementById('força').value = Math.floor(Math.random() * (7 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 18) + 18)
        } else if(suaRaça == 'Humano' && suaClasse == 'Ladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 13) + 13)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (15 - 8) + 8)
            document.getElementById('carisma').value = Math.floor(Math.random() * (11 - 1) + 1)
        } else if(suaRaça == 'Humano' && suaClasse == 'Xamã'){
            document.getElementById('força').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('carisma').value = Math.floor(Math.random() * (15 - 5) + 5)
        } else{

        document.getElementById('força').value = "INVÁLIDO"
        document.getElementById('destreza').value = "INVÁLIDO"
        document.getElementById('contituicao').value = "INVÁLIDO"
        document.getElementById('inteligencia').value = "INVÁLIDO"
        document.getElementById('sabedoria').value = "INVÁLIDO"
        document.getElementById('carisma').value = "INVÁLIDO"
        }
        
    }
// Mudar a página de criação de personagem
function proximoCriar(){
    seuNome = document.getElementById('nome').value
    console.log(seuNome, suaRaça, suaClasse,)
}

