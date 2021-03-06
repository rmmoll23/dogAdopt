function displayDogSearchResults(data) {
    if (data.petfinder.header.status.message.$t == "Invalid geographical location") {
        alert("invalid geographical location");
    }
    else {
    const zipCode = localStorage.getItem('petZip');
    console.log(data);
    let dogCheck = data.petfinder.pets;
    if (Object.keys(dogCheck).length === 0 && dogCheck.constructor === Object) {
       noBreedReturn(zipCode, displayDogSearchResults);
       console.log("no breed");
       const noBreedResponse = `<div class="noDogReturn">
       <p>The specific breed you searched for is not available in this area.</p>  
       <p>Go back and try another breed or look at these dogs available for adoption in the area</p>
       </div>`;
       $(".noDogReturnResponse").prepend(noBreedResponse);
    }
        const dogSearchResults = data.petfinder.pets.pet.map((pet, index) => renderDogSearchResults(pet,index));
    
   
    
    Promise.all(dogSearchResults)
    .then((arrResolvedPromises) => {
        $(".dogSearchResults").html(arrResolvedPromises);
    })
    }
};


$(document).ready(function() {
    
    const arrPages = ['home.html', 'petProfile.html', 'pet.html'];
    if(arrPages.includes(localStorage.getItem('lastPage'))){
        console.log("petPageLoaded");
        console.log(localStorage);
        const zip = localStorage.getItem('petZip');
        const breed = localStorage.getItem('petBreed');
        findPet(breed, zip, displayDogSearchResults);
        localStorage.setItem('lastPage', 'pet.html');
    }
}); 