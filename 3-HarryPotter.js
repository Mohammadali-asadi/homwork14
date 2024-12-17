//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */
const characterImages = {
    "Harry-Potter": "https://static.wikia.nocookie.net/harrypotter/images/4/4e/Harry_Potter.png/revision/latest?cb=20190603174536",
    "Hermione-Granger": "https://static.wikia.nocookie.net/harrypotter/images/a/a6/Hermione_Granger.png/revision/latest?cb=20190603174602",
    "Ron-Weasley": "https://static.wikia.nocookie.net/harrypotter/images/0/0b/Ron_Weasley.png/revision/latest?cb=20190603174538",
    "Severus-Snape": "https://static.wikia.nocookie.net/harrypotter/images/5/5e/Severus_Snape.png/revision/latest?cb=20190603174614",
    "Draco-Malfoy": "https://static.wikia.nocookie.net/harrypotter/images/4/4c/Draco_Malfoy.png/revision/latest?cb=20190603174624",
    "Cedric-Diggory": "https://static.wikia.nocookie.net/harrypotter/images/b/b2/Cedric_Diggory.png/revision/latest?cb=20190603174634",
    "Lord-Voldemort": "https://static.wikia.nocookie.net/harrypotter/images/e/e9/Lord_Voldemort.png/revision/latest?cb=20190603174652",
    "Bellatrix-Lestrange": "https://static.wikia.nocookie.net/harrypotter/images/e/e1/Bellatrix_Lestrange.png/revision/latest?cb=20190603174701"
};
for (const [id, imgSrc] of Object.entries(characterImages)) {
    const imgElement = document.getElementById(id);
    if (imgElement) {
        imgElement.src = imgSrc;
        imgElement.alt = id.replace('-', ' ');
    }
}
