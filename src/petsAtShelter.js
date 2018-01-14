function displayShelterDogSearchResults(data) {
    console.log(data.petfinder.pets);
    let dogNumberCheck = data.petfinder.pets.pet;
    console.log(Array.isArray(dogNumberCheck));
    if (Array.isArray(dogNumberCheck) === false) {
       console.log("1 result");
       let oneDogResult = data.petfinder.pets.pet;
       console.log(oneDogResult);
            if (oneDogResult === undefined) {
                const noDogsHere = `<p class="noResults">There are no dogs in this shelter at the moment</p>`;
                $('.shelterDogSearchResults').html(noDogsHere);
            }
            else {
            renderDogSearchResults(oneDogResult)
            .then((singleDog) => {
                if (data.petfinder.pets.pet.animal.$t.toLowerCase() === "dog") {
                    $(".shelterDogSearchResults").html(singleDog);
                }
            })
        }
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
                const noDogs = `<p class="noResults">There are no dogs in this shelter at the moment</p>`;
                $('.shelterDogSearchResults').html(noDogs);
        }
        })
    }
    
}

$(document).ready(function(){
    const arrPages = ['shelter.html', 'shelterPetProfile.html', 'getPetsAtShelter.html'];
    if(arrPages.includes(localStorage.getItem('lastPage'))){
        console.log(localStorage);
        const shelterPageId = localStorage.getItem('shelterPageId');
        getPetsAtShelter(shelterPageId, displayShelterDogSearchResults);
        localStorage.setItem('lastPage', 'getPetsAtShelter.html');
    }
});
