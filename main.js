import './style.css'

async function localizarPokemon(nome) {
    let resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    let pokemon = await resposta.json()
    criarCard(pokemon)
}

let inputPesquisa = document.querySelector('.search-input')
let btnLocalizar = document.querySelector('.search-btn')
btnLocalizar.addEventListener('click', function () {
    localizarPokemon(inputPesquisa.value)
})

function criarCard(pokemon) {
    let card = document.createElement('article')
    card.className = 'pokemon-card'
    card.innerHTML = `
    <div class="pokemon-image">
        <img class="" src="${pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}" />
    </div>
    <h2 class="pokemon-name">${pokemon.name}</h2>
    <div class="pokemon-type-name">
        ${pokemon.types.map((type)=>
            `<img class="pokemon-image-type" src="./img/${type.type.name}.png" />`
        ).join('')}
    </div>  
    `
    let sectionCards = document.querySelector('.cards')
    sectionCards.appendChild(card)
}
