function isQuantityValid(quantity) {
    const quantityMatch = quantity.match(/^\d+$/); 
    return quantityMatch !== null;
}
