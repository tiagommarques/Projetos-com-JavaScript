//Mini-Projeto 1 - Trocando o valor de uma variável
console.log('Mini Projeto 1 - Trocando o valor de uma variável');
let c = 'azul';
let d = 'verde';
console.log('Cor atual C:', c);
console.log('Cor atual D:', d);

[c, d] = [d, c];

console.log(' ');
console.log('Cor atual C:', c);
console.log('Cor atual D:', d);
console.log(' ');

//Mini-Projeto 2 - Função que calcula o menor, maior e a média entre varios números
console.log('Mini-Projeto 2 - Função que calcula o menor, maior e a média entre varios números:');
console.log('Numeros: 100, 35, 10, 15, 20, 25, 30, 35, 40, 45, 50');
let menor2 = min(100, 35, 10, 15, 20, 25, 30, 35, 40, 45, 50);
let maior2 = max(100, 35, 10, 15, 20, 25, 30, 35, 40, 45, 50);
let media2 = media(100, 35, 10, 15, 20, 25, 30, 35, 40, 45, 50);

function min(...numeros) {
    let menor2 = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor2) {
            menor2 = numeros[i];
        }
    }
    return menor2;
};
console.log('O menor número é:', menor2);

function max(...numeros) {
    let maior2 = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior2) {
            maior2 = numeros[i];
        }
    }
    return maior2;
};
console.log('O maior número é:', maior2);

function media(...numeros) {
    let media2 = 0;
    for (let i = 0; i < numeros.length; i++) {
        media2 += numeros[i];
    }
    return media2 / numeros.length;
}
console.log('A média é:', media2.toFixed(2));
console.log(' ');

//Mini-Projeto 2.1 - Função que usa 2 numeros e retorna o maior entre eles
console.log('Mini Projeto 2.1 - Função que usa 2 numeros e retorna o maior entre eles:');
console.log('Qual o mmaior número? 10 ou 12');
function maior(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
};
console.log('O maior número é:', maior(10, 12));
console.log(' ');

//Mini-Projeto 2.2 - Função que calcula a média entre 3 numeros
console.log('Mini Projeto 2.2 - Função que calcula a média entre 3 numeros:');
console.log('Qual a média? 5,10 e 15');
function media(a, b, c) {
    return (a + b + c) / 3;
}
console.log('A média é:', media(5, 10, 15));
console.log(' ');

//Mini-Projeto 2.3 - Função que calcula a maior número entre varios números
console.log('Mini Projeto 2.3 - Função que calcula a maior número entre varios números:');
let valorMaior = max(23, 45, 67, 89, 12, 34, 56, 78, 90);
console.log('Qual o maior número? 23, 45, 67, 89, 12, 34, 56, 78, 90');
console.log('O maior número é:', valorMaior);
function max(...numeros) {
    let maior = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}
console.log(' ');

//Mini-Projeto 2.4 - Função que calcula o menor número entre varios números
console.log('Mini-Projeto 2.4 - Função que calcula o menor número entre varios números:');
let valorMenor = min(103, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50);
console.log('Qual o menor número? 103, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50');
console.log('O menor número é:', valorMenor);
function min(...numeros) {
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
};
console.log(' ');

//Mini-Projeto 2.5 - Função que calcula o menor número entre 2 números
console.log('Mini-Projeto 2.5 - Função que calcula o menor número entre 2 números:');
console.log('Qual o menor número? 12 ou 9');
valorMenor = min(12, 9);
console.log('O menor número é:', valorMenor);
function min(numero1, numero2) {
    if (numero1 < numero2) {
        return numero1;
    }
    else {
        return numero2;
    }
};
console.log(' ');



