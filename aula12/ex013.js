/* Aprendendo a utilizar o switch! */
/* Ao se utilizar o switch, vale lembrar que o uso do comando 'break', ao final de cada bloco, é indispensável para que seu código funcione sem nenhum erro, OK? */
var agora = new Date()
var diaSem = agora.getDay()
/*
 ATENÇÃO: no JS, os dias da semana são representados da seguinte maneira:
        0 = Domingo;
        1 = Segunda;
        2 = Terça;
        3 = Quarta;
        4 = Quinta ;
        5 = Sexta;
        6 = Sábado. 
*/
/* 
 A sintaxe do switch é mais ou menos assim:
'switch'(variável a ser verificada){
    'case' valor da variável a ser verificado:
        'faça isso'
        'break'
} 
*/
switch(diaSem){
    case 0:
        console.log('Hoje é Domingo!')
        break
    case 1:
        console.log('Hoje é Segunda-feira!')
        break
    case 2:
        console.log('Hoje é Terça-feira!')
        break
    case 3:
        console.log('Hoje é Quarta-feira!')
        break
    case 4:
        console.log('Hoje é Quinta-feira!')
        break
    case 5:
        console.log('Hoje é Sexta-feira!')
        break
    case 6:
        console.log('Hoje é Sábado!')
        break
    default:
        console.log('[ERRO 459] Dia inválido (*_*)')
        break
}