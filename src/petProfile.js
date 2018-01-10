function displayPetProfile(data) {
    const petProfileResults = data.petfinder.pet;
    
    renderPetProfile(petProfileResults)
    .then((renderDogProfile) => {
        $(".profilePage").html(renderDogProfile);
    })
}

$(document).ready(function() {
    if(localStorage.getItem('lastPage') === 'pet.html'){
    console.log('Pet Profile Loaded');
    const petId = localStorage.getItem('profileId');
    console.log(petId);
    getPetProfile(petId, displayPetProfile);
    }
    else if(localStorage.getItem('lastPage') === 'getPetsAtShelter.html'){
    console.log('shelterPetProfile loaded');
    const shelterPetId = localStorage.getItem('shelterDogProfileId');
    getPetProfile(shelterPetId, displayPetProfile);
    }
    localStorage.setItem('lastPage', 'petProfile.html');
});