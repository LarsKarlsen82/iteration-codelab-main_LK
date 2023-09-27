// Function to create and append animals to the grid
function appendAnimalsToGrid(animalDataArray) {
    // Get a reference to the grid container
    let gridContainer = document.getElementById('animalGrid');

    // Loop through the array of animal data objects
    animalDataArray.forEach(function (data) {
        // Create a new div for the animal
        let animalElement = document.createElement('div');
        animalElement.classList.add('animal');

        // Create an image element for the animal's image
        let image = document.createElement('img');
        image.src = data.image;
        image.alt = data.name;

        // Create a paragraph for the animal's name
        let name = document.createElement('p');
        name.textContent = data.name;

        // Create a paragraph for the animal's short description
        let description = document.createElement('p');
        description.textContent = data.shortDescription;

        // Append the image, name, and description to the animal element
        animalElement.appendChild(image);
        animalElement.appendChild(name);
        animalElement.appendChild(description);

        // Append the animal element to the grid container
        gridContainer.appendChild(animalElement);
    });
}

// Simulated data for multiple animals
const animalDataArray = [
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
    {
        name: 'Great White',
        shortDescription: 'The scariest sea animal',
        image: './assets/img/great-white.jpg'
    },
    {
        name: 'Tiger',
        shortDescription: 'The scariest land animal',
        image: './assets/img/standard_tiger.jpg'
    },
    // Add more animals here
];

// Call the function to append the animals to the grid
appendAnimalsToGrid(animalDataArray);