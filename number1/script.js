const json = ` [{
        "name" : "Molecule Man",
        "age" : 29,
        "secretIdentity" : "Dan Jukes",
        "powers": "laserblast"
      },
      {
        "name" : "Madame Uppercut",
        "age" : 39,
        "secretIdentity" : "Jane Wilson",
        "powers" : "can fire"
      },
      {
        "name" : "Eternal Flame",
        "age" : 1000000,
        "secretIdentity" : "Unknown",
        "powers" : "can fire"
    }
]`;
  debugger

  document.addEventListener("DOMContentLoaded", function
  (event) {
    let heroes = JSON.parse(json);

    let heroesContent = "";
    for (let hero of heroes) {
        heroesContent += `<div class='hero'>
        <h2> ${hero.name}</h2>
        <div>Age: ${hero.age}</div>
        <div>${hero.secretIdentity}</div>
        <div>Power: ${hero.powers}</div>
        </div>`;
    }

    document.getElementById("heroesContainer").innerHTML = heroesContent;
  });