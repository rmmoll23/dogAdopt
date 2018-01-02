function renderBreedList(breeds) {
    const breedList = `<option value=${breeds.$t}>${breeds.$t}</option>`
    return breedList;
}

function renderDogSearchResults (pets) {  
   const shelterId = pets.shelterId.$t;
    const dogSearchResults = 
    `<div class="col-3">
        <div class="profile" id="${pets.id.$t}">
        <img class="profile-image" src="${pets.media.photos.photo[0].$t}" /> 
            <div class="profile-content">
                <h3>${pets.name.$t}</h3>
                <p>Age: ${pets.age.$t}</p> 
                <p>Breed: ${pets.breeds.breed.$t}</p>
                
            </div>
        </div>
    </div>`;
    return dogSearchResults;
}

function renderShelterSearchResults(shelters) {
    let displayAddress = shelters.address1.$t
    if (displayAddress === undefined) {
        displayAddress = "No address provided";
    }
    const shelterSearchResults = 
    `<div class="col-3">
        <div class="shelterProfile" id="${shelters.id.$t}">
            <img class="shelterProfileImage" src="https://s7d1.scene7.com/is/image/PETCO/1216511-right-1"/>
            <div class="shelterProfileContent">
                <h3>${shelters.name.$t}</h3>
                <p>${displayAddress}</p>
            </div>
        </div>
    </div>`;
    return shelterSearchResults;

}

function renderPetProfile(pet) {
    const shelterNameId = pet.shelterId.$t;
    const petProfile = `
    <div id="profile" class="col-8">
      <h1>${pet.name.$t}</h1> 
      <h3>${pet.breeds.breed.$t}</h3>
      <img id="profileImg" src="${media.photos.photo[1].$t}" alt="dogName">
      <h2>Story</h2>
      <p>${pet.description.$t}</p>
    </div>
     <div class="col-3mid" id="contactInfo">
      <h2>Contact Info</h2>
      <p>${getShelterbyId(shelterNameId, displayShelterName)}${pet.contact.phone.$t}${pet.contact.address1.$t}${pet.contact.address2.$t}</p>
    </div>`
  return petProfile;
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

        localStorage.setItem('petZip', zipCode);
        localStorage.setItem('petBreed', breed);
        window.location = 'pet.html';
    });
    
    // getShelterZipCode
    $('.shelterSearch').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('#zipCode');
        const shelterZipCode = queryTarget.val();
        // clear out the input
        queryTarget.val("");

        localStorage.setItem('shelterZip', shelterZipCode);
        window.location = 'shelter.html';
    });

    // Go to pet profile page
    $('.dogSearchResuls').on('click', '.profile-image', function() {
        const profileId = $(this).parent().attr('id');
        
        localStorage.setItem('profileId', profileId);
        window.location = 'profile.html'
    })

    // Display pets available for a shelter
    $('.shelterSearchResults').on('click', '.shelterProfileImage', function() {
        console.log("click");
        const shelterPageId = $(this).parent().attr('id');

        localStorage.setItem('shelterPageId', shelterPageId);
        window.location = 'pet.html'
    })
}



$(document).ready(function(){
    console.log('Ready');
    registerHandlers();
    getBreedList(displayBreedList);
}); 





{/* <img class="profile-image" src="${pets.media.photos.photo[0].$t}" /> */}
{/* <p>Shelter: ${getShelterbyId(shelterId, displayShelterName)}</p> */}
