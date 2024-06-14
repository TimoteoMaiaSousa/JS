//OBJETOS
const user = {
    nome: "Tim",
    idade: 15,
    namorando: false,
    compras: ['celular', 'carro', 'notebook'],
    sayName: function(){
        /*
        A palvra-chave "this" retorna
        e identifica os tipos e valores
        do bloco ( {} ) em que ele está inserido.
        Caso esteja em dúvida,passe o mouse
        por cima dele aqui em baixo para ver o que
        o "this" retorna
        */
        console.log(this.name);
        
    }
};
/*
Aqui estamos chamamdo a função onde o "this"
está inserido, retornando o nome do usuário
*/
user.sayName()
/*
Fora de contexto, "this" vai simplesmente retornar
um objeto do lugar onde ele foi inserido (window object,  etc.),
como o exemplo abaixo
*/
function saymyAge(){
    console.log(`Minha idade é ${this} anos`);
}
saymyAge();