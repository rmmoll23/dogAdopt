// const breedArray = ["Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akbash", "Akita", "Alaskan Malamute", "American Bulldog", "American Eskimo Dog", "American Hairless Terrier", "American Staffordshire Terrier", "American Water Spaniel",  "Anatolian Shepherd",  "Appenzell Mountain Dog",  "Australian Cattle Dog / Blue Heeler",  "Australian Kelpie",  "Australian Shepherd",  "Australian Terrier", "Basenji", "Basset Hound", "Beagle", "Bearded Collie", "Beauceron", "Bedlington Terrier", "Belgian Shepherd / Laekenois", "Belgian Shepherd / Malinois", "Belgian Shepherd / Sheepdog", "Belgian Shepherd / Tervuren", "Bernese Mountain Dog", "Bichon Frise", "Black and Tan Coonhound", "Black Labrador Retriever", "Black Mouth Cur", "Black Russian Terrier", "Bloodhound", "Blue Lacy", "Bluetick Coonhound", "Boerboel", "Bolognese", "Border Collie", "Border Terrier", "Borzoi", "Boston Terrier", "Bouvier des Flanders", "Boxer", "Boykin Spaniel", "Briard", "Brittany Spaniel", "Brussels Griffon", "Bull Terrier", "Bullmastiff", "Cairn Terrier", "Canaan Dog", "Cane Corso Mastiff", "Carolina Dog", "Catahoula Leopard Dog", "Cattle Dog", "Caucasian Sheepdog / Caucasian Ovtcharka", "Cavalier King Charles Spaniel", "Chesapeake Bay Retriever", "Chihuahua", "Chinese Crested Dog", "Chinese Foo Dog", "Chinook", "Chocolate Labrador Retriever", "Chow Chow", "Cirneco dell'Etna", "Clumber Spaniel", "Cockapoo", "Cocker Spaniel", "Collie", "Coonhound", "Corgi", "Coton de Tulear", "Curly-Coated Retriever", "Dachshund", "Dalmatian", "Dandi Dinmont Terrier", "Doberman Pinscher", "Dogo Argentino", "Dogue de Bordeaux", "Dutch Shepherd", "English Bulldog", "English Cocker Spaniel", "English Coonhound", "English Pointer", "English Setter", "English Shepherd", "English Springer Spaniel", "English Toy Spaniel", "Entlebucher", "Eskimo Dog", "Feist", "Field Spaniel", "Fila Brasileiro", "Finnish Lapphund", "Finnish Spitz", "Flat-Coated Retriever", "Fox Terrier", "Foxhound", "French Bulldog", "Galgo Spanish Greyhound", "German Pinscher", "German Shepherd Dog", "German Shorthaired Pointer", "German Spitz", "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "Great Dane", "Great Pyrenees", "Greater Swiss Mountain Dog", "Greyhound", "Hamiltonstovare", "Harrier", "Havanese", "Hound", "Hovawart", "Husky", "Ibizan Hound", "Icelandic Sheepdog", "Illyrian Sheepdog", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Italian Greyhound", "Italian Spinone", "Jack Russell Terrier", "Jack Russell Terrier (Parson)", "Japanese Chin", "Jindo", "Kai Dog", "Karelian Bear Dog", "Keeshond", "Kerry Blue Terrier", "Kishu", "Klee Kai", "Komondor", "Kuvasz", "Kyi Leo", "Labrador Retriever", "Lakeland Terrier", "Lancashire Heeler", "Leonberger", "Lhasa Apso", "Lowchen", "Maltese", "Manchester Terrier", "Maremma Sheepdog", "Mastiff", "McNab", "Miniature Pinscher", "Miniature Schnauzer", "Mixed Breed", "Mountain Cur", "Mountain Dog", "Munsterlander", "Neapolitan Mastiff", "New Guinea Singing Dog", "Newfoundland Dog", "Norfolk Terrier", "Norwegian Buhund", "Norwegian Elkhound", "Norwegian Lundehund", "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old English Sheepdog", "Otterhound", "Papillon", "Patterdale Terrier / Fell Terrier", "Pekingese", "Peruvian Inca Orchid", "Petit Basset Griffon Vendeen", "Pharaoh Hound", "Pit Bull Terrier", "Plott Hound", "Podengo Portugueso", "Pointer", "Polish Lowland Sheepdog", "Pomeranian", "Poodle", "Portuguese Water Dog", "Presa Canario", "Pug", "Puli", "Pumi", "Rat Terrier", "Redbone Coonhound", "Retriever", "Rhodesian Ridgeback", "Rottweiler", "Rough Collie", "Saint Bernard / St. Bernard", "Saluki", "Samoyed", "Sarplaninac", "Schipperke", "Schnauzer",  "Scottish Deerhound",  "Scottish Terrier Scottie",  "Sealyham Terrier",  "Setter",  "Shar Pei",  "Sheep Dog",  "Shepherd",  "Shetland Sheepdog Sheltie",  "Shiba Inu",  "Shih Tzu",  "Siberian Husky",  "Silky Terrier",  "Skye Terrier",  "Sloughi",  "Smooth Collie",  "Smooth Fox Terrier",  "South Russian Ovtcharka",  "Spaniel",  "Spanish Water Dog",  "Spitz",  "Staffordshire Bull Terrier",  "Standard Poodle",  "Standard Schnauzer",  "Sussex Spaniel",  "Swedish Vallhund",  "Terrier",  "Thai Ridgeback",  "Tibetan Mastiff",  "Tibetan Spaniel",  "Tibetan Terrier",  "Tosa Inu",  "Toy Fox Terrier",  "Treeing Walker Coonhound",  "Vizsla",  "Weimaraner",  "Welsh Corgi",  "Welsh Springer Spaniel",  "Welsh Terrier",  "West Highland White Terrier Westie",  "Wheaten Terrier",  "Whippet",  "White German Shepherd",  "Wire Fox Terrier",  "Wirehaired Dachshund",  "Wirehaired Pointing Griffon",  "Wirehaired Terrier",  "Xoloitzcuintle / Mexican Hairless",  "Yellow Labrador Retriever",  "Yorkshire Terrier Yorkie"];

