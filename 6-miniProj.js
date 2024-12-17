//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red
// Function to change the color of the year text (2020) every second
function changeYearColor() {
    const yearText = document.querySelector('h1');
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'aqua', 'yellow'];
    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        yearText.style.color = randomColor;
    }, 1000);
}
function applyChallengeStyles() {
    const listItems = document.querySelectorAll('ul li');

    listItems.forEach(item => {
        if (item.textContent.includes('Done')) {
            item.style.backgroundColor = 'green'; 
        } else if (item.textContent.includes('Ongoing')) {
            item.style.backgroundColor = 'yellow'; 
        } else if (item.textContent.includes('Coming')) {
            item.style.backgroundColor = 'red';
        }
    });
}

changeYearColor();
applyChallengeStyles();
