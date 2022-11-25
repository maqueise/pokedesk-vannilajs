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
    card.className = `pokemon-card swirl-in-fwd ${pokemon.types[0].type.name}`
    card.innerHTML = `
     <h2># ${pokemon.id}</h2>
    <div class="pokemon-image">
        <img  src="${pokemon.sprites.other.dream_world.front_default}" />
    </div>
    <h2 class="pokemon-name">${pokemon.name}</h2>
    <div class="pokemon-types">
        ${pokemon.types.map((type)=>
            `
            <div class="type">
                <img class="pokemon-image-type" src="./img/${type.type.name}.png" />
                <h2>${type.type.name}</h2>
            </div>
            `
        ).join('')}
        </div>  
        <img class="animate" src="${pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}" />
    `
    let sectionCards = document.querySelector('.cards')
    sectionCards.appendChild(card)
}
