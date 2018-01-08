function displayPetProfile(data) {
    const petProfileResults = data.petfinder.pet;
    
    renderPetProfile(petProfileResults)
    .then((renderDogProfile) => {
        $(".profilePage").html(renderDogProfile);
    })
}

$(document).ready(function() {
    $(".profilePage").empty();
    console.log('Pet Profile Loaded');
    const petId = localStorage.getItem('profileId');
    const shelterPetId = localStorage.getItem('shelterDogProfileId');
    console.log(petId);
    getPetProfile(petId, displayPetProfile);
    getPetProfile(shelterPetId, displayPetProfile);
});