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
    $.getJSON(`${apiBaseUrl}/shelter.get?format=json&key=${apiKey}&id=${shelterId}&callback=?`)
    .done(callback)
    .fail(function(err){
        console.log(err)
    });
}

function findShelters(zipcode, callback){
    $.getJSON(`${apiBaseUrl}/shelter.find?format=json&key=${apiKey}&location=${zipcode}&count=12&callback=?`)
    .done(callback)
    .fail(function(err){
        console.log(err)
    });
}

function findPet(breed, zipcode, callback) {
    $.getJSON(`${apiBaseUrl}/pet.find?format=json&key=${apiKey}&animal=dog&location=${zipcode}&breed=${breed}&count=12&callback=?`)
    .done(callback)
    .fail(function(err){
        console.log(err)
    });
}

function noBreedReturn(zipCode, callback) {
    $.getJSON(`${apiBaseUrl}/pet.find?format=json&key=${apiKey}&animal=dog&location=${zipCode}&count=12&callback=?`)
    .done(callback)
    .fail(function(err){
        console.log(err)
    });
}

function getPetProfile(profileId, callback) {
    $.getJSON(`${apiBaseUrl}/pet.get?format=json&key=${apiKey}&id=${profileId}&callback=?`)
    .done(callback)
    .fail(function(err){
        console.log(err)
    });
}

function getPetsAtShelter(shelterPageId, callback) {
    $.getJSON(`${apiBaseUrl}/shelter.getPets?format=json&key=${apiKey}&id=${shelterPageId}&animal=dog&count=12&callback=?`)
    .done(callback)
    .fail(function(err){
        console.log(err)
    });
}

const walmartEndpoint = `http://api.walmartlabs.com/v1/search`;
function getWalmartSearchResults(itemSearch, callback) {
    $.getJSON(`${walmartEndpoint}?apiKey=zqx46w87nycunsgep2rxg9m4&format=json&categoryId=5440_202072&query=${itemSearch}&callback=?`)
    .done(callback)
    .fail(function(err){
        console.log(err)
    });
}
    

