function displayShelterDogSearchResults(data) {
    console.log(data.petfinder.pets);
    const shelterDogSearchResults = data.petfinder.pets.pet.map((pet, index) => renderDogSearchResults(pet,index));
    
    console.log(shelterDogSearchResults)
    Promise.all(shelterDogSearchResults)
    .then((arrResolvedPromises) => {
        $(".shelterDogSearchResults").html(arrResolvedPromises);
    })
}

$(document).ready(function(){
    if(localStorage.getItem('lastPage') === 'shelter.html'){
        console.log('Pet Results Loaded');
        const shelterPageId = localStorage.getItem('shelterPageId');
        getPetsAtShelter(shelterPageId, displayShelterDogSearchResults);
    }
});