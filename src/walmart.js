function displayWalmartSearchResults(data) {
    if (data.numItems === 0) {
        const noItems = `<p class="noDogs">There are no returned results for your search in the dog category</p>`;
        $('.itemReturn').html(noItems);
        $('#next').addClass("hidden");
    }
    else {
        const walmartSearchResults = data.items.map((items, index) => renderWalmartSearchResults(items,index));
        $(".itemReturn").html(walmartSearchResults);
        $('#next').removeClass("hidden");
    }
}

$(document).ready(function() {
    console.log('walmart page Loaded');
    const itemValue = localStorage.getItem('itemSearch');
    console.log(itemValue);
    getWalmartSearchResults(itemValue, displayWalmartSearchResults, 'load'); 
}); 