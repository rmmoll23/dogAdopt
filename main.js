// breed.list
const query = {
    key: '93fd0d1782907ee47a856e7d69a61895',
    animal: 'dog',
    format: JSON
}

// pet.find
const query = {
    key: '93fd0d1782907ee47a856e7d69a61895',
    breed: getDogBreed(),
    location: getZipCode(),
    output: 'full',
    format: JSON
}

// shelter.find
const query = {
    key: '93fd0d1782907ee47a856e7d69a61895',
    location: getZipCode(),
    format: JSON 
}


function getDogBreed() {

}

function getZipCode() {

}