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

  document.addEventListener("DOMContentLoaded", function
  (event) {
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

"use strict"
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  function initRating(rating) {
iniRatingsVars(rating);

setRatingActiveWidth();

if (rating.classList.contains('rating_set')) {
  setRating(rating);
}
  }

  function iniRatingsVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  function setRating(rating) {
const ratingItems = rating.querySelectorAll('.rating__item');
for (let index = 0; index < ratingItems.length; index++) {
  const ratingItem = ratingItems[index];
  ratingItem.addEventListener("mouseenter", function (e) {
    iniRatingsVars(rating);
    setRatingActiveWidth(ratingItem.value);
  });
  ratingItem.addEventListener("mouseleave", function (e) {
    setRatingActiveWidth();
});

ratingItem.addEventListener("click", function (e) {
iniRatingsVars(rating);

if (rating.dataset.ajax) {
  setRatingValue(ratingItem.value, rating);
} else {
ratingValue.innerHTML = index +1;
setRatingActiveWidth();
}
});
  }
}
}
