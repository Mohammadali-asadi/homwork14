/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/

const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];

// Function to get a random color from the colors array
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const userInput = prompt("Please enter some text:");

let styledText = '';

for (let char of userInput) {
    styledText += <span style="color: ${getRandomColor()}">${char}</span>;
}
document.getElementById('word').innerHTML = styledText;
