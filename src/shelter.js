function displayShelterSearchResults(data) {
    console.log(data);
    if (data.petfinder.header.status.message.$t == "Invalid geographical location") {
        alert("invalid geographical location");
    }
    else {
    const shelterSearchResults = data.petfinder.shelters.shelter.map((shelter, index) => renderShelterSearchResults(shelter,index));
    $(".shelterSearchResults").html(shelterSearchResults);
    }
};

$(document).ready(function() {
    
    console.log('Shelter Page Loaded');
    const zip = localStorage.getItem('shelterZip');
    console.log(zip)
    findShelters(zip, displayShelterSearchResults); 
}); 