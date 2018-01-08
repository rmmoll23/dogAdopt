function displayWalmartSearchResults(data) {
    console.log(data.items);
    console.log(data.items[0].name);
    const walmartSearchResults = data.items.map((items, index) => renderWalmartSearchResults(items,index));
    $(".itemReturn").html(walmartSearchResults);
}

$(document).ready(function() {
    console.log('walmart page Loaded');
    const itemValue = localStorage.getItem('itemSearch');
    console.log(itemValue);
    getWalmartSearchResults(itemValue, displayWalmartSearchResults); 
}); 