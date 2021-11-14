//
// Criação de personagem // Pegar os Status e salvar // Local Storage ou Apenas em uma Var?
// Status randômico // cada raça tem sua classe e alinhamento, assim como seus status gerado -
// - de forma aleatória

$('#status-personagem').hide()
$('#classe').hide()
$('#eclasse').hide()
$('#descriçãoRaça').hide()
$('#descriçãoClasse').hide()


let seuNome, suaRaça, suaClasse, seuAlinhamento
let força, destreza, constituicao, inteligencia, sabedoria, carisma, pv
let velocidade, iniciativa          


let proximo, calcularVida

let escolhaDaHistoria, momentoHistoria

let raça = $("#raça").get(0)
let classe = $("#classe").get(0)
let alinhamento = $("#alinhamento").get(0)


raça.addEventListener('change', setRaça)
classe.addEventListener('change', setClasse)
alinhamento.addEventListener('change', setAlinhamento)


function setRaça(){
    let escolherRaça = raça.value

    switch(escolherRaça){
        case 'humano':
            suaRaça = 'Humano'
            $('#descriçãoRaça').show()
            $('#tituloRaça').text('Humano')
            $('#tituloRaça').css('right', '36.5%')
            $('#descriçãoRaça').text( '   Nos confins da maioria dos mundos, os humanos são a mais jovem das raças comuns, chegando mais tarde no cenário mundial e com uma vida curta, se comparados aos  anões, elfos e dragões.\n   Talvez seja por causa de suas vidas mais curtas que eles se esforcem para alcançar o máximo que podem nos anos que têm. Ou talvez eles sintam que têm algo a provar às raças mais antigas, e é por esta razão que eles constroem seus poderosos impérios através  da conquista e do comércio.\n   O que quer que os motive, os  humanos são os inovadores, os realizadores e os pioneiros dos mundos.')

            $('#guerreiro').show()
            $('#bardo').show()
            $('#druida').hide()
            $('#monge').show()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').hide()
            $('#atirador').show()
            $('#ladino').show()
            $('#paladino').show()
            $('#xama').hide()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'elfo':
            suaRaça = 'Elfo'

            $('#descriçãoRaça').show()
            $('#tituloRaça').text('Elfo')
            $('#tituloRaça').css('right', '42.2%')
            $('#descriçãoRaça').text( '   Elfos são um povo mágico de graça sobrenatural, vivendo no mundo sem pertencer inteiramente à ele.\n   Eles vivem em lugares de beleza etérea, no meio de antigas florestas ou em torres prateadas brilhando com luz feérica, onde uma música suave ecoa através do ar e fragrâncias suaves flutuam na brisa.\n   Elfos amam a natureza e a magia, a arte e o estudo, a música e a poesia, e as coisas boas do mundo')


            $('#guerreiro').show()
            $('#bardo').show()
            $('#druida').show()
            $('#monge').show()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').hide()
            $('#atirador').show()
            $('#ladino').show()
            $('#paladino').hide()
            $('#xama').hide()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'meioelfo':
            suaRaça = 'Meio-Elfo'

            $('#descriçãoRaça').show()
            $('#tituloRaça').text('Meio-Elfo')
            $('#tituloRaça').css('right', '42.2%')
            $('#descriçãoRaça').text( '   Vagando entre dois mundos mas, na verdade, não pertencendo a nenhum dos dois, meio-elfos combinam o que alguns dizem ser as melhores qualidades dos seus parentes elfos e humanos: a curiosidade, inventividade e ambição humanas temperadas pelos sensos refinados, amor a natureza e gostos artísticos dos elfos.\n   Alguns meio-elfos vivem entre os humanos, separados por suas diferenças emocionais e físicas, vendo seus amigos e amores envelhecer enquanto o tempo malmente os toca. Outros vivem entre os elfos, crescendo impacientes àmedida que atingem a maturidade nos reinos élficos intermináveis, enquanto seus amigos continuam a viver como crianças.\n   Muitos meio-elfos, incapazes de se encaixar em nenhuma dessas sociedades, escolhem uma vida solitária, vagando ou se juntando a outrosdesafortunados e adentrando uma vida de aventura')


            $('#guerreiro').show()
            $('#bardo').show()
            $('#druida').show()
            $('#monge').show()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').hide()
            $('#atirador').show()
            $('#ladino').show()
            $('#paladino').show()
            $('#xama').hide()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'meioorc':
            suaRaça = 'Meio-Orc'

            $('#guerreiro').show()
            $('#bardo').hide()
            $('#druida').hide()
            $('#monge').show()
            $('#sacerdote').show()
            $('#mago').hide()
            $('#bruxo').hide()
            $('#atirador').show()
            $('#ladino').hide()
            $('#paladino').show()
            $('#xama').hide()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'anao':
            suaRaça = 'Anão'

            $('#guerreiro').show()
            $('#bardo').hide()
            $('#druida').hide()
            $('#monge').hide()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').show()
            $('#atirador').show()
            $('#ladino').hide()
            $('#paladino').show()
            $('#xama').show()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'gnomo':
            suaRaça = 'Gnomo'

            $('#guerreiro').show()
            $('#bardo').hide()
            $('#druida').hide()
            $('#monge').hide()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').show()
            $('#atirador').show()
            $('#ladino').show()
            $('#paladino').hide()
            $('#xama').hide()

            $('#classe').show()
            $('#eclasse').show()
        break
        default:
            suaRaça = ''

            $('#guerreiro').attr('disabled', true)
            $('#bardo').attr('disabled', true)
            $('#druida').attr('disabled', true)
            $('#monge').attr('disabled', true)
            $('#sacerdote').attr('disabled', true)
            $('#mago').attr('disabled', true)
            $('#bruxo').attr('disabled', true)
            $('#atirador').attr('disabled', true)
            $('#ladino').attr('disabled', true)
            $('#paladino').attr('disabled', true)
            $('#xama').attr('disabled', true)

            $('#classe').hide()
            $('#eclasse').hide()
            $('#status-personagem').hide()
    }
}

