//
// Criação de personagem // Pegar os Status e salvar // Local Storage ou Apenas em uma Var?
// Status randômico // cada raça tem sua classe e alinhamento, assim como seus status gerado -
// - de forma aleatória


let seuNome, suaRaça, suaClasse, seuAlinhamento
let força, destreza, constituicao, inteligencia, sabedoria, carisma, pv
let velocidade, iniciativa                                                  

let escolhaDaHistoria, momentoHistoria

let raça = document.querySelector('#raça')
let classe = document.querySelector('#classe')
let alinhamento = document.querySelector('#alinhamento')


raça.addEventListener('change', setEscolha)
classe.addEventListener('change', setEscolha)
alinhamento.addEventListener('change', setAlinhamento)


function setEscolha(){
    let escolherRaça = raça.value
    let escolherClasse = classe.value

    switch(escolherRaça){
        case 'humano':
            suaRaça = 'Humano'

            $('#guerreiro').attr('disabled', false)
            $('#bardo').attr('disabled', false)
            $('#druida').attr('disabled', true)
            $('#monge').attr('disabled', false)
            $('#sacerdote').attr('disabled', false)
            $('#mago').attr('disabled', false)
            $('#bruxo').attr('disabled', false)
            $('#atirador').attr('disabled', false)
            $('#ladino').attr('disabled', false)
            $('#paladino').attr('disabled', false)
            $('#xama').attr('disabled', true)
        break
        case 'elfo':
            suaRaça = 'Elfo'

            $('#guerreiro').attr('disabled', false)
            $('#bardo').attr('disabled', false)
            $('#druida').attr('disabled', false)
            $('#monge').attr('disabled', false)
            $('#sacerdote').attr('disabled', false)
            $('#mago').attr('disabled', false)
            $('#bruxo').attr('disabled', true)
            $('#atirador').attr('disabled', false)
            $('#ladino').attr('disabled', false)
            $('#paladino').attr('disabled', true)
            $('#xama').attr('disabled', true)
        break
        case 'meioelfo':
            suaRaça = 'Meio-Elfo'

            $('#guerreiro').attr('disabled', false)
            $('#bardo').attr('disabled', false)
            $('#druida').attr('disabled', true)
            $('#monge').attr('disabled', false)
            $('#sacerdote').attr('disabled', false)
            $('#mago').attr('disabled', false)
            $('#bruxo').attr('disabled', true)
            $('#atirador').attr('disabled', false)
            $('#ladino').attr('disabled', false)
            $('#paladino').attr('disabled', false)
            $('#xama').attr('disabled', true)
        break
        case 'meioorc':
            suaRaça = 'Meio-Orc'

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
            suaRaça = 'Anão'

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
            suaRaça = 'Gnomo'

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
        default:
            suaRaça = ''

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
            suaClasse = 'Guerreiro'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'bardo':
            suaClasse = 'Bardo'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'druida':
            suaClasse = 'Druída'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'monge':
            suaClasse = 'Monge'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'paladino':
            suaClasse = 'Paladino'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'atirador':
            suaClasse = 'Atirador'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'sacerdote':
            suaClasse = 'Sacerdote'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'bruxo':
            suaClasse = 'Bruxo'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'mago':
            suaClasse = 'Mago'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'ladino':
            suaClasse = 'Ladino'

            document.getElementById('status-personagem').style.display = 'block'
            break
        case 'xama':
            suaClasse = 'Xamã'

            document.getElementById('status-personagem').style.display = 'block'
            break
        default:
            suaClasse = ''

            document.getElementById('status-personagem').style.display = 'none'
    }
}

