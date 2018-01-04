function displayPetProfile(data) {
    const petProfileResults = data.petfinder.pet;
    
    Promise.all(petProfileResults)
    .then((arrResolvedPromises) => {
        $(".profilePage").html(arrResolvedPromises);
    })
}

$(document).ready(function() {
    console.log('Pet Profile Loaded');
    const petId = localStorage.getItem('profileId');
    console.log(petId);
    getPetProfile(petId, displayPetProfile);
});