function setClasse(){
    let escolherClasse = classe.value

    switch(escolherClasse){
        case 'guerreiro':
            suaClasse = 'Guerreiro'

            $('#status-personagem').show()
            break
        case 'bardo':
            suaClasse = 'Bardo'

            $('#status-personagem').show()
            break
        case 'druida':
            suaClasse = 'Druída'

            $('#status-personagem').show()
            break
        case 'monge':
            suaClasse = 'Monge'

            $('#status-personagem').show()
            break
        case 'paladino':
            suaClasse = 'Paladino'

            $('#status-personagem').show()
            break
        case 'atirador':
            suaClasse = 'Atirador'

            $('#status-personagem').show()
            break
        case 'sacerdote':
            suaClasse = 'Sacerdote'

            $('#status-personagem').show()
            break
        case 'bruxo':
            suaClasse = 'Bruxo'

            $('#status-personagem').show()
            break
        case 'mago':
            suaClasse = 'Mago'

            $('#status-personagem').show()
            break
        case 'ladino':
            suaClasse = 'Ladino'

            $('#status-personagem').show()
            break
        case 'xama':
            suaClasse = 'Xamã'

            $('#status-personagem').show()
            break
        default:
            suaClasse = ''

            $('#botao-proximo-formulario').hide()
            $('#status-personagem').hide()
    }
}

function randomizarStatusPrimeiro(){
    document.getElementById('botao-randomizar').disabled = true


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

    if($('#nome').val().length >= 3){
    document.getElementById('segundo-formulario').style.display = 'block'
    document.getElementById('primeiro-formulario').style.display = 'none'
    $('#erro-segundo-formulario').hide()
    } else{
        $('#erro-segundo-formulario').text ('O nome deve conter 3 ou mais caracteres.')
    }
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


