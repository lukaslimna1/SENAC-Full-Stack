// Função que compara duas idades e retorna qual é a maior

function idade(idade1, idade2) {
    if (idade1 > idade2) {
        return `A idade: ${idade1} é maior que a idade: ${idade2}`;
    } else if (idade1 < idade2) {
        return `A idade: ${idade2} é maior que a idade: ${idade1}`;
    } else {
        return `${idade1} e ${idade2} são iguais`;
    }
}

// Chamando a função com dois valores de idade
let idadex = idade(11, 1);
console.log(idadex);