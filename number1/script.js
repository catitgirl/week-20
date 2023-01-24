const json = ` [{
        "name" : "Black Cat",
        "position" : "change, usually good",
        "psevdonims" : "Felicia Harmon, Felicity Harmon, Lish, Phi-Phi, Paty Hardy",
        "species" : "genetically modified person",
        "height": "178 cm",
        "weight" : "54 kg",
        "marital status" : "single, in love with Spider-Man",
        "occupation" : "Superhero, Private Investigator, Adventurer, Former Thief"
      },
      {
        "name" : "Black Widow",
        "position" : "good",
        "psevdonims" : "Natalie Rushman, Laura Matters, Mary Farrell, October",
        "species" : "serum-enhanced man",
        "height": "170 cm",
        "weight" : "59 kg",
        "marital status" : "daughter of the Red Guard",
        "occupation" : "Spy, assassin, later superheroine"  
      },
      {
        "name" : "Power Woman",
        "position" : "good",
        "psevdonims" : "Jewel, Knightress, Power Woman",
        "species" : "mutant",
        "height": "163 cm",
        "weight" : "54 kg",
        "marital" : "Married to Luke Cage",
        "occupation" : "Superhero, private detective, journalist" 
    }
]`;

  document.addEventListener("DOMContentLoaded", function
  (event) {
    let heroes = JSON.parse(json);

    let heroesContent = "";
    for (let hero of heroes) {
        heroesContent += `<div class='hero'>
        <h2> ${hero.name}</h2>
        <div><p>Position:</p> ${hero.position}</div>
        <div><p>Psevdonims:</p>${hero.psevdonims}</div>
        <div><p>Species:</p> ${hero.species}</div>
        <div><p>Height:</p> ${hero.height}</div>
        <div><p>Weight:</p> ${hero.weight}</div>
        <div><p>Marital status:</p> ${hero.marital}</div>
        <div><p>Occupation:</p> ${hero.occupation}</div>
        </div>`;
    }

    document.getElementById("heroesContainer").innerHTML = heroesContent;
  });