function displayDogSearchResults(data) {
    console.log(data.petfinder.pets)
    const dogSearchResults = data.petfinder.pets.pet.map((pet, index) => renderDogSearchResults(pet,index));
    
    console.log(dogSearchResults)
    Promise.all(dogSearchResults)
    .then((arrResolvedPromises) => {
        $(".dogSearchResults").html(arrResolvedPromises);
    })
}

$(document).ready(function(){
    if(localStorage.getItem('lastPage') === 'shelter.html'){
        console.log('Pet Results Loaded');
        const shelterPageId = localStorage.getItem('shelterPageId');
        getPetsAtShelter(shelterPageId, displayDogSearchResults);
    }
});