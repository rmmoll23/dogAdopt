function displayShelterDogSearchResults(data) {
    console.log(data.petfinder.pets);
    let dogNumberCheck = data.petfinder.pets;

    if (Object.keys(dogNumberCheck).length === 1 && dogNumberCheck.constructor === Object) {
       console.log("1 result");
       let oneDogResult = data.petfinder.pets.pet;
       renderDogSearchResults(oneDogResult);
       Promise.all(oneDogResult)
    .then((arrResolvedPromises) => {
        $(".shelterDogSearchResults").html(arrResolvedPromises);
    })
}

    else {
        const shelterDogSearchResults = data.petfinder.pets.pet.map((pet, index) => renderDogSearchResults(pet,index));
    }
    
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