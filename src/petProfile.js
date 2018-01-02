function displayPetProfile(data) {
    const petProfileResults = data.petfinder.pet.map((pet, index) => renderPetProfile(pet, index));
    $(".profilePage").html(petProfileResults);
}

$(document).ready(function(){
    console.log('Pet Profile Loaded');
    const profileId = localStorage.getItem('profileId');
    console.log(profileId)
    getPetProfile(profileId, displayPetProfile);
}); 