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
            dogImg = 'data:image/png;base64,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';
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
            let shelterName = data.petfinder.shelter;
            if (shelterName === undefined) {
                shelterName = " ";
            }
            else {
                shelterName = data.petfinder.shelter.name.$t;
            }

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
    return new Promise((resolve) => {
    let shelterAddress1 = pet.contact.address1.$t;
    if (shelterAddress1 === undefined) {
        shelterAddress1 = "No address available";
    }  
    
    let shelterAddress2 = pet.contact.address2.$t;
    if (shelterAddress2 === undefined) {
        shelterAddress2 = " ";
    }    

    const shelterNameId = pet.shelterId.$t;
    const profileBreed = pet.breeds.breed;

    let shotStatus = pet.options.option[1].$t;
    if (shotStatus === "hasShots") {
        shotStatus = "has shots";
    }

    let shelterEmail = pet.contact.email.$t;
    if (shelterEmail === undefined) {
        shelterEmail = "No email address provided";
    }

    let dogStory = pet.description.$t;
    if (dogStory === undefined) {
        dogStory = "Contact shelter for more information";
    }
    if (dogStory === "Happiness Happens at the Humane Society of El Paso!") {
        dogStory = "Happiness Happens at the Humane Society of El Paso! Contact shelter for more information."
    }
    
    let dogProfileImg = pet.media;
    console.log(dogProfileImg);
        
        if (Object.keys(dogProfileImg).length === 0 && dogProfileImg.constructor === Object) {
            dogProfileImg = 'data:image/png;base64,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';
        }
        else {
            if(pet.media.photos.photo.length > 6){
                dogProfileImg = pet.media.photos.photo[7].$t;
            }
            else if(pet.media.photos.photo.length > 2){
                dogProfileImg = pet.media.photos.photo[3].$t;
            }
            else{
                dogProfileImg = pet.media.photos.photo[0].$t;
            }
        }

        getShelterById(shelterNameId, function(data){
        let shelterNameProfile = data.petfinder.shelter.name.$t;
            if (shelterNameProfile === undefined) {
                shelterNameProfile = " ";
            }

        const petProfile = `
            <div id="profile" class="col-8">
            <h1>${pet.name.$t}</h1> 
            <h3>${extractBreeds(profileBreed)}</h3>
            <p>Spay/Neuter Status: ${pet.options.option[0].$t}</p>
            <p>Shot Status: ${shotStatus}</p>
            <img id="profileImg" src="${dogProfileImg}" alt="dogName">
            <h2>Story</h2>
            <p>${dogStory}</p>
            </div>
            <div class="col-3mid" id="contactInfo">
            <h2>Contact Info</h2>
            <p>${shelterNameProfile}</p>
            <p>Phone: ${pet.contact.phone.$t}</p>
            <p>Address: ${shelterAddress1} ${shelterAddress2}</p>
            <p>City: ${pet.contact.city.$t}</p>
            <p>State: ${pet.contact.state.$t}</p>
            <p>Zip Code: ${pet.contact.zip.$t}</p>
            <p>Email: ${shelterEmail}</p>
            </div>`;
        resolve(petProfile);
        });
    });
}



function displayBreedList (data) {
    // console.log(data); // Entire json result
    const breedList = data.petfinder.breeds.breed.map((breed, index) => renderBreedList(breed,index));
    $("#breedList").html(breedList);
}

function registerHandlers() {
    // Login to home page
    $('.login').on('click', '#login', function() {
        window.location = 'home.html';
    });

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

    // Pet profile page from shelter dog search
    $('.shelterDogSearchResults').on('click', '.profile-image', function() {
        const shelterDogProfileId = $(this).parent().attr('id');

        localStorage.setItem('shelterDogProfileId', shelterDogProfileId);
        window.location = 'profile.html';
    });

    // Display pets available for a shelter
    $('.shelterSearchResults').on('click', '.shelterProfileImage', function() {
        const shelterPageId = $(this).parent().attr('id');
        localStorage.setItem('lastPage', 'shelter.html');
        localStorage.setItem('shelterPageId', shelterPageId);
        window.location = 'getPetsAtShelter.html';
    });
}



$(document).ready(function(){
    registerHandlers();
    getBreedList(displayBreedList);
}); 






