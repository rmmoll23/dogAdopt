function displayPetProfile(data) {
    const petProfileResults = data.petfinder.pet;
    
    renderPetProfile(petProfileResults)
    .then((renderDogProfile) => {
        $(".profilePage").html(renderDogProfile);
    })
}

$(document).ready(function() {
    if(localStorage.getItem('lastPage') === 'pet.html' || localStorage.getItem('lastPage') === 'petProfile.html'){
        console.log('Pet Profile Loaded');
        console.log(localStorage);
        const petId = localStorage.getItem('profileId');
        getPetProfile(petId, displayPetProfile);
        localStorage.setItem('lastPage', 'petProfile.html');
    }
    else if(localStorage.getItem('lastPage') === 'getPetsAtShelter.html' || localStorage.getItem('lastPage') === 'shelterPetProfile.html'){
        console.log('shelterPetProfile loaded');
        console.log(localStorage);
        const shelterPetId = localStorage.getItem('shelterDogProfileId');
        getPetProfile(shelterPetId, displayPetProfile);
        localStorage.setItem('lastPage', 'shelterPetProfile.html');
    }

    // localStorage.setItem('lastPage', 'petProfile.html');
});