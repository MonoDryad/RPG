//
// Criação de personagem // Pegar os Status e salvar // Local Storage ou Apenas em uma Var?
// Status randômico // cada raça tem sua classe e alinhamento, assim como seus status gerado -
// - de forma aleatória

$('#biografia').hide()
$('#status-personagem').hide()
$('#classe').hide()
$('#eclasse').hide()
$('#descriçãoRaça').hide()
$('#descriçãoClasse').hide()


let seuNome, suaRaça, suaClasse, seuAlinhamento
let força, destreza, constituicao, inteligencia, sabedoria, carisma, pv
let velocidade, iniciativa          

let classeSelecionada2 = document.getElementById('classe')

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

            classeSelecionada2.selectedIndex = 0
            setClasse()

            $('#descriçãoRaça').show()
            $('#tituloRaça').text('Humano')
            $('#descriçãoRaça').text( '   Nos confins da maioria dos mundos, os humanos são a mais jovem das raças comuns, chegando mais tarde no cenário mundial e com uma vida curta, se comparados aos  anões, elfos e dragões.\n   Talvez seja por causa de suas vidas mais curtas que eles se esforcem para alcançar o máximo que podem nos anos que têm. Ou talvez eles sintam que têm algo a provar às raças mais antigas, e é por esta razão que eles constroem seus poderosos impérios através  da conquista e do comércio.\n   O que quer que os motive, os  humanos são os inovadores, os realizadores e os pioneiros dos mundos.')

            $('#guerreiro').show()
            $('#bardo').show()
            $('#druida').hide()
            $('#monge').show()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').hide()
            $('#caçador').show()
            $('#ladino').show()
            $('#paladino').show()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'elfo':
            suaRaça = 'Elfo'

            classeSelecionada2.selectedIndex = 0
            setClasse()

            $('#descriçãoRaça').show()
            $('#tituloRaça').text('Elfo')
            $('#descriçãoRaça').text( '   Elfos são um povo mágico de graça sobrenatural, vivendo no mundo sem pertencer inteiramente à ele.\n   Eles vivem em lugares de beleza etérea, no meio de antigas florestas ou em torres prateadas brilhando com luz feérica, onde uma música suave ecoa através do ar e fragrâncias suaves flutuam na brisa.\n   Elfos amam a natureza e a magia, a arte e o estudo, a música e a poesia, e as coisas boas do mundo')


            $('#guerreiro').show()
            $('#bardo').show()
            $('#druida').show()
            $('#monge').show()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').hide()
            $('#caçador').show()
            $('#ladino').show()
            $('#paladino').hide()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'meioelfo':
            suaRaça = 'Meio-Elfo'

            classeSelecionada2.selectedIndex = 0
            setClasse()

            $('#descriçãoRaça').show()
            $('#tituloRaça').text('Meio-Elfo')
            $('#descriçãoRaça').text( '   Vagando entre dois mundos mas, na verdade, não pertencendo a nenhum dos dois, meio-elfos combinam o que alguns dizem ser as melhores qualidades dos seus parentes elfos e humanos: a curiosidade, inventividade e ambição humanas temperadas pelos sensos refinados, amor a natureza e gostos artísticos dos elfos.\n   Alguns meio-elfos vivem entre os humanos, separados por suas diferenças emocionais e físicas, vendo seus amigos e amores envelhecer enquanto o tempo malmente os toca. Outros vivem entre os elfos, crescendo impacientes àmedida que atingem a maturidade nos reinos élficos intermináveis, enquanto seus amigos continuam a viver como crianças.\n   Muitos meio-elfos, incapazes de se encaixar em nenhuma dessas sociedades, escolhem uma vida solitária, vagando ou se juntando a outrosdesafortunados e adentrando uma vida de aventura')


            $('#guerreiro').show()
            $('#bardo').show()
            $('#druida').show()
            $('#monge').show()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').hide()
            $('#caçador').show()
            $('#ladino').show()
            $('#paladino').show()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'meioorc':
            suaRaça = 'Meio-Orc'

            classeSelecionada2.selectedIndex = 0
            setClasse()

            $('#descriçãoRaça').show()
            $('#tituloRaça').text('Meio-Orc')
            $('#descriçãoRaça').text( '   Quer estejam unidos sob a liderança de um poderoso bruxo ou estejam lutando por um impasse após anos de conflito, tribos orcs e humanas as vezes formam alianças, unindo forças em uma vasta horda para o pavor das terras civilizadas próximas. Quando essas alianças são seladas através do casamento, os meio-orcs nascem.\n   Alguns meio-orcs crescem e se tornam orgulhosos comandantes de tribos orcs, seu sangue humano concedem a eles um diferencial perante seus rivais orcs de sangue puro. Alguns arriscam sair pelo mundo para provar seu valor entre os humanos e outras raças mais civilizadas.\n   Muitos desses se tornam aventureiros, adquirindo renome pelos seus poderosos feitos e notoriedade por seus costumes bárbaros e fúria selvagem')


            $('#guerreiro').show()
            $('#bardo').hide()
            $('#druida').hide()
            $('#monge').show()
            $('#sacerdote').show()
            $('#mago').hide()
            $('#bruxo').hide()
            $('#caçador').show()
            $('#ladino').hide()
            $('#paladino').show()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'anao':
            suaRaça = 'Anão'

            classeSelecionada2.selectedIndex = 0
            setClasse()

            $('#descriçãoRaça').show()
            $('#tituloRaça').text('Anão')
            $('#descriçãoRaça').text( '   Reinos ricos de antiga grandeza, salões esculpidos nasraízes das montanhas, o eco de picaretas e martelos nas minas profundas e nas forjas ardentes, um compromisso com o clã e a tradição, e um ódio impetuoso contra goblins e orcs – essas linhas comuns unem todos os anões.')


            $('#guerreiro').show()
            $('#bardo').hide()
            $('#druida').hide()
            $('#monge').hide()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').show()
            $('#caçador').show()
            $('#ladino').hide()
            $('#paladino').show()

            $('#classe').show()
            $('#eclasse').show()
        break
        case 'gnomo':
            suaRaça = 'Gnomo'

            classeSelecionada2.selectedIndex = 0
            setClasse()
            
            $('#descriçãoRaça').show()
            $('#tituloRaça').text('Gnomo')
            $('#descriçãoRaça').text( '   Um zumbido constante de atividades permeia a vizinhança onde os gnomos formam suas comunidades privadas. Barulhos estrondosos pontuam o zumbido: um tilintar de engrenagens moendo aqui, uma pequena explosão ali, um grito de surpresa ou comemoração e, principalmente, muitas gargalhadas.\n   Gnomos regozijam a vida, apreciando cada momento de invento, exploração, investigação, criação e brincadeira.')


            $('#guerreiro').show()
            $('#bardo').hide()
            $('#druida').hide()
            $('#monge').hide()
            $('#sacerdote').show()
            $('#mago').show()
            $('#bruxo').show()
            $('#caçador').show()
            $('#ladino').show()
            $('#paladino').hide()

            $('#classe').show()
            $('#eclasse').show()
        break
        default:
            suaRaça = ''

            classeSelecionada2.selectedIndex = 0
            setClasse()

            $('#descriçãoRaça').hide()
            $('#tituloRaça').text('Raça')
            $('#descriçãoRaça').text('')

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

            $('#imagens').show()
            $('#warrioricon').show()
            $('#bardoicon').hide()
            $('#druidaicon').hide()
            $('#monkicon').hide()
            $('#paladicon').hide()
            $('#huntericon').hide()
            $('#rogueicon').hide()
            $('#warlockicon').hide()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)

            $('#botao-proximo-formulario').show()

            $('#status-personagem').show()
            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Guerreiro')
            $('#descriçãoClasse').text( '   Um mestre do combate, perito em uma vasta gama de armas e armaduras.\n Seu principal Status é a Constiuição.\n Por possuir uma constituição robusta ganha bônus em Constituição + 1')

            break
        case 'bardo':
            suaClasse = 'Bardo'

            $('#imagens').show()
            $('#warrioricon').hide()
            $('#bardoicon').show()
            $('#druidaicon').hide()
            $('#monkicon').hide()
            $('#paladicon').hide()
            $('#huntericon').hide()
            $('#rogueicon').hide()
            $('#warlockicon').hide()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)

            $('#botao-proximo-formulario').show()

            $('#status-personagem').show()
            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Bardo')
            $('#descriçãoClasse').text( '   Um místico inspirador que possui poderes que ecoam a música da criação.\n Seu principal Status é o Carisma.\n Por possuir uma eloquência admirável ganha bônus em Carisma +1')

            break
        case 'druida':
            suaClasse = 'Druída'

            $('#imagens').show()
            $('#warrioricon').hide()
            $('#bardoicon').hide()
            $('#druidaicon').show()
            $('#monkicon').hide()
            $('#paladicon').hide()
            $('#huntericon').hide()
            $('#rogueicon').hide()
            $('#warlockicon').hide()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)

            $('#botao-proximo-formulario').show()

            $('#status-personagem').show()
            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Druída')
            $('#descriçãoClasse').text( '   Um sacerdote da Crença Antiga, detentor dos poderes da natureza – luz da lua e crescimento das plantas, fogo e relâmpagos – e capaz de adotar formas animais.\n Seu principal Status é a Sabedoria.\n Por ser um zelador dos planos naturais possui bônus em Sabedoria +1 ')

            break
        case 'monge':
            suaClasse = 'Monge'

            $('#imagens').show()
            $('#warrioricon').hide()
            $('#bardoicon').hide()
            $('#druidaicon').hide()
            $('#monkicon').show()
            $('#paladicon').hide()
            $('#huntericon').hide()
            $('#rogueicon').hide()
            $('#warlockicon').hide()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)

            $('#botao-proximo-formulario').show()

            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Monge')

            $('#descriçãoClasse').text( '   Um mestre das artes marciais, utilizando o poder corporal para atingir a perfeição física e espiritual.\n Seu principal Status é a Sabedoria.\n Por possuir um espírito inabalável ganha bônus em Sabedoria +1')


            $('#status-personagem').show()
            break
        case 'paladino':
            suaClasse = 'Paladino'

            $('#imagens').show()
            $('#warrioricon').hide()
            $('#bardoicon').hide()
            $('#druidaicon').hide()
            $('#monkicon').hide()
            $('#paladicon').show()
            $('#huntericon').hide()
            $('#rogueicon').hide()
            $('#warlockicon').hide()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)

            $('#botao-proximo-formulario').show()

            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Paladino')
            $('#descriçãoClasse').text( '   Um guerreiro divino vinculado a um juramento sagrado.\n Seu principal Status é a Força. \n Por possuir uma convicção divina ganha bônus em Carisma +1')

            $('#status-personagem').show()
            break
        case 'caçador':
            suaClasse = 'Caçador'

            $('#imagens').show()
            $('#warrioricon').hide()
            $('#bardoicon').hide()
            $('#druidaicon').hide()
            $('#monkicon').hide()
            $('#paladicon').hide()
            $('#huntericon').show()
            $('#rogueicon').hide()
            $('#warlockicon').hide()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)

            $('#botao-proximo-formulario').show()

            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Caçador')
            $('#descriçãoClasse').text( '   Um guerreiro que utiliza de poderio marcial e magia natural para combater ameaças nos limites da civilização..\n Seu principal Status é a Destreza.\n Por possuir afinidade com a natureza ganha bônus em Destreza +1')


            $('#status-personagem').show()
            break
        case 'sacerdote':
            suaClasse = 'Sacerdote'

            $('#imagens').show()
            $('#warrioricon').hide()
            $('#bardoicon').hide()
            $('#druidaicon').hide()
            $('#monkicon').hide()
            $('#paladicon').hide()
            $('#huntericon').hide()
            $('#rogueicon').hide()
            $('#warlockicon').show()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)

            $('#botao-proximo-formulario').show()

            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Sacerdote')
            $('#descriçãoClasse').text( '   Um campeão sacerdotal que empunha magia divina a serviço de um poder maior.\n Seu principal Status é a Sabedoria.\n Por possuir uma fé inquebrantável ganha bônus em Carisma +1 ')

            $('#status-personagem').show()
            break
        case 'bruxo':
            suaClasse = 'Bruxo'

            $('#imagens').show()
            $('#warrioricon').hide()
            $('#bardoicon').hide()
            $('#druidaicon').hide()
            $('#monkicon').hide()
            $('#paladicon').hide()
            $('#huntericon').hide()
            $('#rogueicon').hide()
            $('#warlockicon').show()

            $('#botao-proximo-formulario').show()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)

            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Bruxo')
            $('#tituloClasse').css('right', '36.6%')
            $('#descriçãoClasse').text( '   Um portador de magia derivada de barganha com uma entidade planar.\n Seu principal Status é o Carisma.\n Por possuir conhecimento vil ganha bônus em Sabedoria +1')

            $('#status-personagem').show()
            break
        case 'mago':
            suaClasse = 'Mago'

            $('#imagens').show()
            $('#warrioricon').hide()
            $('#bardoicon').hide()
            $('#druidaicon').hide()
            $('#monkicon').hide()
            $('#paladicon').hide()
            $('#huntericon').hide()
            $('#rogueicon').hide()
            $('#warlockicon').show()

            $('#botao-proximo-formulario').show()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)

            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Mago')
            $('#descriçãoClasse').text( '   Um usuário de magia escolado, capaz de manipular as estruturas da realidade.\n Seu principal Status é a Inteligência.\n Por possuir conhecimento do arcano invejável ganha bônus em Sabedoria +1')

            $('#status-personagem').show()
            break
        case 'ladino':
            suaClasse = 'Ladino'

            $('#imagens').show()
            $('#warrioricon').hide()
            $('#bardoicon').hide()
            $('#druidaicon').hide()
            $('#monkicon').hide()
            $('#paladicon').hide()
            $('#huntericon').hide()
            $('#rogueicon').show()
            $('#warlockicon').hide()

            $('#botao-proximo-formulario').show()
            

            $('#descriçãoClasse').show()
            $('#tituloClasse').text('Ladino')
            $('#descriçãoClasse').text( '   Um trapaceiro que utiliza de furtividade e astúcia para sobrepujar os obstáculos e inimigos.\n Seu principal Status é a Destreza.\n Por ser um exímio trapaceiro ganha bônus em Destreza +1')

            $('#status-personagem').show()

            $('#pontos').val(0)
            $('#nome').val(0)
            $('#força').val(0)
            $('#destreza').val(0)
            $('#contituicao').val(0)
            $('#inteligencia').val(0)
            $('#sabedoria').val(0)
            $('#carisma').val(0)
            $('#ponto-de-vida').val(0)
            
            break
        default:
            suaClasse = ''

            $('#imagens').hide()
            $('#descriçãoClasse').hide()
            $('#tituloClasse').text('Classe')
            $('#descriçãoClasse').text()


            $('#botao-proximo-formulario').hide()
            $('#status-personagem').hide()
    }
}

function proximoCriar(){
    seuNome = $('#nome').val()
    força = $('#força').val()
    destreza = $('#destreza').val()
    constituicao = $('#contituicao').val()
    inteligencia = $('#inteligencia').val()
    sabedoria = $('#sabedoria').val()
    carisma = $('#carisma').val()
    pv = $('#ponto-de-vida').val()
    console.log(seuNome, suaRaça, suaClasse, força, destreza, constituicao, inteligencia, sabedoria, carisma, pv)

    if($('#nome').val().length >= 3 && $('#nome').val().length <= 16 && força >= 1 && pv >=2){
    document.getElementById('segundo-formulario').style.display = 'block'
    document.getElementById('primeiro-formulario').style.display = 'none'
    $('#erro-segundo-formulario').hide()
    } else if(força <= 1 && pv <=2){
        $('#erro-segundo-formulario').text ('Randomize o status!')
    } else{
        $('#erro-segundo-formulario').text ('O campo de Nome deve conter entre 3 a 16 caracteres.')
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


