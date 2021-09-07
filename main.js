// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// OPDRACHT UITWERKINGEN ---------------------------------


// ** -------------------------------------------------- **
// 1a: Hoeveel exemplaren moeten we nog verkopen?
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over iedere entry van de array heen (tv)
// bereken de nog niet verkochte exemplaren voor elke tv (originalStock - sold)
// tel alle nog niet verkochte exemplaren bij elkaar op
// sla die waarde op in een variabele
// log die waarde in de console

function itemsLeft(tvs) {
  let total = 0;

  for (let i = 0; i < tvs.length; i++) {
    // aantal items van deze tv niet verkocht
    const unsold = tvs[i].originalStock - tvs[i].sold;
    // tel op bij de accumulator
    total = total + unsold;
  }

  return total;
}

const itemsLeftToSell = itemsLeft(inventory);

console.log(itemsLeftToSell);

// ** -------------------------------------------------- **
// 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina
// ** -------------------------------------------------- **

// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla dat element op in onze javaScript
const itemsLeftToSellContainer = document.getElementById('items-left-to-sell');
// maak een nieuw HTML element <h3> aan in JS
const itemsLeftToSellElement = document.createElement('h3');
// stop er de hoeveelheid items in (itemsLeftToSell)
itemsLeftToSellElement.textContent = itemsLeftToSell.toString();
// geef hem een class zodat we het getal rood kunnen kleuren (en maak deze class ook in de CSS met styling!)
itemsLeftToSellElement.setAttribute('class', 'items-left-number');
// voeg ons <p> element toe aan anker (<div id="items-left-to-sell">)
itemsLeftToSellContainer.appendChild(itemsLeftToSellElement);


// ** -------------------------------------------------- **
// 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// voor iedere entry in de array (tv), stop het tv type (tv.type) in de uitkomst

const tvTypes = inventory.map((tv) => {
  return tv.type;
})

console.log(tvTypes);

// ** -------------------------------------------------- **
// 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// check voor iedere entry in de array (tv) of een item uitverkocht is. Zo ja, dan willen we die behouden
// een tv is uitverkocht wanneer tv.originalStock - tv.sold === 0 of, andere benadering, wanneer tv.originalStock === tv.sold
// log de output in de console

const soldOutItems = inventory.filter((tv) => {
  return tv.originalStock === tv.sold;
})

console.log(soldOutItems);

// ** -------------------------------------------------- **
// 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// voor iedere entry in de array (tv), check of de tv ambilight heeft
// een tv beschikt over ambiLight wanneer de tv.options.ambiLight property de waarde true heeft
// log de output in de console

const itemsWithAmbi = inventory.filter((tv) => {
  return tv.options.ambiLight === true;
})

console.log(itemsWithAmbi);

// ** -------------------------------------------------- **
// 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// loop over de array heen
// voor iedere entry in de array (tv), check de hoogte van de prijs (tv.price)
// plaats de tv achter de vorige tv als de waarde lager is
// log de output in de console

// Korte versie
function sortTvs(tvs) {
  // return statement is niet nodig omdat sort wordt toegepast op originele array
  tvs.sort((a, b) => a.price - b.price);
}

// Lange versie
// function sortTvs(tvs) {
//   return tvs.sort((a, b) => {
//     if (a.price - b.price > 0) {
//       return 1;
//     }
//
//     if (a.price - b.price < 0) {
//       return -1;
//     }
//
//     return 0;
//   });
// }

// Let op: deze hoeft niet in een variabele omdat sort altijd wordt toegepast op de originele array!
sortTvs(inventory);

console.log(inventory);


// ** -------------------------------------------------- **
// 3a: Wat is onze doel-opbrengst? (blauw)
// ** -------------------------------------------------- **

// PSEUDO-CODE
// als we één lijst met tv objecten aangeleverd krijgen, hebben we daar de totale voorraad en de prijs uit nodig
// voor iedere tv:
// bereken de opbrengst (voorraad x prijs)
// tel deze opbrengst bij de totale opbrengst op
// geef de totale prijs als getal terug
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<div id="goal-profit"></div> gemaakt)
// sla de referentie naar dit element op
// stop de totale opbrengst als tekst in dit element
// voeg dit element toe aan de container

function getGoalProfit(tvs) {
  let total = 0;

  for (let i = 0; i < tvs.length; i++) {
    // opbrengst voor één tv
    const profit = tvs[i].originalStock * tvs[i].price;
    // tel op bij het totaal
    total = total + profit;
  }

  return total;
}

const goalProfit = getGoalProfit(inventory);

