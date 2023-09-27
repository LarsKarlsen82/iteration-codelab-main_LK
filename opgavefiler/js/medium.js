const numbers = [1, 2, 3, 4, 5];

/* opgave 1 */
// Udskriv alle tal i arrayet til konsollen og DOM-elementet med id "opgave1"
console.group("opgave 1");
// din kode her
let sum = 0;
let størsteTal = numbers[0]; // Antag det første tal er det største indtil videre

// Hent en reference til DOM-elementet med id "opgave1"
let opgave1Element = document.getElementById('opgave1');

numbers.forEach(function(tal) {
    console.log(tal);

    // Beregn summen af alle tal i arrayet
    sum += tal;

    // Find det største tal i arrayet
    if (tal > størsteTal) {
        størsteTal = tal;
    }

    // Tilføj hvert tal som en ny linje til DOM-elementet med id "opgave1"
    let talElement = document.createElement('p');
    talElement.textContent = tal;
    opgave1Element.appendChild(talElement);
});

// Udskriv summen af alle tal i arrayet til konsollen og DOM-elementet med id "opgave1"
console.log(`Summen af alle tal i arrayet: ${sum}`);

let sumElement = document.createElement('p');
sumElement.textContent = `Sum: ${sum}`;
opgave1Element.appendChild(sumElement);

// Udskriv det største tal i arrayet til konsollen og DOM-elementet med id "opgave1"
console.log(`Det største tal i arrayet: ${størsteTal}`);

let størsteTalElement = document.createElement('p');
størsteTalElement.textContent = `Største tal: ${størsteTal}`;
opgave1Element.appendChild(størsteTalElement);


console.groupEnd();

/* opgave 2 */
console.group("opgave 2");

// Hjælpefunktionen til at hente data
function getData(callback) {
    // Simuleret data
    const data = [
        {
            name: 'Koala',
            shortDescription: 'The king of the jungle',
            image: './assets/img/_WW236934.jpg'
        },
        {
            name: 'Elephant',
            shortDescription: 'The largest land animal',
            image: './assets/img/elephant.jpg'
        },
        // Tilføj flere dyr her
    ];

    // Simuleret asynkron datahentning (f.eks. fra et API)
    setTimeout(() => {
        callback(data);
    }, 1000); // Simuleret forsinkelse på 1 sekund
}

// Funktionen til at vise data i DOM
function displayDataInDOM(data) {
    // Hent en reference til DOM-elementet med id "opgave2"
    let opgave2Element = document.getElementById('opgave2');

    // Gennemgå hvert dataobjekt og udskriv name og shortDescription
    data.forEach(function (dyr) {
        // Opret et nyt element for dyret
        let dyreElement = document.createElement('div');

        // Tilføj dyrets navn som en overskrift
        let overskrift = document.createElement('h2');
        overskrift.textContent = dyr.name;
        dyreElement.appendChild(overskrift);

        // Tilføj dyrets billede som et billedeelement
        let billede = document.createElement('img');
        billede.src = dyr.image;
        dyreElement.appendChild(billede);

        // Tilføj dyrets beskrivelse som en afsnit
        let beskrivelse = document.createElement('p');
        beskrivelse.textContent = dyr.shortDescription;
        dyreElement.appendChild(beskrivelse);

        // Tilføj dyrelementet til DOM-elementet med id "opgave2"
        opgave2Element.appendChild(dyreElement);

        console.info(11);
    });
}
console.info(12);

// Hent data og kald displayDataInDOM, når data er tilgængelig
getData(displayDataInDOM);

console.groupEnd();


console.group("opgave 3");

