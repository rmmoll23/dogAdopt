// Petfinder methods
// https://www.petfinder.com/developers/api-docs#methods
const apiBaseUrl = 'http://api.petfinder.com';
const apiKey = '93fd0d1782907ee47a856e7d69a61895';
const apiReturnFormat = 'json';

function getBreedList(callback){
    $.getJSON(`${apiBaseUrl}/breed.list?format=json&key=${apiKey}&animal=dog&callback=?`)
    .done(callback)
    .fail(function(err){
        console.log(err)
    });
}

function getShelterById(shelterId, callback){
    const endpoint = apiBaseUrl + '/shelter.get';
}

function findShelters(zipcode, callback){
    const endpoint = apiBaseUrl + '/shelter.find';
}

function findPet(breed, zipcode, callback){
    const endpoint = apiBaseUrl + '/pet.find';
}