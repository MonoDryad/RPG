function randomizarStatusPrimeiro(){

    if(suaRaça == 'Humano' && suaClasse == 'Guerreiro'){

        $('#força').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#destreza').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#contituicao').val((Math.floor(Math.random() * (18 - 13) + 13)) + 1)
        $('#inteligencia').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (13 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Humano' && suaClasse == 'Bardo'){

        $('#força').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (16 - 11) + 11))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#carisma').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))
    
        $('#ponto-de-vida').val(Math.floor(Math.random() * (3.9 - 1) + 1) + (Math.floor(Math.random() * (5.9 - 1) + 1)))

        proximo = 1
    } else if(suaRaça == 'Humano' && suaClasse == 'Monge'){

        $('#força').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))
        proximo = 1
    } else if(suaRaça == 'Humano' && suaClasse == 'Paladino'){

        $('#força').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#destreza').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (16 - 11) + 11))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (12 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Humano' && suaClasse == 'Caçador'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#contituicao').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (11 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Humano' && suaClasse == 'Sacerdote'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 8))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Humano' && suaClasse == 'Mago'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#sabedoria').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Humano' && suaClasse == 'Ladino'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Elfo' && suaClasse == 'Guerreiro'){

        $('#força').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#destreza').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#contituicao').val((Math.floor(Math.random() * (18 - 13) + 13)) + 1)
        $('#inteligencia').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (13 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Elfo' && suaClasse == 'Bardo'){

        $('#força').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (16 - 11) + 11))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#carisma').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))
    
        $('#ponto-de-vida').val(Math.floor(Math.random() * (3.9 - 1) + 1) + (Math.floor(Math.random() * (5.9 - 1) + 1)))

        proximo = 1
    }else if(suaRaça == 'Elfo' && suaClasse == 'Druída'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (9 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Elfo' && suaClasse == 'Monge'){

        $('#força').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Elfo' && suaClasse == 'Caçador'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#contituicao').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (11 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Elfo' && suaClasse == 'Sacerdote'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 8))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Elfo' && suaClasse == 'Mago'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#sabedoria').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Elfo' && suaClasse == 'Ladino'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))

        proximo = 1
    }else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Guerreiro'){

        $('#força').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#destreza').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#contituicao').val((Math.floor(Math.random() * (18 - 13) + 13)) + 1)
        $('#inteligencia').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (13 - 2) + 2))


        proximo = 1
    } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Bardo'){

        $('#força').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (16 - 11) + 11))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#carisma').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))
    
        $('#ponto-de-vida').val(Math.floor(Math.random() * (3.9 - 1) + 1) + (Math.floor(Math.random() * (5.9 - 1) + 1)))

        proximo = 1
    }else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Druída'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (9 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Monge'){

        $('#força').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Paladino'){

        $('#força').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#destreza').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (16 - 11) + 11))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (12 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Caçador'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#contituicao').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (11 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Sacerdote'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 8))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Mago'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#sabedoria').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Elfo' && suaClasse == 'Ladino'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Orc' && suaClasse == 'Guerreiro'){

        $('#força').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#destreza').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#contituicao').val((Math.floor(Math.random() * (18 - 13) + 13)) + 1)
        $('#inteligencia').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (13 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Orc' && suaClasse == 'Monge'){

        $('#força').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Orc' && suaClasse == 'Paladino'){

        $('#força').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#destreza').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (16 - 11) + 11))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (12 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Orc' && suaClasse == 'Caçador'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#contituicao').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (11 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Meio-Orc' && suaClasse == 'Sacerdote'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 8))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Anão' && suaClasse == 'Guerreiro'){

        $('#força').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#destreza').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#contituicao').val((Math.floor(Math.random() * (18 - 13) + 13)) + 1)
        $('#inteligencia').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (13 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Anão' && suaClasse == 'Monge'){

        $('#força').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Anão' && suaClasse == 'Paladino'){

        $('#força').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#destreza').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (16 - 11) + 11))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (12 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Anão' && suaClasse == 'Caçador'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#contituicao').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (11 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Anão' && suaClasse == 'Sacerdote'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 8))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Anão' && suaClasse == 'Bruxo'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#sabedoria').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#carisma').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (10 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Anão' && suaClasse == 'Mago'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#sabedoria').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Anão' && suaClasse == 'Ladino'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))

        proximo = 1
    }  else if(suaRaça == 'Gnomo' && suaClasse == 'Guerreiro'){

        $('#força').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#destreza').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#contituicao').val((Math.floor(Math.random() * (18 - 13) + 13)) + 1)
        $('#inteligencia').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (13 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Gnomo' && suaClasse == 'Sacerdote'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 8))
        $('#sabedoria').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#carisma').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Gnomo' && suaClasse == 'Bruxo'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#sabedoria').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#carisma').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (10 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Gnomo' && suaClasse == 'Mago'){

        $('#força').val(Math.floor(Math.random() * (11 - 6) + 6))
        $('#destreza').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#contituicao').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#inteligencia').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#sabedoria').val(Math.floor(Math.random() * (17 - 12) + 12))
        $('#carisma').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (6 - 2) + 2))
        
        proximo = 1
    } else if(suaRaça == 'Gnomo' && suaClasse == 'Ladino'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#contituicao').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#inteligencia').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#sabedoria').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (8 - 2) + 2))

        proximo = 1
    } else if(suaRaça == 'Gnomo' && suaClasse == 'Caçador'){

        $('#força').val(Math.floor(Math.random() * (13 - 8) + 8))
        $('#destreza').val(Math.floor(Math.random() * (15 - 10) + 10))
        $('#contituicao').val(Math.floor(Math.random() * (18 - 13) + 13))
        $('#inteligencia').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#sabedoria').val(Math.floor(Math.random() * (14 - 9) + 9))
        $('#carisma').val(Math.floor(Math.random() * (12 - 7) + 7))
        $('#pontos').val(parseFloat($('#força').val()) + parseFloat($('#destreza').val()) + parseFloat($('#contituicao').val()) + parseFloat($('#inteligencia').val()) + parseFloat($('#sabedoria').val()) + parseFloat($('#carisma').val()))

        $('#ponto-de-vida').val(Math.floor(Math.random() * (11 - 2) + 2))

        proximo = 1
    }else{

        $('#força').val(0)
        $('#destreza').val(0)
        $('#contituicao').val(0)
        $('#inteligencia').val(0)
        $('#sabedoria').val(0)
        $('#carisma').val(0)
        $('#pontos').val(0)

        $('#ponto-de-vida').val(0)
    
        proximo = 0
}
    
    switch(proximo){
        case 1:
            $('#botao-proximo-formulario').attr('disabled', false)
            $('#imagens').show()
            break
        default:
            $('#botao-proximo-formulario').attr('disabled', true)
    }
}