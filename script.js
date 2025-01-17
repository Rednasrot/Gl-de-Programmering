async function getPokemonData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    // console.log(data.results); denne gjør sånn at vi finner det resultatet som man ønsker i console log
    return data;
  }
  
  async function displayPokemonData() {
    const id = 384; // 132 gives ditto
    const pokemonData = await getPokemonData(id);
    console.log(pokemonData.sprites.front_shiny);
    // Denne måten finner jeg ulike pokemon sine sprites for hver . så spesifiserer jeg mer og mer hvilke data jeg vil ha i denne sammenhengen
    console.log(pokemonData.stats[1].base_stat); // Denne koden er for å finne Attack staten altså tallet, dette er nummer 1
    console.log(pokemonData.stats[1].stat.name); //Dette er for å finne hvilke stat navnet har slik som SP.def, attack osv.
  
    for (let i = 0; i < pokemonData.stats.length; i++) {
      const pokemonStats = pokemonData.stats[i];
      console.log(pokemonStats);
      console.log(pokemonStats.base_stat); // finner alle basestats tallene
      console.log(pokemonStats.stat.name); // Navnene til alle statsene
    }
  
    const pokemonCard = `
    <div>
    <h2>${pokemonData.id}. ${pokemonData.name}</h2>
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
    <ul>
      ${pokemonData.stats
        .map(
          (stat) => `
        <li>${stat.base_stat} ${stat.stat.name}</li>
      `
        )
        .join('')}
    </ul>
  </div>
  `;
    console.log(pokemonCard);
  
    //const pokeDex = document.getElementById('pokeDex');
    //pokeDex.appendChild(pokemonCard.innerHTML);
  
    document.getElementById('pokeDex').innerHTML = pokemonCard;
  }
  
  displayPokemonData();