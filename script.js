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

            document.getElementById('status-personagem').style.display = 'none'
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

// Mudar a página de criação de personagem
function proximoCriar(){
    seuNome = document.getElementById('nome').value
    console.log(seuNome, suaRaça, suaClasse,)
}

