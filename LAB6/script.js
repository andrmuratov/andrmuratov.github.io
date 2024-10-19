/* global document */

document.getElementById("service-form").addEventListener("change", function () {
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    const serviceType = document.querySelector(
        "input[name='service-type']:checked"
    ).value;
    let totalPrice = 0;

    const servicePrices = {
        cleaning: 500,
        computersetup: 1200,
        plumbing: 1500
    };

    totalPrice = servicePrices[serviceType] * quantity;

    const optionsContainer = document.getElementById("options-container");
    const propertyContainer = document.getElementById("property-container");

    if (serviceType === "cleaning") {
        optionsContainer.style.display = "none";
        propertyContainer.style.display = "none";
    } else if (serviceType === "computersetup") {
        optionsContainer.style.display = "block";
        propertyContainer.style.display = "none";
    } else if (serviceType === "plumbing") {
        optionsContainer.style.display = "none";
        propertyContainer.style.display = "block";
    }

    if (serviceType === "computersetup") {
        const selectedOption = document.getElementById("service-options").value;
        if (selectedOption === "premium") {
            totalPrice += 300;
        }
    }

    if (
        serviceType === "plumbing" &&
        document.getElementById("service-property").checked
    ) {
        totalPrice += 200;
    }

    document.getElementById("total-price").textContent = totalPrice;
});
