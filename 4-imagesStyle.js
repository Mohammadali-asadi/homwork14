//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops
// Select all the img elements in the document
const images = document.querySelectorAll('img');

images.forEach((img, index) => {
    if (index % 2 === 0) {
        img.style.border = '5px solid blue'; 
        img.style.border = '5px dashed red'; 
    }
});
