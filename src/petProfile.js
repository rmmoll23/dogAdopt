function displayPetProfile(data) {
    const petProfileResults = data.petfinder.pet;
    
    $(".profilePage").html(renderPetProfile(petProfileResults));
}

$(document).ready(function() {
    console.log('Pet Profile Loaded');
    const petId = localStorage.getItem('profileId');
    console.log(petId);
    getPetProfile(petId, displayPetProfile);
});