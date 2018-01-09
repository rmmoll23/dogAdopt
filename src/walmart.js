function displayWalmartSearchResults(data) {
    console.log(data.items);
    console.log(data.items[0].name);
    const walmartSearchResults = data.items.map((items, index) => renderWalmartSearchResults(items,index));
    $(".itemReturn").html(walmartSearchResults);
    if ($(".itemReturn").html() == "") {
        console.log("hello");
        const noItems = `<p class="noDogs">There are no returned results for your search in the dog category</p>`;
        $('.itemReturn').html(noItems);
    }
}

$(document).ready(function() {
    console.log('walmart page Loaded');
    const itemValue = localStorage.getItem('itemSearch');
    console.log(itemValue);
    getWalmartSearchResults(itemValue, displayWalmartSearchResults); 
}); 