// Function to fetch user data from the API
function fetchUserData() {
  // Make a fetch request to the API endpoint
  fetch('https://dummyjson.com/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Check if the data is an array or an object with a property containing an array
      if (Array.isArray(data)) {
        // Store the retrieved data in the userData variable
        userData = data;

        // Call a function to display the user data
        displayUserData(userData);

        // Call "opgave 4" code after data is fetched and stored
        runOpgave4();
      } else if (data && Array.isArray(data.users)) {
        // Store the retrieved data in the userData variable
        userData = data.users;

        // Call a function to display the user data
        displayUserData(userData);

        // Call "opgave 4" code after data is fetched and stored
        runOpgave4();
      } else {
        console.error('Data received from the API is not in the expected format.');
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Function to display user data in the specified element
function displayUserData(userData) {
  // Get a reference to the element with id "opgave3"
  const opgave3Element = document.getElementById('opgave3');

  // Create an HTML string to store the user data
  let userListHTML = '<ul>';

  // Loop through the user data and create list items for each user
  userData.forEach(function (user) {
    const { firstName, lastName, age } = user;
    userListHTML += `<li>${firstName} ${lastName}, Age: ${age}</li>`;
  });

  userListHTML += '</ul>';

  // Set the HTML content of the "opgave3" element to display the user list
  opgave3Element.innerHTML = userListHTML;
}

// Call the fetchUserData function to initiate the data fetching and display
fetchUserData();


console.groupEnd();


console.group("opgave 4");

// "opgave 4" code
function runOpgave4() {
    console.group("opgave 4");
  
    // Vælg en bruger fra data, der blev hentet i Opgave 3 (du kan vælge enhver bruger ved at ændre indekset)
    const selectedUser = userData[0]; // Erstat 0 med indekset for den bruger, du ønsker at vælge
  
    // Funktion til at vise brugerdata i det specificerede element ved hjælp af en for...in loop
    function displayUserDataWithKeys(user) {
      // Få en reference til elementet med id "opgave4"
      const opgave4Element = document.getElementById('opgave4');
  
      // Opret en HTML-streng til at gemme brugerdata
      let userDataHTML = '<ul>'; // Brug en uordnet liste (ul) for enkelhed
  
      // Gennemgå nøglerne (egenskaberne) i brugerens dataobjekt ved hjælp af en for...in loop
      for (const key in user) {
        if (user.hasOwnProperty(key)) {
          const value = user[key];
          userDataHTML += `<li>${key}: ${value}</li>`;
        }
      }
  
      userDataHTML += '</ul>';
  
       // Sæt HTML-indholdet af elementet med id "opgave4" for at vise brugerdata med nøgler og værdier
      opgave4Element.innerHTML = userDataHTML;
    }
  
   // Kald funktionen for at vise den valgte brugers data med nøgler og værdier
    displayUserDataWithKeys(selectedUser);

  console.groupEnd();
}










// support functions ---------------------------------------------------------------------------------------------

function getData() {





    const myData = [

        {
            name: 'Elefant',
            picture: 'assets/img/elephant.jpg',
            description: 'Loxodonta africana, også kendt som afrikansk elefant, er verdens største landdyr. Den har en grå hud og store ører, som den bruger til at regulere kropstemperaturen og kommunikere med andre elefanter. Afrikanske elefanter lever i store flokke og spiser op til 150 kg planter om dagen. De er også kendt for deres stærke intelligens og følelsesmæssige bånd til deres familie og flok. På grund af ulovlig jagt og tab af levesteder er afrikanske elefanter klassificeret som truede og er beskyttet af lovgivning'
            , shortDescription: 'Loxodonta africana, også kendt som afrikansk elefant.'
        },

        {
            name: 'Tiger',
            picture: 'assets/img/standard_tiger.jpg',
            description: 'Panthera tigris, også kendt som tigeren, er en stor kat, der er hjemmehørende i Asien. Tigeren har en gul eller orange pels med mørke striber og har normalt en lang kraftig hale. Der findes forskellige underarter af tigeren, og størrelsen og farven kan variere afhængigt af underarten og habitatet. Tigeren er kendt for sin styrke, hurtighed og smidighed, og den er en top-rovdyr i sit økosystem. Desværre er mange af underarterne af tigeren truede på grund af tab af levesteder og ulovlig jagt, og bevaring af tigeren og dens levesteder er en vigtig bevaringsindsats.',
            shortDescription: 'Panthera tigris, også kendt som tigeren.'
        },

        {
            name: 'Tarantel',
            picture: 'assets/img/Brachypelma_smithi.jpg',
            description: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel, er en stor og farverig edderkop, der er hjemmehørende i Mexico. Den har en mørk krop med røde og orange striber på benene og en karakteristisk rød knæled. Brachypelma smithi er en populær art blandt edderkoppeentusiaster på grund af dens smukke farver og rolige natur.',
            shortDescription: 'Brachypelma smithi, også kendt som den mexicansk rødknæs tarantel.'
        },

        {
            name: 'Koala',
            picture: 'assets/img/_WW236934.jpg',
            description: 'Phascolarctos cinereus, også kendt som koala, er en pungdyrart, der er hjemmehørende i Australien. Den har en blød, tyk pels, store ører og en stor næse, og dens krop er tilpasset til at leve hovedsageligt af eukalyptusblade. Koalaer lever hovedsageligt i trætoppene og er kendt for deres afslappede og søvnige opførsel, da de sover op til 20 timer om dagen.',
            shortDescription: 'Phascolarctos cinereus, også kendt som koala.'
        },

        {
            name: 'Haj',
            picture: 'assets/img/great-white.jpg',
            description: 'Carcharodon carcharias, også kendt som en hvidhaj eller great white haj, er en stor rovdyr, der lever i kystfarvande over hele verden. Den har en grå-blå krop med en trekantet finne på ryggen og en stor kraftig kæbe med skarpe tænder. Carcharodon carcharias er kendt for at være en top-rovdyr og jager primært sæler og fisk. Den er også kendt for dens sjældne, men berygtede, angreb på mennesker, selvom sådanne angreb ofte er utilsigtede og sjældne.',
            shortDescription: 'Carcharodon carcharias, også kendt som en hvidhaj.'
        }
    ];
    return myData

}