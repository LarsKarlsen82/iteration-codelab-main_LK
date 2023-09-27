/* opgave 1 */

// Create a function to display the log output in the specified HTML element
function displayLogOutput() {
    // Create a new <div> element to hold the log output
    const logOutputDiv = document.createElement("div");
  
    // Start a console group within the logOutputDiv
    logOutputDiv.textContent = "opgave 1";
    logOutputDiv.style.fontWeight = "bold";
  
    // Loop to log numbers and append them to the logOutputDiv
    for (let i = 0; i < 11; i++) {
      const logInfo = document.createElement("div");
      logInfo.textContent = i;
      logOutputDiv.appendChild(logInfo);
    }
  
    // Select the .assignmentTopSection element and append the logOutputDiv to it
    const assignmentTopSection = document.querySelector(".assignmentArea");
    assignmentTopSection.appendChild(logOutputDiv);
  }
  
  // Call the displayLogOutput function to display the log output
  displayLogOutput();


  // console.group("opgave 1");
// // din kode her
// for (let i = 0; i <11; i++ ){
//     console.info(i)
// }

// console.groupEnd();


/* opgave 2 */
console.group("opgave 2");
// din kode her

// Hent en reference til HTML-elementet med id "opgave2" og gem den i variablen MinResultat
let MinResultat = document.getElementById('opgave2');

// Definer konstanterne "antaltal" og "start" med værdierne 12 og 10
const antaltal = 12;
const start = 10;

// Start en løkke, der tæller fra "start" (10) op til "antaltal" (12)
for (let i = start; i < antaltal; i++) {
    // Udskriv værdien af "i" til konsollen som information
    console.info(i);
    
    // Hvis "i" er mindre end "antaltal" (12)
    if (i < antaltal) {
        // Tilføj værdien af "i" efterfulgt af en ny linje ("\n") til tekstindholdet af "MinResultat"
        MinResultat.innerText += `${i}\n`;
    }
}

// Afslut gruppen i konsollen
console.groupEnd();



/* opgave 3 */
console.group("opgave 3");
// din kode her
for (let i = 2; i <=42; i += 2 ){
    console.info(i)
}

console.groupEnd();

let MyResult = document.getElementById('opgave3');

// Definer konstanterne "antaltal" og "start" med værdierne 12 og 10
const antal = 40;
const startup = 2;
const steps = 2;

// Start en løkke, der tæller fra "start" (10) op til "antaltal" (12)
for (let i = startup; i <=antal; i += steps ) {
    // Udskriv værdien af "i" til konsollen som information
    console.info(i);
    
    // Hvis "i" er mindre end "antaltal" (12)
    if (i < antaltal) {
        // Tilføj værdien af "i" efterfulgt af en ny linje ("\n") til tekstindholdet af "MyResult"
        MyResult.innerText += `${i}\n`;
    }
}

// Afslut gruppen i konsollen
console.groupEnd();









