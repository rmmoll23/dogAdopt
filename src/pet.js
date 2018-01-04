function displayDogSearchResults(data) {
    const zipCode = localStorage.getItem('petZip');
    let dogCheck = data.petfinder.pets;
    if (Object.keys(dogCheck).length === 0 && dogCheck.constructor === Object) {
       noBreedReturn(zipCode, displayDogSearchResults);
       console.log("no breed");
    }
        const dogSearchResults = data.petfinder.pets.pet.map((pet, index) => renderDogSearchResults(pet,index));
    
   
    
    Promise.all(dogSearchResults)
    .then((arrResolvedPromises) => {
        $(".dogSearchResults").html(arrResolvedPromises);
    })
}


$(document).ready(function() {
    if(localStorage.getItem('lastPage') === 'home.html'){
        console.log("petPageLoaded");
        const zip = localStorage.getItem('petZip');
        const breed = localStorage.getItem('petBreed');
        findPet(breed, zip, displayDogSearchResults);
    }
}); 