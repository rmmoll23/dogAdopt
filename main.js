// breed.list
const query = {
    key: '93fd0d1782907ee47a856e7d69a61895',
    animal: 'dog',
    format: JSON
}

// pet.find
const query = {
    key: '93fd0d1782907ee47a856e7d69a61895',
    breed: getDogBreed(),
    location: getZipCode(),
    output: 'full',
    format: JSON
}

// shelter.find
const query = {
    key: '93fd0d1782907ee47a856e7d69a61895',
    location: getZipCode(),
    format: JSON 
}


function getDogBreed() {

}

function getZipCode() {

}

<div class="col-4">
    <div class="profile">
        <img class="profile-image" src="https://tf-assets-prod.s3.amazonaws.com/tf-curric/WEB-DEV-001/2.6.3_challenge_responsive_layout/rey_square.png" />
        <div class="profile-content">
            <h3>Rey</h3>
            <p>Protagonist, from Jakku</p>
        </div>
    </div>
</div>