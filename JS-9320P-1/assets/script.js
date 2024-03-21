let allCharacters = {
    characters: [
        {
            id: 1,
            name: "Luke Skywalker",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
            homeworld: "tatooine",
        },
        {
            id: 2,
            name: "C-3PO",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
            homeworld: "tatooine",
        },
        {
            id: 3,
            name: "R2-D2",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
            homeworld: "naboo",
        },
        {
            id: 4,
            name: "Darth Vader",
            pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
            homeworld: "tatooine",
        },
        {
            id: 5,
            name: "Leia Organa",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
            homeworld: "alderaan",
        },
        {
            id: 6,
            name: "Owen Lars",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
            homeworld: "tatooine",
        },
        {
            id: 7,
            name: "Beru Whitesun lars",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
            homeworld: "tatooine",
        },
        {
            id: 8,
            name: "R5-D4",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
            homeworld: "tatooine",
        },
        {
            id: 9,
            name: "Biggs Darklighter",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
            homeworld: "tatooine",
        },
        {
            id: 10,
            name: "Obi-Wan Kenobi",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
            homeworld: "stewjon",
        },
        {
            id: 11,
            name: "Anakin Skywalker",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
            homeworld: "tatooine",
        },
        {
            id: 12,
            name: "Wilhuff Tarkin",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
            homeworld: "eriadu",
        },
        {
            id: 13,
            name: "Chewbacca",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
            homeworld: "kashyyyk",
        },
        {
            id: 14,
            name: "Han Solo",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
            homeworld: "corellia",
        },
        {
            id: 15,
            name: "Greedo",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
            homeworld: "Rodia",
        },
        {
            id: 16,
            name: "Jabba Desilijic Tiure",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
            homeworld: "tatooine",
        },
        {
            id: 17,
            name: "Wedge Antilles",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
            homeworld: "corellia",
        },
        {
            id: 18,
            name: "Jek Tono Porkins",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
            homeworld: "bestine",
        },
        {
            id: 19,
            name: "Yoda",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
        },
        {
            id: 20,
            name: "Palpatine",
            pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
            homeworld: "naboo",
        },
    ],
};

let isVisible = false;

function renderFilter() {

    let homeworldsRaw = allCharacters.characters.map(
        (char) => char.homeworld ?? "other"
    );

    const homeworldsUnique = [...new Set(homeworldsRaw)];

    let homeworlds = homeworldsUnique.map((lower) => lower.toLowerCase());

    const radioWrapper = document.createElement("div");
    radioWrapper.classList.add(
        "d-flex",
        "justify-content-center",
        "align-items-center",
        "radio-container"
    );
    document.body.appendChild(radioWrapper);

    const defaultRadioButton = `
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="myRadios" id="all" value="all" checked onchange="filterCharacters('all')">
          <label class="form-check-label" for="all">All</label>
      </div>`;

    radioWrapper.innerHTML += defaultRadioButton;

    for (let i = 0; i < homeworlds.length; i++) {
        const radioButton = `
      <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="myRadios" id="homeworld-${homeworlds[i]}" value="${homeworlds[i]}" onchange="filterCharacters('${homeworlds[i]}')">
          <label class="form-check-label" for="homeworld-${homeworlds[i]}">${homeworlds[i]}</label>
      </div>`;

        radioWrapper.innerHTML += radioButton;
    }
}

function hideFilter() {
    const radioWrapper = document.querySelector(".radio-container");
    radioWrapper.innerHTML = "";
}

function renderCharacters() {
    if (!isVisible) {
        renderFilter();
        const showCharactersButton = document.getElementById("showCharacters");

        const charactersDiv = document.createElement("div");
        charactersDiv.classList.add("row", "card-container");
        document.body.appendChild(charactersDiv);

        allCharacters.characters.forEach((character) => {
            const card = `
                    <div class="card card-wrapper mx-auto my-4" style="width: 18rem;">
                        <img src="${character.pic
                }" class="card-img-top img-wrapper" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">${character.homeworld || "Bilinmiyor"
                }</p>
                        </div>
                    </div>`;
            charactersDiv.innerHTML += card;
        });

        showCharactersButton.textContent = "Karakterleri Gizle";
        showCharactersButton.classList.remove("btn-outline-success");
        showCharactersButton.classList.add("btn-outline-danger");
    } else {
        hideFilter();
        const showCharactersButton = document.getElementById("showCharacters");
        const charactersDiv = document.querySelector(".card-container");
        charactersDiv.innerHTML = "";
        showCharactersButton.textContent = "Karakterleri Göster";
        showCharactersButton.classList.remove("btn-outline-danger");
        showCharactersButton.classList.add("btn-outline-success");
    }

    isVisible = !isVisible;
}

function filterCharacters(selectedHomeworld) {
    const charactersDiv = document.querySelector(".card-container");
    charactersDiv.innerHTML = "";

    if (selectedHomeworld === "all") {
        allCharacters.characters.forEach((character) => {
            const card = `
                      <div class="card card-wrapper mx-auto my-4" style="width: 18rem;">
                          <img src="${character.pic
                }" class="card-img-top img-wrapper" alt="...">
                          <div class="card-body">
                              <h5 class="card-title
                              ">${character.name}</h5>
                              <p class="card-text">${character.homeworld || "Bilinmiyor"
                }</p>
                          </div>
                      </div>`;
            charactersDiv.innerHTML += card;
        });

        return;
    }

    allCharacters.characters.forEach((character) => {
        const card = `
                      <div class="card card-wrapper mx-auto my-4" style="width: 18rem;">
                          <img src="${character.pic
            }" class="card-img-top img-wrapper" alt="...">
                          <div class="card-body">
                              <h5 class="card-title
                              ">${character.name}</h5>
                              <p class="card-text">${character.homeworld || "Bilinmiyor"
            }</p>
                          </div>
                      </div>`;
        if (character.homeworld?.toLowerCase() === selectedHomeworld) {
            charactersDiv.innerHTML += card;
        }
    });
}