function randomizarStatusPrimeiro(){
    document.getElementById('botao-randomizar').disabled = true

    let proximo = 0
    let calcularVida = 0

        if(suaRaça == 'Humano' && suaClasse == 'Guerreiro'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 8) + 8)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 10) + 10)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (18 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 2) + 2)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 2) + 2)

            proximo = 1
        } else if(suaRaça == 'Humano' && suaClasse == 'Bardo'){

            document.getElementById('força').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (11 - 3) + 3)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)
        
            proximo = 1
        } else if(suaRaça == 'Humano' && suaClasse == 'Monge'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 14) + 14)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (14 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (14 - 8) + 8)
        
            proximo = 1
        } else if(suaRaça == 'Humano' && suaClasse == 'Paladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (18 - 14) + 14)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)
        
            proximo = 1
        } else if(suaRaça == 'Humano' && suaClasse == 'Atirador'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Humano' && suaClasse == 'Sacerdote'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)
        
            proximo = 1
        } else if(suaRaça == 'Humano' && suaClasse == 'Bruxo'){

            document.getElementById('força').value = Math.floor(Math.random() * (8 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 8) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 8) + 12)
       
            proximo = 1
        } else if(suaRaça == 'Humano' && suaClasse == 'Mago'){

            document.getElementById('força').value = Math.floor(Math.random() * (7 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 18) + 18)
        
            proximo = 1
        } else if(suaRaça == 'Humano' && suaClasse == 'Ladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 13) + 13)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (15 - 8) + 8)
            document.getElementById('carisma').value = Math.floor(Math.random() * (11 - 1) + 1)
        
            proximo = 1
        } else if(suaRaça == 'Humano' && suaClasse == 'Xamã'){
            document.getElementById('força').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (15 - 5) + 5)
            document.getElementById('carisma').value = Math.floor(Math.random() * (15 - 5) + 5)
        
            proximo = 1
        }else if(suaRaça == 'Elfo' && suaClasse == 'Guerreiro'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 8) + 8)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 10) + 10)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (18 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 5) + 5)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Elfo' && suaClasse == 'Bardo'){

            document.getElementById('força').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (11 - 3) + 3)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)
        
            proximo = 1
        }else if(suaRaça == 'Elfo' && suaClasse == 'Druída'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 8) + 8)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 10) + 10)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (18 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 5) + 5)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Elfo' && suaClasse == 'Monge'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 14) + 14)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (14 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (14 - 8) + 8)
        
            proximo = 1
        } else if(suaRaça == 'Elfo' && suaClasse == 'Atirador'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Elfo' && suaClasse == 'Sacerdote'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)

            proximo = 1
        } else if(suaRaça == 'Elfo' && suaClasse == 'Mago'){

            document.getElementById('força').value = Math.floor(Math.random() * (7 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 18) + 18)
        
            proximo = 1
        } else if(suaRaça == 'Elfo' && suaClasse == 'Ladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 13) + 13)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (15 - 8) + 8)
            document.getElementById('carisma').value = Math.floor(Math.random() * (11 - 1) + 1)
        
            proximo = 1
        }else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Guerreiro'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 8) + 8)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 10) + 10)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (18 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 5) + 5)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Bardo'){

            document.getElementById('força').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (11 - 3) + 3)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)
        
            proximo = 1
        }else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Druída'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 8) + 8)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 10) + 10)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (18 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 5) + 5)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Monge'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 14) + 14)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (14 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (14 - 8) + 8)
        
            proximo = 1
        } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Paladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 14) + 14)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (14 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (14 - 8) + 8)
        
            proximo = 1
        } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Atirador'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Sacerdote'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)

            proximo = 1
        } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Mago'){

            document.getElementById('força').value = Math.floor(Math.random() * (7 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 18) + 18)
        
            proximo = 1
        } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Ladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 13) + 13)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (15 - 8) + 8)
            document.getElementById('carisma').value = Math.floor(Math.random() * (11 - 1) + 1)
        
            proximo = 1
        } else if(suaRaça == 'Anão' && suaClasse == 'Guerreiro'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 8) + 8)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 10) + 10)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (18 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 5) + 5)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Anão' && suaClasse == 'Monge'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 14) + 14)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (14 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (14 - 8) + 8)
        
            proximo = 1
        } else if(suaRaça == 'Anão' && suaClasse == 'Paladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 14) + 14)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (14 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (14 - 8) + 8)
        
            proximo = 1
        } else if(suaRaça == 'Anão' && suaClasse == 'Atirador'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (18 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 6) + 6)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Anão' && suaClasse == 'Sacerdote'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)

        
            proximo = 1
        } else if(suaRaça == 'Anão' && suaClasse == 'Bruxo'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)

        
            proximo = 1
        } else if(suaRaça == 'Anão' && suaClasse == 'Mago'){

            document.getElementById('força').value = Math.floor(Math.random() * (7 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 18) + 18)
        
            proximo = 1
        } else if(suaRaça == 'Anão' && suaClasse == 'Ladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 13) + 13)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (15 - 8) + 8)
            document.getElementById('carisma').value = Math.floor(Math.random() * (11 - 1) + 1)
        
            proximo = 1
        } else if(suaRaça == 'Anão' && suaClasse == 'Xamã'){

            document.getElementById('força').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 13) + 13)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (15 - 8) + 8)
            document.getElementById('carisma').value = Math.floor(Math.random() * (11 - 1) + 1)
        
            proximo = 1
        }  else if(suaRaça == 'Gnomo' && suaClasse == 'Guerreiro'){

            document.getElementById('força').value = Math.floor(Math.random() * (21 - 8) + 8)
            document.getElementById('destreza').value = Math.floor(Math.random() * (18 - 10) + 10)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (18 - 8) + 8)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 5) + 5)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 5) + 5)
        
            proximo = 1
        } else if(suaRaça == 'Gnomo' && suaClasse == 'Sacerdote'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)

            proximo = 1
        } else if(suaRaça == 'Gnomo' && suaClasse == 'Bruxo'){

            document.getElementById('força').value = Math.floor(Math.random() * (10 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (12 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 12) + 12)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 12) + 12)

            proximo = 1
        } else if(suaRaça == 'Gnomo' && suaClasse == 'Mago'){

            document.getElementById('força').value = Math.floor(Math.random() * (7 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (15 - 6) + 6)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (12 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (21 - 18) + 18)
            document.getElementById('carisma').value = Math.floor(Math.random() * (21 - 18) + 18)
        
            proximo = 1
        } else if(suaRaça == 'Gnomo' && suaClasse == 'Ladino'){

            document.getElementById('força').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('destreza').value = Math.floor(Math.random() * (21 - 16) + 16)
            document.getElementById('contituicao').value = Math.floor(Math.random() * (14 - 4) + 4)
            document.getElementById('inteligencia').value = Math.floor(Math.random() * (21 - 13) + 13)
            document.getElementById('sabedoria').value = Math.floor(Math.random() * (15 - 8) + 8)
            document.getElementById('carisma').value = Math.floor(Math.random() * (11 - 1) + 1)
        
            proximo = 1
        } else{

        document.getElementById('força').value = "0"
        document.getElementById('destreza').value = "0"
        document.getElementById('contituicao').value = "0"
        document.getElementById('inteligencia').value = "0"
        document.getElementById('sabedoria').value = "0"
        document.getElementById('carisma').value = "0"
        
        proximo = 0
    }
        
    switch(proximo){
        case 1:
            document.getElementById('raça').disabled = true
            document.getElementById('classe').disabled = true
            document.getElementById('botao-proximo-formulario').disabled = false
            calcularVida = 1
            break
        default:
            document.getElementById('raça').disabled = false
            document.getElementById('classe').disabled = false
            document.getElementById('botao-proximo-formulario').disabled = true
    }
    switch(calcularVida){
        case 1:
        document.getElementById('ponto-de-vida').value = Math.floor(Math.random() * (100 - document.getElementById('contituicao').value) + document.getElementById('contituicao').value)
    }
}

