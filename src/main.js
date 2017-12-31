function renderBreedList(breeds) {
    const breedList = `<option value=${breeds.$t}>${breeds.$t}</option>`
    return breedList;
}

function renderDogSearchResults (pets) {  
   const shelterId = pets.shelterId.$t;
    const dogSearchResults = 
    `<div class="col-4">
        <div class="profile" id="${pets.id.$t}">
            <img class="profile-image" src="${pets.media.photos.photo[1].$t}" />
            <div class="profile-content">
                <h3>${pets.name.$t}</h3>
                <p>Age: ${pets.age.$t} Breed: ${pets.breeds.breed.$t}</p>
                <p>Shelter: ${getShelterbyId(shelterId, displayShelterName)}</p>
            </div>
        </div>
    </div>`;
    return dogSearchResults;

}

function renderShelterSearchResults(shelters) {

    const shelterSearchResults = 
    `<div class="col-4">
        <div class="profile" id="${shelters.id.$t}">
            <img class="profile-image" src="https://tf-assets-prod.s3.amazonaws.com/tf-curric/WEB-DEV-001/2.6.3_challenge_responsive_layout/rey_square.png" />
            <div class="profile-content">
                <h3>${shelters.name.$t}</h3>
                <p>${shelters.address1.$t}</p>
            </div>
        </div>
    </div>`;
    return shelterSearchResults;

}

function displayShelterName(data) {
    const shelterName = data.petfinder.shelter.name.$t
    return shelterName;

}

function displayBreedList (data) {
    // console.log(data); // Entire json result
    const breedList = data.petfinder.breeds.breed.map((breed, index) => renderBreedList(breed,index));
    $("#breedList").html(breedList);
}

function displayDogSearchResults(data) {
    const dogSearchResults = data.petfinder.pets.pet.map((pet, index) => renderDogSearchResults(pet,index));
    // $(".dogSearchResults").html(dogSearchResults);
    console.log(dogSearchResults);
}

function displayShelterSearchResults(data) {
    const shelterSearchResults = data.petfinder.shelters.shelter.map((shelter, index) => renderShelterSearchResults(shelter,index));
    // $(".shelterSearchResults").html(shelterSearchResults);
    console.log(shelterSearchResults);
}

function registerHandlers() {
    // getDogBreed and getZipCode
        $('.petSearch').submit(event => {
            event.preventDefault();
            const queryBreed = $(event.currentTarget).find('#breedList');
            const breed = queryBreed.val();
            const queryZip = $(event.currentTarget).find('#zipCode');
            const zipCode = queryZip.val();
            // clear out the input
            queryBreed.val("");
            queryZip.val("");
            console.log(breed);
            findPet(breed, zipCode, displayDogSearchResults);
            window.location = 'file:///Users/rmmoll23/projects/dogAdopt/pages/pet.html';
        });
    
    // getShelterZipCode
        $('.shelterSearch').submit(event => {
            event.preventDefault();
            const queryTarget = $(event.currentTarget).find('#zipCode');
            const shelterZipCode = queryTarget.val();
            // clear out the input
            queryTarget.val("");
            console.log(shelterZipCode);
            findShelters(shelterZipCode, displayShelterSearchResults);
            // window.location = 'file:///Users/rmmoll23/projects/dogAdopt/pages/shelter.html';
        });
}



$(document).ready(function(){
    console.log('Ready');
    registerHandlers();
    getBreedList(displayBreedList);
    
});