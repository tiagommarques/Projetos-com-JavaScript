console.log('Aprendendo JavaScript');
console.log(' ');

//Aprendendo a usar variáveis!
console.log('> Declarando Variáveis');
let nomeCompleto = 'Tiago Marques';
console.log('Nome:', nomeCompleto);
let idade = 35;
console.log('Idade:', idade);
let altura = 1.73;
console.log('Altura:', altura);
console.log(' ');

//Aprendendo a usar constantes!
console.log('> Declarando Constantes');
const valorDoCurso = 500;
console.log('Valor do curso:', ('R$'), valorDoCurso);
console.log(' ');

//Aprendendo a usar Tipos Primitivos!
console.log('> Tipos Primitivos');
let nome = 'Tiago'; // string Literal
console.log('Nome:', nome);
let sobrenome = undefined; // Undefined
console.log('Sobrenome:', sobrenome);
let idadeAtual = 35; // number
console.log('Idade:', idadeAtual);
let estaAprovado = true; // boolean
console.log('Está aprovado?', estaAprovado);
let corFavorita = null; // Redefinir um valor
console.log('Cor favorita:', corFavorita);
console.log(' ');

//Aprendendo a usar Tipoagem Dinâmica!
console.log('> Tipagem Dinâmica');
typeof nome; // string
console.log('Tipo de nome:', typeof nome);
nome = 25; // number
console.log('Tipo de nome:', typeof nome, '- JavaScript é uma linguagem de tipagem dinâmica');
//JavaScript é uma linguagem de tipagem dinamica
typeof sobrenome; // undefined
console.log('Tipo de sobrenome:', typeof sobrenome);
typeof idadeAtual; // number
console.log('Tipo de idade:', typeof idadeAtual);
typeof estaAprovado; // boolean
console.log('Tipo de está aprovado:', typeof estaAprovado);
typeof corFavorita; // object
console.log('Tipo de cor favorita:', typeof corFavorita);
console.log(' ');

//Aprendendo a usar Objetos!
console.log('> Objetos');
let pessoa = {
    nome: 'Tiago',
    idade: 35,
    estaAprovado: true,
    sobrenome: 'Marques'
};

console.log(pessoa)
console.log(' ');

//Aprendendo a usar Arrays!
console.log('> Arrays');
let listaDeTarefas = ['Estudar JavaScript', 'Estudar HTML', 'Estudar CSS'];
console.log(listaDeTarefas);
console.log(listaDeTarefas[2]);
console.log(' ');

//Aprendendo a usar Funções!
//Para nomear a função, utilizamos verbos + substantivos!
console.log('> Functions');
let minhaCidade = 'Fortaleza';
let meuEstado = 'CE';
let meuPais = 'Brasil';
function mudarCidade(cidade, estado, pais) {
    minhaCidade = cidade;
    meuEstado = estado;
    meuPais = pais;
};
console.log('Localização Atual:', minhaCidade, '- ' + meuEstado, '- ' + meuPais);
mudarCidade('São Paulo', 'SP', 'Brasil');
console.log('Nova Localização:', minhaCidade, '- ' + meuEstado, '- ' + meuPais);
console.log(' ');

let minhaBlusa = 'preta';
let minhaCalca = 'azul';
let meuSapato = 'verde';
function mudarCor(corBlusa, corCalca, corSapato) {
    minhaBlusa = corBlusa;
    minhaCalca = corCalca;
    meuSapato = corSapato;
};
console.log('Minha Roupa Atual:');
console.log('Blusa:', minhaBlusa, '- Calça:', minhaCalca, '- Sapato:', meuSapato);
console.log('Minha Roupa Nova:');
mudarCor('amarelo', 'branco', 'vermelho');
console.log('Blusa:', minhaBlusa, '- Calça:', minhaCalca, '- Sapato:', meuSapato);
console.log(' ');

//Aprendendo a usar Tipos de Funções!
//No JavaScript, temos baisicamente 3 tipos de funções:
//1. Funções de Retorno (Funções que retornam algum valor),
//2. Funções de Chamada (Funções que não retornam nenhum valor),
//3. Funções de Construtor (Funções que retornam um objeto).

console.log('> Tipos de Funções');
console.log('Função de Chamada - sem retorno');
//Função de Chamada
function dizerNome() {
    console.log('Nome:', nomeCompleto);
};
dizerNome();
console.log(' ');

console.log('Função de Retorno - com retorno');
//Função de Retorno
function MultiplicarPorCinco(valor) {
    return valor * 5;
};
let resultado = MultiplicarPorCinco(5);
console.log('Resultado:', resultado);

function soma(a, b) {
    return a + b;
};
let minhaSoma = soma(5, 5);
console.log('Soma:', minhaSoma);
console.log(' ');

console.log('Função de Construtor - com retorno');
//Função de Construtor
function Pessoa(novoNome, novaIdade, novaAltura) {
    this.novoNome = novoNome;
    this.novaIdade = novaIdade;
    this.novaAltura = novaAltura;
};
let pessoa1 = new Pessoa('Tiago', 35, 1.73);
console.log('Pessoa 1:', pessoa1);
let pessoa2 = new Pessoa('Roberto', 25, 1.75);
console.log('Pessoa 2:', pessoa2);
let pessoa3 = new Pessoa('Francisco', 15, 1.65);
console.log('Pessoa 3:', pessoa3);
console.log(' ');

//Aprendendo a usar Operadores!
console.log('> Operadores');

//Operadores aritméticos: +, -, *, /, %, **
console.log('Operadores aritméticos:');
let salario = 1000;
console.log('Salário 1: R$', salario + salario);
console.log('Salário 2: R$', salario - 400);
console.log('Salário 3: R$', salario * salario);
console.log('Salário 4: R$', 5000 / salario);
console.log('Salário 5: R$', 10 % salario);
console.log('Salário 6: R$', 5 ** 2);
console.log(' ');