const breedArray = [];

function renderBreedList(breeds) {
    const breedList = `<option value=${breeds.$t}>${breeds.$t}</option>`;
    breedArray.push(breeds.$t);
    return breedList;
}

function renderDogSearchResults (pets) {
    return new Promise((resolve) => {
        const shelterId = pets.shelterId.$t;
        const dogBreed = pets.breeds.breed;
        let dogImg = pets.media;
        
        if (Object.keys(dogImg).length === 0 && dogImg.constructor === Object) {
            dogImg = 'data:image/png;base64,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';
        }
        else {
            if(pets.media.photos.photo.length > 6){
                dogImg = pets.media.photos.photo[7].$t;
            }
            else if(pets.media.photos.photo.length > 2){
                dogImg = pets.media.photos.photo[3].$t;
            }
            else{
                dogImg = pets.media.photos.photo[0].$t;
            }
        }
    
        getShelterById(shelterId, function(data){
            let shelterName = data.petfinder.shelter;
            if (shelterName === undefined) {
                shelterName = " ";
            }
            else {
                shelterName = data.petfinder.shelter.name.$t;
            }

            const dogSearchResults = 
            `<div class="col-3">
                <div tabIndex="1" class="profile" id="${pets.id.$t}">
                <img tabIndex="1" aria-label="hit enter or click on this image to view dog profile" class="profile-image" src="${dogImg}" /> 
                    <div class="profile-content">
                        <h3>${pets.name.$t}</h3>
                        <p>Age: ${pets.age.$t}</p> 
                        <p>Breed: ${extractBreeds(dogBreed)}</p>
                        <p>${shelterName}</p>
                    </div>
                </div>
            </div>`;
            resolve(dogSearchResults);
        });
    });
}

function extractBreeds(breed) { 
    if (Array.isArray(breed)) { 
        return breed.map((obj) => obj.$t).join(' / '); 
    } 
    else {
        return breed.$t; 
    }
}