const goalProfitContainer = document.getElementById('goal-profit');
const goalProfitElement = document.createElement('h3');
goalProfitElement.setAttribute('class', 'goal-profit');
goalProfitElement.textContent = `€${goalProfit},-`;
goalProfitContainer.appendChild(goalProfitElement);

// ** -------------------------------------------------- **
// 3b: Hoeveel hebben we tot nu toe verdient (groen)
// ** -------------------------------------------------- **

// PSEUDO-CODE
// als we één lijst met tv objecten aangeleverd krijgen, hebben we daar de verkochte items en de prijs uit nodig
// voor iedere tv:
// bereken de opbrengst (verkochte items x prijs)
// tel deze opbrengst bij de totale opbrengst op
// geef de totale prijs als getal terug
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<div id="current-profit"></div> gemaakt)
// sla de referentie naar dit element op
// stop de totale opbrengst als tekst in dit element
// voeg dit element toe aan de container

function getCurrentProfit(tvs) {
  let total = 0;

  for (let i = 0; i < tvs.length; i++) {
    // opbrengst voor één tv
    const profit = tvs[i].sold * tvs[i].price;
    // tel op bij het totaal
    total = total + profit;
  }

  return total;
}

const currentProfit = getCurrentProfit(inventory);

const currentProfitContainer = document.getElementById('current-profit');
const currentProfitElement = document.createElement('h3');
currentProfitElement.setAttribute('class', 'current-profit');
currentProfitElement.textContent = `€${currentProfit},-`;
currentProfitContainer.appendChild(currentProfitElement);


// ** -------------------------------------------------- **
// 4: Geef de type-namen van twee tv's weer op de pagina
// ** -------------------------------------------------- **

// PSEUDO CODE
// Maak een element in het HTML-bestand die we als 'anker' kunnen gebruiken in ons script, zoals bijvoorbeeld <ul id="list-of-tvs"></ul>
// Sla de referentie naar dat element op in onze javaScript
// Maak een nieuw HTML element <li> aan in JS
// Stop er het type van een tv in
// Voeg ons <li> element toe aan anker (<ul>)

const listOfTvs = document.getElementById('tv-type-list');

// EERSTE TV
const tvOne = document.createElement('li');
tvOne.textContent = inventory[0].type;
listOfTvs.appendChild(tvOne);

// TWEEDE TV
const tvTwo = document.createElement('li');
tvTwo.textContent = inventory[2].type;
listOfTvs.appendChild(tvTwo);


// ** -------------------------------------------------- **
// 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// als we één tv object aangeleverd krijgen, pak daar dan de naam (tv.name), merk (tv.brand) en type (tv.type) uit
// plak [merk] [type] - [naam] aan elkaar en geef deze string terug
// als de dit zouden willen herhalen voor alle tv's, willen we dat dit herbruikbaar is => functie!

function createTvName(tv) {
  return `${tv.brand} ${tv.type} - ${tv.name}`;
  // dit mag ook:
  // return tv.brand + ' ' + tv.type + ' - ' + tv.name;
}

// ** -------------------------------------------------- **
// 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
// ** -------------------------------------------------- **

function createTvPrice(tv) {
  return `€${tv.price},-`;
  // dit mag ook:
  // return '€ ' + tv.price + ',-';
}

// ** -------------------------------------------------- **
// 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel inches als cm
// ** -------------------------------------------------- **

// PSEUDO-CODE
// we gaan ervan uit dat we een array van beschikbare scherm-groottes aangeleverd krijgen
// we hebben een eind-string nodig om alle sizes in op te slaan
// voor iedere size:
// geef de size weer + 'inches'
// reken de inches om in cm en zet het tussen haakjes met 'cm' erachter
// als er nog een size achter komt te staan, scheid ze dan met een |
// als de dit zouden willen herhalen voor alle tv's, willen we dat dit herbruikbaar is => functie!

function createScreenSizesString(sizes) {
  let output = '';

  for (let i = 0; i < sizes.length; i++) {
    const currentSizeInches = sizes[i];
    const currentSizeCm = sizes[i] * 2.54;

    // Format de string
    output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;

    // Als we nog niet bij de laatste size zijn, voeg dan een | toe aan het eind
    if (i < sizes.length - 1) {
      output = `${output} | `;
    }
  }

  return output;
}