function proximoCriar(){
    seuNome = document.getElementById('nome').value
    força = document.getElementById('força').value
    destreza = document.getElementById('destreza').value
    constituicao = document.getElementById('contituicao').value
    inteligencia = document.getElementById('inteligencia').value
    sabedoria = document.getElementById('sabedoria').value
    carisma = document.getElementById('carisma').value
    pv = document.getElementById('ponto-de-vida').value
    console.log(seuNome, suaRaça, suaClasse, força, destreza, constituicao, inteligencia, sabedoria, carisma, pv)

    document.getElementById('segundo-formulario').style.display = 'block'
    document.getElementById('primeiro-formulario').style.display = 'none'
}

function randomizarStatusSegundo(){
    if(suaRaça == 'Anão' || suaRaça == 'Gnome'){
        document.getElementById('velocidade').value = 25
        velocidade = document.getElementById('velocidade').value
    }else{
        document.getElementById('velocidade').value = 30
        velocidade = document.getElementById('velocidade').value
    }

    let iniciativaCalculo = Math.floor(Math.random() * 20)
    iniciativa = iniciativaCalculo + parseFloat(destreza)
    document.getElementById('iniciativa').value = iniciativa
    document.getElementById('alinhamento').disabled = false
    document.getElementById('randomizar2').disabled = true
    console.log(seuNome, suaRaça, suaClasse, força, destreza, constituicao, inteligencia, sabedoria, carisma, pv, iniciativa, velocidade)
}

function setAlinhamento(){
    document.getElementById('começarHistoria').disabled = false

    let eAlinhamento = alinhamento.value
    switch(eAlinhamento){
        case 'lawfulgood':
            seuAlinhamento = "Lawful good"
            break
        case 'good':
            seuAlinhamento = "Good"
            break
        case 'chaoticgood':
            seuAlinhamento = "Chaotic good"
            break
        case 'chaoticgood':
            seuAlinhamento = "Chaotic good"
            break
        case 'lawfulneutral':
            seuAlinhamento = "Lawful neutral"
            break
        case 'neutral':
            seuAlinhamento = "Neutral"
            break
        case 'chaoticneutral':
            seuAlinhamento = "Chaotic neutral"
            break
        case 'lawfulevil':
            seuAlinhamento = "Lawful evil"
            break
        case 'evil':
            seuAlinhamento = "Evil"
            break
        case 'chaoticevil':
            seuAlinhamento = "Chaotic evil"
            break
    }
    console.log(seuAlinhamento)
}