function renderShelterSearchResults(shelters) {
    let displayAddress = shelters.address1.$t;
    if (displayAddress === undefined) {
        displayAddress = "No address available";
    }
    const shelterSearchResults = 
    `<div class="col-3">
        <div tabIndex="1" class="shelterProfile" id="${shelters.id.$t}">
            <img tabIndex="1" aria-label="hit enter or click on image to see dogs available at shelter"class="shelterProfileImage" src="https://s7d1.scene7.com/is/image/PETCO/1216511-right-1"/>
            <div class="shelterProfileContent">
                <h3>${shelters.name.$t}</h3>
                <p>${displayAddress}</p>
            </div>
        </div>
    </div>`;
    return shelterSearchResults;
}

function renderWalmartSearchResults(items, index) {
    const itemName = items.name;
    const imgURL = items.mediumImage;
    const productUrl = items.productUrl;
    const productPage = productUrl.slice(0, -14);

    const walmartSearchResults = 
    `<div class="col-3">
        <div class="itemProfile">
            <a href="${productPage}" target="_blank"><img aria-label="${itemName} hit enter or click on image to view item page" class="itemImage" src="${imgURL} alt="${itemName}/></a>
            <div class="itemContent">
                <h3>${itemName}</h3>
            </div>
        </div>
    </div>`;
return walmartSearchResults;
}

function renderPetProfile(pet) {
    return new Promise((resolve) => {
    // address check
    let shelterAddress1 = pet.contact.address1.$t;
    if (shelterAddress1 === undefined) {
        shelterAddress1 = "No address available";
    }  
    
    let shelterAddress2 = pet.contact.address2.$t;
    if (shelterAddress2 === undefined) {
        shelterAddress2 = " ";
    }    

    const shelterNameId = pet.shelterId.$t;
    const profileBreed = pet.breeds.breed;

    // status check
    const shotCheck = pet.options.option;
    console.log(shotCheck);
    let shotStatus = " ";
    let spayNeuterStatus = " ";
    if (shotCheck === undefined) {
        console.log("noInfo");
        shotStatus = "information not provided";
        spayNeuterStatus = "information not provided";
    }
    else if (shotCheck.constructor !== Array) {
        shotStatus = pet.options.option.$t;
        spayNeuterStatus = "not provided";
    }
    else if (shotCheck !== undefined) {
        spayNeuterStatus = pet.options.option[0].$t;
        shotStatus = pet.options.option[1].$t;
        if (shotStatus === "hasShots") {
        shotStatus = "has shots";
        }
    }
   

    let shelterEmail = pet.contact.email.$t;
    if (shelterEmail === undefined) {
        shelterEmail = "No email address provided";
    }

    // story check
    let dogStory = pet.description.$t;
    if (dogStory === undefined) {
        dogStory = "Contact shelter for more information";
    }
    if (dogStory === "Happiness Happens at the Humane Society of El Paso!") {
        dogStory = "Happiness Happens at the Humane Society of El Paso! Contact shelter for more information."
    }
    
    // img check
    let dogProfileImg = pet.media;
    console.log(dogProfileImg);
        
        if (Object.keys(dogProfileImg).length === 0 && dogProfileImg.constructor === Object) {
            dogProfileImg = 'data:image/png;base64,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';
        }
        else {
            if(pet.media.photos.photo.length > 6){
                dogProfileImg = pet.media.photos.photo[7].$t;
            }
            else if(pet.media.photos.photo.length > 2){
                dogProfileImg = pet.media.photos.photo[3].$t;
            }
            else{
                dogProfileImg = pet.media.photos.photo[0].$t;
            }
        }

        getShelterById(shelterNameId, function(data){
        let shelterNameProfile = data.petfinder.shelter.name.$t;
            if (shelterNameProfile === undefined) {
                shelterNameProfile = " ";
            }

        const petProfile = `
            <div tabIndex="1" id="profile" class="col-8">
            <h1>${pet.name.$t}</h1> 
            <h3>${extractBreeds(profileBreed)}</h3>
            <p>Spay/Neuter Status: ${spayNeuterStatus}</p>
            <p>Shot Status: ${shotStatus}</p>
            <img id="profileImg" src="${dogProfileImg}" alt="dogName">
            <h2>Story</h2>
            <p>${dogStory}</p>
            </div>
            <div tabIndex="1" class="col-3mid" id="contactInfo">
            <h2>Contact Info</h2>
            <p>${shelterNameProfile}</p>
            <p>Phone: ${pet.contact.phone.$t}</p>
            <p>Address: ${shelterAddress1} ${shelterAddress2}</p>
            <p>City: ${pet.contact.city.$t}</p>
            <p>State: ${pet.contact.state.$t}</p>
            <p>Zip Code: ${pet.contact.zip.$t}</p>
            <p>Email: ${shelterEmail}</p>
            </div>`;
        resolve(petProfile);
        });
    });
}