// ** -------------------------------------------------- **
// 5d: Zorg ervoor de informatie van één van de twee tv's zoals het voorbeeld wordt weergegeven op de pagina.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// 1. maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<div id="tv-one"></div> gemaakt)
// 2. sla de referentie naar dit element op
// 3. maak een HTML element (<h2>) aan voor de naam van de tv
//      genereer de tv naam met de functie uit 5a
//      stop deze naam als tekst in het element
//      voeg het element aan het <div> element toe
// 4. maak een HTML element (<h2>) aan voor de prijs van de tv
//      genereer de tv prijs met de functie uit 5b
//      stop deze string als tekst in het element
//      voeg het element aan het <div> element toe
// 5. maak een HTML element (<p>) aan voor de schermgroottes van de tv
//      genereer de schermgroottes-string met de functie uit 5c
//      stop deze string als tekst in het element
//      voeg het element aan het <div> element toe

const tvContainer = document.getElementById('tv-one');

const tvOneName = document.createElement('h2');
tvOneName.textContent = createTvName(inventory[2]);
tvContainer.appendChild(tvOneName);

const tvOnePrice = document.createElement('h3');
tvOnePrice.textContent = createTvPrice(inventory[2])
tvContainer.appendChild(tvOnePrice);

const tvSizes = document.createElement('p');
tvSizes.textContent = createScreenSizesString(inventory[2].availableSizes);
tvContainer.appendChild(tvSizes);

// ** -------------------------------------------------- **
// 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
// ** -------------------------------------------------- **

// PSEUDO-CODE
// 1. Maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script (<ul id="tv-list"></ul> gemaakt)
// 2. Sla de referentie naar dit element op
// 3. Loop over de inventory array, en maak voor elke tv:
// 4. - een nieuw HTML element <li> aan in JS
// 5. - een HTML element (<h2>) aan voor de naam van de tv (zoals bij de stappen in 5d)
// 6. - een HTML element (<h3>) aan voor de prijs van de tv (zoals bij de stappen in 5d)
// 7. - een HTML element (<p>) aan voor de schermgroottes van de tv (zoals bij de stappen in 5d)
// 8. - een HTML element (<p>) aan voor de opties van de tv (zoals bij de stappen in 5d)

// Versie met map methode
function dislayTvList(tvs) {
  const tvList = document.getElementById('tv-list');

  tvs.map((tv) => {
    const tvContainer = document.createElement('li');
    tvContainer.setAttribute('class', 'tv-list-item');

    const tvName = document.createElement('h2');
    tvName.textContent = createTvName(tv);
    tvContainer.appendChild(tvName);

    const tvPrice = document.createElement('h3');
    tvPrice.textContent = createTvPrice(tv);
    tvContainer.appendChild(tvPrice);

    const tvSizes = document.createElement('p');
    tvSizes.textContent = createScreenSizesString(tv.availableSizes);
    tvContainer.appendChild(tvSizes);

    return tvList.appendChild(tvContainer);
  });
}

// Versie met for-loop
function dislayTvListLoop(tvs) {
  const tvList = document.getElementById('tv-list');

  for (let i = 0; i < tvs.length; i++) {
    const tvContainer = document.createElement('li');
    tvContainer.setAttribute('class', 'tv-list-item');

    const tvName = document.createElement('h2');
    tvName.textContent = createTvName(tvs[i]);
    tvContainer.appendChild(tvName);

    const tvPrice = document.createElement('h3');
    tvPrice.textContent = createTvPrice(tvs[i]);
    tvContainer.appendChild(tvPrice);

    const tvSizes = document.createElement('p');
    tvSizes.textContent = createScreenSizesString(tvs[i].availableSizes);
    tvContainer.appendChild(tvSizes);

    tvList.appendChild(tvContainer);
  }
}

// ** -------------------------------------------------- **
// 7: Maak drie knoppen om de lijst de filteren in de console
// ** -------------------------------------------------- **

// PSEUDO-CODE
// 1. Maak drie knoppen in het HTML-bestand en sla daar de referentie naartoe op
// 2. Schrijf drie functies die we kunnen aanroepen zonder parameter
// 2. Geef alle knoppen een event listener en roep de juiste functie aan

const sortButton = document.getElementById('sort-button');
const soldOutButton = document.getElementById('sold-out-button');
const ambilightButton = document.getElementById('ambilight-button');

function sortOnPrice() {
  inventory.sort((a, b) => a.price - b.price);
  console.log(inventory);
}

function showAmbilightTvs() {
  const itemsWithAmbi = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
  })
  console.log(itemsWithAmbi);
}

function showOutOfStockItems() {
  const soldOutItems = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
  })
  console.log(soldOutItems);
}

sortButton.addEventListener('click', sortOnPrice);
soldOutButton.addEventListener('click', showAmbilightTvs);
ambilightButton.addEventListener('click', showOutOfStockItems);