// const breedEndpoint = http://api.petfinder.com/breed.list
const query = {
    key: '93fd0d1782907ee47a856e7d69a61895',
    animal: 'dog',
    format: JSON
}

function renderBreedList(breeds) {
    const breedList = `<option value=${breeds.$t}>Poodle</option>`
    return breedList;
}

// const petEndpoint = http://api.petfinder.com/pet.find
const query = {
    key: '93fd0d1782907ee47a856e7d69a61895',
    breed: getDogBreed(),
    location: getZipCode(),
    animal: 'dog',
    format: JSON
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

// const shelterEndpoint = http://api.petfinder.com/shelter.find
const query = {
    key: '93fd0d1782907ee47a856e7d69a61895',
    location: getZipCode(),
    format: JSON 
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

function displayBreedList () {
  const breedList = data.items.map((item, index) => renderBreedList(item,index));
    
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