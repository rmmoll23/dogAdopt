function displayDogSearchResults(data) {
    const dogSearchResults = data.petfinder.pets.pet.map((pet, index) => renderDogSearchResults(pet,index));
    $(".dogSearchResults").html(dogSearchResults);
    console.log(dogSearchResults);
}

$(document).ready(function(){
    console.log('Pet Results Loaded');
    const shelterPageId = localStorage.getItem('shelterPageId');
    console.log(shelterPageId);
    getPetsAtShelter(shelterPageId, displayDogSearchResults);
});