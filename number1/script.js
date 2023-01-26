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
      "name" : "Wonder Woman",
      "position" : "good",
      "psevdonims" : "Diana Prince",
      "species" : "mutant",
      "height": "183 cm",
      "weight" : "75 kg",
      "marital" : "Single",
      "occupation" : "Superhero, assistant secretary" 
  }
]`;

document.addEventListener("DOMContentLoaded", function (event) {
  let heroes = JSON.parse(json);

  let heroesContent = "";
  for (let hero of heroes) {
    heroesContent += `<div class='hero'>
        <h2> ${hero.name}</h2>
        <div><strong>Position:</strong> ${hero.position}</div>
        <div><strong>Psevdonims:</strong>${hero.psevdonims}</div>
        <div><strong>Species:</strong> ${hero.species}</div>
        <div><strong>Height:</strong> ${hero.height}</div>
        <div><strong>Weight:</strong> ${hero.weight}</div>
        <div><strong>Marital status:</strong> ${hero.marital}</div>
        <div><strong>Occupation:</strong> ${hero.occupation}</div>
        </div>`;
  }

  document.getElementById("heroesContainer").innerHTML = heroesContent;
});

// rating
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
  item.addEventListener('click', () => {
    const {
      itemValue
    } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;

    // преобразовываем объект в строку и сохраняем в localStorage
    localStorage.setItem('itemValue', JSON.stringify(itemValue));
    const savedRating = JSON.parse(localStorage.getItem('itemValue'));
    console.log(savedRating)
  })
);