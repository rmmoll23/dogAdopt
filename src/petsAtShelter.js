function displayShelterDogSearchResults(data) {
    console.log(data.petfinder.pets);
    let dogNumberCheck = data.petfinder.pets.pet;
    console.log(Array.isArray(dogNumberCheck));
    if (Array.isArray(dogNumberCheck) === false) {
       console.log("1 result");
       let oneDogResult = data.petfinder.pets.pet;
       console.log(oneDogResult);
       renderDogSearchResults(oneDogResult)
        .then((singleDog) => {
            if (singleDog.animal.$t.toLowerCase() === "dog") {
                $(".shelterDogSearchResults").html(singleDog);
            }
        })
    }
    else {
        const pets = data.petfinder.pets.pet.filter(pet=>{
            return pet.animal.$t.toLowerCase() === "dog"
        });
        const shelterDogSearchResults = pets.map((pet, index) => {
            return renderDogSearchResults(pet,index);
        });
        console.log(shelterDogSearchResults);
        Promise.all(shelterDogSearchResults)
        .then((arrResolvedPromises) => {
            $(".shelterDogSearchResults").html(arrResolvedPromises);
            if ($(".shelterDogSearchResults").html() == "") {
                console.log("hello");
                const noDogs = `<p class="noDogs">There are no dogs in this shelter at the moment</p>`;
                $('.shelterDogSearchResults').html(noDogs);
        }
        })
    }
    
}

$(document).ready(function(){
    
    if(localStorage.getItem('lastPage') === 'shelter.html'){
        console.log('Pet Results Loaded');
        const shelterPageId = localStorage.getItem('shelterPageId');
        getPetsAtShelter(shelterPageId, displayShelterDogSearchResults);
    }
});