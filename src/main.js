function renderBreedList(breeds) {
    const breedList = `<option value=${breeds.$t}>${breeds.$t}</option>`
    return breedList;
}

function renderDogSearchResults (pets) {  

    const dogSearchResults = 
    `<div class="col-4">
        <div class="profile" id="${pets.id.$t}">
            <img class="profile-image" src="${pets.media.photos.photo[1].$t}" />
            <div class="profile-content">
                <h3>${pets.name.$t}</h3>
                <p>Age: ${pets.age.$t} Breed: ${pets.breeds.breed.$t}</p>
                <p>Shelter: getShelterName()</p>
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


function getDogBreed() {
    $('.petSearch').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('#breedList');
        const breed = queryTarget.val();
        // clear out the input
        queryTarget.val("");
        return breed;
    });
}

function getZipCode() {
    $('.petSearch').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('#zipCode');
        const zipCode = queryTarget.val();
        // clear out the input
        queryTarget.val("");
        return zipCode;
    });

    $('.shelterSearch').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('#zipCode');
        const shelterZipCode = queryTarget.val();
        // clear out the input
        queryTarget.val("");
        return shelterZipCode;
    });
}

function getShelterName() {

}

function displayBreedList (data) {
    // console.log(data); // Entire json result
    const breedList = data.petfinder.breeds.breed.map((breed, index) => renderBreedList(breed,index));
    console.log(breedList);
    $("#breedList").html(breedList);
}

function displayDogSearchResults() {
    const dogSearchResults = data.items.map((item, index) => renderDogSearchResults(item,index));
    $(".dogSearchResults").html(dogSearchResults);
}

function displayShelterSearchResults() {
    const shelterSearchResults = data.items.map((item, index) => renderShelterSearchResults(item,index));
    $(".shelterSearchResults").html(shelterSearchResults);
}

function registerHandlers() {

}

$(document).ready(function(){
    console.log('Ready');
    registerHandlers();
    getBreedList(displayBreedList);
});