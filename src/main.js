function renderBreedList(breeds) {
    const breedList = `<option value=${breeds.$t}>${breeds.$t}</option>`;
    return breedList;
}

function renderDogSearchResults (pets) {
    return new Promise((resolve) => {
        const shelterId = pets.shelterId.$t;
        const dogBreed = pets.breeds.breed;
        let dogImg = pets.media;
        
        if (Object.keys(dogImg).length === 0 && dogImg.constructor === Object) {
            dogImg = 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.sainergytech.com%2Fuploads%2FNo-Image-Available.jpg&imgrefurl=http%3A%2F%2Fwww.sainergytech.com%2Fgallery%2F8&docid=3ykvw0bWmewu0M&tbnid=hs8NJbOFEtortM%3A&vet=10ahUKEwjGvMWqibzYAhWpzIMKHceCBTEQMwhIKAkwCQ..i&w=400&h=400&bih=692&biw=1205&q=no%20image%20available%20jpg&ved=0ahUKEwjGvMWqibzYAhWpzIMKHceCBTEQMwhIKAkwCQ&iact=mrc&uact=8';
        }
        else {
            if(pets.media.photos.photo.length > 6){
                dogImg = pets.media.photos.photo[7].$t;
            }
            else if(pets.media.photos.photo.length > 2){
                dogImg = pets.media.photos.photo[3].$t;
            }
            else{
                dogImg = pets.media.photos.photo[0].$t;
            }
        }
    
        getShelterById(shelterId, function(data){
            const shelterName = data.petfinder.shelter.name.$t;
            const dogSearchResults = 
            `<div class="col-3">
                <div class="profile" id="${pets.id.$t}">
                <img class="profile-image" src="${dogImg}" /> 
                    <div class="profile-content">
                        <h3>${pets.name.$t}</h3>
                        <p>Age: ${pets.age.$t}</p> 
                        <p>Breed: ${extractBreeds(dogBreed)}</p>
                        <p>${shelterName}</p>
                    </div>
                </div>
            </div>`;
            resolve(dogSearchResults);
        });
    });
}

function extractBreeds(breed) { 
    if (Array.isArray(breed)) { 
        return breed.map((obj) => obj.$t).join(' / '); 
    } 
    else {
        return breed.$t; 
    }
}

function renderShelterSearchResults(shelters) {
    let displayAddress = shelters.address1.$t;
    if (displayAddress === undefined) {
        displayAddress = "No address available";
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
    let shelterAddress = pet.contact.address1.$t;
    if (shelterAddress === undefined) {
        shelterAddress = "No address available";
    }    
    const shelterNameId = pet.shelterId.$t;
    const profileBreed = pet.breeds.breed;
    const petProfile = `
    <div id="profile" class="col-8">
      <h1>${pet.name.$t}</h1> 
      <h3>${extractBreeds(profileBreed)}</h3>
      <img id="profileImg" src="${pet.media.photos.photo[7].$t}" alt="dogName">
      <h2>Story</h2>
      <p>${pet.description.$t}</p>
    </div>
     <div class="col-3mid" id="contactInfo">
      <h2>Contact Info</h2>
      <p>${getShelterById(shelterNameId, displayShelterName)}</p>
      <p>Phone: ${pet.contact.phone.$t}</p>
      <p>Address: ${pet.contact.address1.$t} ${pet.contact.address2.$t}</p>
    </div>`;
  return petProfile;
}

function displayShelterName(data) {
    const shelterName = data.petfinder.shelter.name.$t;
    console.log(shelterName);
    $("#shelterId").html(`Shelter: ${shelterName}`);
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
        console.log(breed);

        localStorage.setItem('petZip', zipCode);
        localStorage.setItem('petBreed', breed);
        localStorage.setItem('lastPage', 'home.html');
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
    $('.dogSearchResults').on('click', '.profile-image', function() {
        const profileId = $(this).parent().attr('id');
        
        localStorage.setItem('profileId', profileId);
        window.location = 'profile.html';
    });

    // Display pets available for a shelter
    $('.shelterSearchResults').on('click', '.shelterProfileImage', function() {
        const shelterPageId = $(this).parent().attr('id');
        localStorage.setItem('lastPage', 'shelter.html');
        localStorage.setItem('shelterPageId', shelterPageId);
        window.location = 'pet.html';
    });
}



$(document).ready(function(){
    registerHandlers();
    getBreedList(displayBreedList);
}); 