console.log('Operadores de atribuição:');
//Operadores de atribuição: =, +=, -=, *=, /=, %=
let mouse = 100;
console.log('Mouse 1:', mouse);
let mouseDois = mouse += 100;
console.log('Mouse 2:', mouseDois);
let mouseTres = mouse -= 100;
console.log('Mouse 3:', mouseTres);
let mouseQuatro = mouse *= 100;
console.log('Mouse 4:', mouseQuatro);
let mouseCinco = mouse /= 100;
console.log('Mouse 5:', mouseCinco);
let mouseSeis = mouse %= 100;
console.log('Mouse 6:', mouseSeis);
console.log(' ');

console.log('Operadores de incremento e Decremento:');
//Operadores de incremento e decremento: ++, --
console.log('Incremento:');
let contador = 20;
console.log('Contador:', ++contador);
console.log('Decremento:');
contador = 20;
console.log('Contador:', --contador);
console.log(' ');

console.log('Operadores de igualdade:');
//Operadores de igualdade: ==, ===, !=, !==
//Igualdade estrita: ===
console.log('Igualdade estrita: ===')
console.log(1 === 1);
console.log(1 === '1');

//Igualdade solta: ==
console.log('Igualdade solta: ==')
console.log(1 == 1);
console.log(1 == '1');
console.log(' ');

console.log('Operador ternário: ?');
//Operador ternário: ?
console.log('Exemplo: Empresa IT.com, pussui 300 clientes!');
console.log('Empresa Premium: acima de 150 clientes, caso contrário, é comum.');
let clientes = 300;
let tipo = clientes > 150 ? 'Premium' : 'Comum';
console.log('Empresa IT.com é do tipo:', tipo);
console.log(' ');

console.log('Operadores Lógicos:');
//Operadores Lógicos: &&, ||, !

console.log('Operador Lógico AND(e): &&');
//Retorna true se ambas as condições forem verdadeiras.
console.log(true && true);
console.log(true && false);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeTrabalhar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log('Pode trabalhar:', podeTrabalhar);
console.log(' ');

console.log('OOperador OR(ou): ||');
//Retorna true se uma das condições for verdadeira.
console.log(true || true);
console.log(true || false);
console.log(false || false);

maiorDeIdade = false;
possuiCarteiraDeTrabalho = true;
podeTrabalhar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('Pode trabalhar:', podeTrabalhar);
console.log(' ');

console.log('Operador NOT: !');
//Retorna true se a condição for falsa.
console.log(!true);
console.log(!false);

maiorDeIdade = false;
possuiCarteiraDeTrabalho = false;
podeTrabalhar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('Pode trabalhar:', podeTrabalhar);

let candidatoRecusado = !podeTrabalhar;
console.log('Candidato recusado:', candidatoRecusado);
console.log(' ');

console.log('Operadores Lógicos Não boleanos:');
//Operadores Lógicos Não boleanos: &&, ||, !

//falsy: false, 0, "", null, undefined, NaN (not a number)
//truthy: qualquer coisa diferente de falsy

let corPersonalizada = 'NaN';
let corPersonalizada2 = 'amarelo';
let corPerfil = corPersonalizada || corPersonalizada2;
console.log('Cor personalizada:', corPerfil);

corPersonalizada = 'verde';
corPersonalizada2 = 'amarelo';
corPerfil = corPersonalizada || corPersonalizada2;
console.log('Cor personalizada:', corPerfil);
console.log(' ');

console.log('Desafio - Trocando o valor de uma variável');
let c = 'azul';
let d = 'verde';
console.log('Cor atual C:', c);
console.log('Cor atual D:', d);

[c, d] = [d, c];

console.log(' ');
console.log('Cor atual C:', c);
console.log('Cor atual D:', d);
console.log(' ');

//Aprendendo a usar expressões e operadores
console.log('> Expressões e Operadores');
console.log('* If e Else');
//If e Else
// Se a nota estiver entre 7 e 10, aprovado.
// Se a nota festiver entre 4 e 6, recuperação.
// Se a nota for menor que 4, reprovado.

let nota = 6;
let aluno = 'Tiago';
console.log(aluno, 'tirou nota:', nota);

if (nota >= 7) {
    console.log('O aluno foi Aprovado!');
}
else if (nota >= 4) {
    console.log('O aluno está em Recuperação!');
}
else {
    console.log('O aluno foi Reprovado!');
};
console.log(' ');

console.log('* Switch e Case');
//Switch e Case
//admin, user, gerente ou diretor
let usuario = 'Tiago';
let cargo = 'admin';
console.log('Usuário:', usuario);
console.log('Cargo:', cargo);
let acesso = cargo;
switch (acesso) {
    case 'admin':
        console.log('Bem-vindo Administrador!');
        break;
    case 'user':
        console.log('Bem-vindo Usuário!');
        break;
    case 'gerente':
        console.log('Bem-vindo Gerente!');
        break;
    case 'diretor':
        console.log('Bem-vindo Diretor!');
        break;
    default:
        console.log('Não tem permissão para acessar o sistema!');
};
console.log(' ');

//Aprendendo a usar Laços de repetição / Loops
console.log('> Laços de repetição / Loops');
console.log('* For');
for (let i = 1; i <= 5; i++) {
    console.log('Estou Aprendendo', i);
};
console.log(' ');

for (let i = 5; i >= 1; i--) {
    console.log('Estou Aprendendo', i);
};
console.log(' ');

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) {
        console.log('Estou Aprendendo', i);
    }
};
console.log(' ');

for (let i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        console.log('Estou Aprendendo', i);
    }
};
console.log(' ');

console.log('* While');





