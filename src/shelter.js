function displayShelterSearchResults(data) {
    console.log(data);
    const shelterSearchResults = data.petfinder.shelters.shelter.map((shelter, index) => renderShelterSearchResults(shelter,index));
    $(".shelterSearchResults").html(shelterSearchResults);
}

$(document).ready(function() {
    $(".shelterSearchResults").empty();
    console.log('Shelter Page Loaded');
    const zip = localStorage.getItem('shelterZip');
    console.log(zip)
    findShelters(zip, displayShelterSearchResults); 
}); 