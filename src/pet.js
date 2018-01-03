function displayDogSearchResults(data) {
    const dogSearchResults = data.petfinder.pets.pet.map((pet, index) => renderDogSearchResults(pet,index));
    $(".dogSearchResults").html(dogSearchResults);
    console.log(dogSearchResults);
}

$(document).ready(function() {
    console.log("petPageLoaded");
    const zip = localStorage.getItem('petZip');
    const breed = localStorage.getItem('petBreed');
    findPet(breed, zip, displayDogSearchResults);
}); 