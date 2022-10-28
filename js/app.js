const lists__pokemons = document.getElementById('lists__pokemons')

let url = 'https://pokeapi.co/api/v2/pokemon'

let templateHtml = '';
const buttons = document.getElementById('buttons')

let BtnNext;
let BtnPrevious;

const GetPokemons = async (url) => {
  lists__pokemons.innerHTML = `
  <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  `
  
  try {
    const response = await fetch(url)
    const results = await response.json();
    DataPokemons(results.results)
    
    buttons.innerHTML = BtnPrevious + " " + BtnNext;
  } catch (error) {
    console.log(error)
  }
  
}

const DataPokemons = async (urlPokemon) => {
  lists__pokemons.innerHTML = ''
  var a = Math.floor((Math.random() * (250 - 1 + 1)) + 1);
  var b= Math.floor((Math.random() * (250 - 1 + 1)) + 1);
  var c = Math.floor((Math.random() * (250 - 1 + 1)) + 1);
  var d = Math.floor((Math.random() * (250 - 1 + 1)) + 1);
  var e = Math.floor((Math.random() * (250 - 1 + 1)) + 1);
  var f = Math.floor((Math.random() * (250 - 1 + 1)) + 1);

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${a}`)
      const result = await res.json();
      templateHtml = `
    <div class="pokemon__img">
      <img src=${result.sprites.other.dream_world.front_default} alt=${result.name}/>
      <p>${result.name}</p>
    </div>
    `
      lists__pokemons.innerHTML += templateHtml
    } catch (error) {
      console.log(error)
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${b}`)
      const result = await res.json();
      templateHtml = `
    <div class="pokemon__img">
      <img src=${result.sprites.other.dream_world.front_default} alt=${result.name}/>
      <p>${result.name}</p>
    </div>
    `
      lists__pokemons.innerHTML += templateHtml
    } catch (error) {
      console.log(error)
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${c}`)
      const result = await res.json();
      templateHtml = `
    <div class="pokemon__img">
      <img src=${result.sprites.other.dream_world.front_default} alt=${result.name}/>
      <p>${result.name}</p>
    </div>
    `
      lists__pokemons.innerHTML += templateHtml
    } catch (error) {
      console.log(error)
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${d}`)
      const result = await res.json();
      templateHtml = `
    <div class="pokemon__img">
      <img src=${result.sprites.other.dream_world.front_default} alt=${result.name}/>
      <p>${result.name}</p>
    </div>
    `
      lists__pokemons.innerHTML += templateHtml
    } catch (error) {
      console.log(error)
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)
      const result = await res.json();
      templateHtml = `
    <div class="pokemon__img">
      <img src=${result.sprites.other.dream_world.front_default} alt=${result.name}/>
      <p>${result.name}</p>
    </div>
    `
      lists__pokemons.innerHTML += templateHtml
    } catch (error) {
      console.log(error)
    }

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${f}`)
      const result = await res.json();
      templateHtml = `
    <div class="pokemon__img">
      <img src=${result.sprites.other.dream_world.front_default} alt=${result.name}/>
      <p>${result.name}</p>
    </div>
    `
      lists__pokemons.innerHTML += templateHtml
    } catch (error) {
      console.log(error)
    }

}

GetPokemons(url)

buttons.addEventListener('click', (e) => {
  console.log(e.target.dataset.url)
  GetPokemons(e.target.dataset.url)
})