function displayBreedList (data) {
    // console.log(data); // Entire json result
    const breedList = data.petfinder.breeds.breed.map((breed, index) => renderBreedList(breed,index));
    $("#breedList").html(breedList);
}

function registerHandlers() {
    // Login to home page
    $('.login').on('click', '#login', function() {
        window.location = 'home.html';
    });

    // getDogBreed and getZipCode
    $('.petSearch').submit(event => {
        event.preventDefault();
        const queryBreed = $(event.currentTarget).find('#breedList');
        const breed = $('#breedList option:selected').text();
        console.log(breed);
        const queryZip = $(event.currentTarget).find('#zipCode');
        const zipCode = queryZip.val();
        // clear out the input
        queryBreed.val("");
        queryZip.val("");
        

        localStorage.setItem('petZip', zipCode);
        localStorage.setItem('petBreed', breed);
        localStorage.setItem('lastPage', 'home.html');
        window.location = 'pet.html';
    });
    
    // getShelterZipCode
    $('.shelterSearch').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('#zipCode');
        const shelterZipCode = queryTarget.val();
        // clear out the input
        queryTarget.val("");

        localStorage.setItem('shelterZip', shelterZipCode);
        window.location = 'shelter.html';
    });

    // search for pet products
    $('.walmart').submit(event => {
        event.preventDefault();
        const item = $(event.currentTarget).find('#walMart');
        const itemSearch = item.val();
        // clear out the input
        item.val("");
        localStorage.setItem('itemSearch', itemSearch);
        window.location = 'walmartSearch.html';
    });

    // Go to pet profile page
    $('.dogSearchResults').on('click', '.profile-image', function() {
        const profileId = $(this).parent().attr('id');
        localStorage.setItem('lastPage', 'pet.html');
        localStorage.setItem('profileId', profileId);
        window.location = 'profile.html';
    });

    // Pet profile page from shelter dog search
    $('.shelterDogSearchResults').on('click', '.profile-image', function() {
        const shelterDogProfileId = $(this).parent().attr('id');
        localStorage.setItem('lastPage', 'getPetsAtShelter.html');
        localStorage.setItem('shelterDogProfileId', shelterDogProfileId);
        window.location = 'profile.html';
    });

    // Display pets available for a shelter
    $('.shelterSearchResults').on('click', '.shelterProfileImage', function() {
        const shelterPageId = $(this).parent().attr('id');
        localStorage.setItem('lastPage', 'shelter.html');
        localStorage.setItem('shelterPageId', shelterPageId);
        window.location = 'getPetsAtShelter.html';
    });

    $(".walmartSearch").on("click", "#next", function() {
        const itemGet = localStorage.getItem('itemSearch');
        console.log(itemGet);
        getWalmartSearchResults(itemGet, displayWalmartSearchResults, 'next');
    });

    $(".walmartSearch").on("click", "#prev", function() {
        const itemGet = localStorage.getItem('itemSearch');
        console.log(itemGet);
        getWalmartSearchResults(itemGet, displayWalmartSearchResults, 'prev');
    });

    // Keyboard commands
    $(".shelterDogSearchResults").on("keyup", ".profile-image", function(event) {
        if (event.keyCode === 13) {
        $(this).click();
        }
    });

    $(".dogSearchResults").on("keyup", ".profile-image", function(event) {
        if (event.keyCode === 13) {
          $(this).click();
        }
    });
    
    $(".shelterSearchResults").on("keyup", ".shelterProfileImage", function(event) {
        if (event.keyCode === 13) {
          $(this).click();
        }
    });
}

// AutoComplete Script

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }



$(document).ready(function(){
    registerHandlers();
    getBreedList(displayBreedList);
    autocomplete(document.getElementById("myInput"), breedArray);
}); 