function começar(){
    document.getElementById('segundo-formulario').style.display = "none"
    document.getElementById('titulo').style.display = "none"

    document.getElementById('texto-personagem-status').style.display = "block"
    document.getElementById('ultimaverificação').style.display = "block"
    document.getElementById('voltar').style.display = "block"

    document.getElementById('texto-personagem-status').innerHTML = "Personagem \n Nome: " + seuNome + "\n Raça: " + suaRaça + "\n Classe: " + suaClasse + "\n Força: " + força + "\n Destreza: " + ""
    + destreza + "\n Constituição: " + constituicao + "\n Inteligência: " + inteligencia + "\n Sabedoria: " + sabedoria + "\n Carisma: " + carisma + "\n Pontos de Vida: " + pv + ""
    + "\n Velocidade: " + velocidade + "\n Iniciativa: " + iniciativa + "\n Alinhamento: " + seuAlinhamento

}

function voltar(){
    força = '', destreza = '', constituicao = '', inteligencia = '', sabedoria = '', carisma = '', pv = '', iniciativa = '', velocidade = ''
    console.log(força, destreza, constituicao, inteligencia, sabedoria, carisma, pv, iniciativa, velocidade)

    document.getElementById('força').value = força
    document.getElementById('destreza').value = destreza 
    document.getElementById('contituicao').value = constituicao
    document.getElementById('inteligencia').value = inteligencia
    document.getElementById('sabedoria').value = sabedoria
    document.getElementById('carisma').value = carisma
    document.getElementById('ponto-de-vida').value = pv

    document.getElementById('primeiro-formulario').style.display = "block"
    document.getElementById('status-personagem').style.display = "none"

    document.getElementById('texto-personagem-status').style.display = "none"
    document.getElementById('ultimaverificação').style.display = "none"
    document.getElementById('voltar').style.display = "none"

    document.getElementById('raça').disabled = false
    document.getElementById('classe').disabled = false
    document.getElementById('botao-randomizar').disabled = false
    document.getElementById('botao-proximo-formulario').disabled = true
    
    document.getElementById('alinhamento').disabled = true
    document.getElementById('randomizar2').disabled = false
    document.getElementById('titulo').style.display = "block"
}

function ultimaverificação(){
    document.getElementById('primeiro-formulario').style.display = "none"
    document.getElementById('status-personagem').style.display = "none"

    document.getElementById('texto-personagem-status').style.display = "none"
    document.getElementById('ultimaverificação').style.display = "none"
    document.getElementById('voltar').style.display = "none"

    document.getElementById('raça').disabled = false
    document.getElementById('classe').disabled = false
    document.getElementById('botao-randomizar').disabled = true
    document.getElementById('botao-proximo-formulario').disabled = true
    
    document.getElementById('alinhamento').disabled = true
    document.getElementById('randomizar2').disabled = true
    document.getElementById('titulo').style.display = "none"

    document.getElementById('local').style.display = "block"
    document.getElementById('acontecimento').style.display = "block"
    document.getElementById('historia').style.display = "block"

    momentoHistoria = 1
}

function continuarHistoria(){
    switch(momentoHistoria){
        case 1:
            document.getElementById('local').textContent = "Cidade"
            document.getElementById('acontecimento').textContent = "Merda aconteceu, e você, " + seuNome + " é um idiota"
        momentoHistoria = 2
        break
        case 2:
            document.getElementById('local').textContent = "Vila"
            document.getElementById('acontecimento').textContent = "Você é um " + suaRaça + " e tenta parecer um idiota"
        momentoHistoria = 3
            break
        case 3:
            document.getElementById('local').textContent = "Vila"
            document.getElementById('acontecimento').textContent = "Você é um " + suaRaça + " e tenta parecer um idiota"
        escolhaDaHistoria = 1
        escolherRotaHistoria()
        break
        case 4:
    }
}
 function escolherRotaHistoria(){
     if(momentoHistoria == 3 && escolhaDaHistoria == 1){
        console.log("Pergunta 1")

        document.getElementById('confirmarEscolha').style.display = "block"

        document.getElementById('escolhaDaHistoria1').style.display = "initial"
        document.getElementById('escolhaDaHistoria2').style.display = "initial"
        document.getElementById('escolhaDaHistoria3').style.display = "initial"
        document.getElementById('escolhaDaHistoria4').style.display = "initial"
        document.getElementById('escolhaDaHistoria5').style.display = "initial"
        document.getElementById('escolhaDaHistoria6').style.display = "initial"

        document.getElementById('oQueFazerAgoraOpcao1').innerHTML = "Opção 1"
        document.getElementById('oQueFazerAgoraOpcao2').innerHTML = "Opção 2"
        document.getElementById('oQueFazerAgoraOpcao3').innerHTML = "Opção 3"
        document.getElementById('oQueFazerAgoraOpcao4').innerHTML = "Opção 4"
        document.getElementById('oQueFazerAgoraOpcao5').innerHTML = "Opção 5"
        document.getElementById('oQueFazerAgoraOpcao6').innerHTML = "Opção 6"
     }
 }


