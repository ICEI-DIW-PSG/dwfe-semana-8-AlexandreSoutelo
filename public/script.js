const catalogo = [
    {
        id: 1,
        titulo: "Central do Brasil",
        tipo: "filme",
        ano: 1998,
        generos: ["drama", "filme de estrada"],
        nota: 8,
        assistido: true
    },
    {
        id: 2,
        titulo: "Avatar: A Lenda de Aang",
        tipo: "serie",
        ano: 2005,
        generos: ["ação", "aventura"],
        nota: 9.3,
        assistido: true
    },
    {
        id: 3,
        titulo: "BoJack Horseman",
        tipo: "serie",
        ano: 2014,
        generos: ["animação", "drama"],
        nota: 8.8,
        assistido: true
    },
    {
        id: 4,
        titulo: "O Urso",
        tipo: "serie",
        ano: 2022,
        generos: ["comédia", "drama"],
        nota: 8.5,
        assistido: false
    },
    {
        id: 5,
        titulo: "Ainda Estou Aqui",
        tipo: "filme",
        ano: 2024,
        generos: ["drama", "drama histórico"],
        nota: 8.1,
        assistido: true
    },
    {
        id: 6,
        titulo: "Rivais",
        tipo: "filme",
        ano: 2024,
        generos: ["esporte", "romance"],
        nota: 7,
        assistido: true
    }
];

console.log(catalogo);

console.log("Título do primeiro item:");
console.log(catalogo[0].titulo);

console.log("Ano do último item:");
console.log(catalogo[catalogo.length - 1].ano);

console.log("Segundo gênero do terceiro item:");

if (catalogo[2].generos.length > 1) {
    console.log(catalogo[2].generos[1]);
} else {
    console.log("Só existe um gênero.");
}

console.log("Lista de títulos:");

for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i].titulo);
}

let quantidadeFilmes = 0;
let quantidadeSeries = 0;
let naoAssistidos = 0;
let somaNotas = 0;

for (let i = 0; i < catalogo.length; i++) {

    if (catalogo[i].tipo === "filme") {
        quantidadeFilmes++;
    }

    if (catalogo[i].tipo === "serie") {
        quantidadeSeries++;
    }

    if (catalogo[i].assistido === false) {
        naoAssistidos++;
    }

    somaNotas += catalogo[i].nota;
}

let mediaNotas = somaNotas / catalogo.length;

console.log("Média das notas:");
console.log(mediaNotas.toFixed(2));

let possuiNotaAlta = false;

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nota > 9) {
        possuiNotaAlta = true;
    }
}

let todosAssistidos = true;

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].assistido === false) {
        todosAssistidos = false;
    }
}

console.log("Existe nota maior que 9?");
console.log(possuiNotaAlta);

console.log("Todos foram assistidos?");
console.log(todosAssistidos);

let ranking = [...catalogo];

ranking.sort(function(a, b) {
    return b.nota - a.nota;
});

const output = document.getElementById("output");

output.innerHTML =
`
<h2>Resumo do Catálogo</h2>

<p>Total de itens: ${catalogo.length}</p>

<p>Quantidade de filmes: ${quantidadeFilmes}</p>

<p>Quantidade de séries: ${quantidadeSeries}</p>

<p>Não assistidos: ${naoAssistidos}</p>

<p>Média das notas: ${mediaNotas.toFixed(2)}</p>

<h3>Top 3 maiores notas</h3>

<ol>
    <li>${ranking[0].titulo} - ${ranking[0].nota}</li>
    <li>${ranking[1].titulo} - ${ranking[1].nota}</li>
    <li>${ranking[2].titulo} - ${ranking[2].nota}</li>
</ol>
`;