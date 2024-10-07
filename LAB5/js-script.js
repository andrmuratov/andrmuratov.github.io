/*global document, isQuantityValid */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("order-form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const quantity = document.getElementById("quantity").value;
        const productElement = document.getElementById("product");
        const productPrice = parseInt(productElement.value, 10);

        if (!isQuantityValid(quantity)) {
            result.textContent = "Введите корректное количество (целое число).";
            return;
        }

        const totalCost = parseInt(quantity, 10) * productPrice;
        result.textContent = `Итоговая стоимость: ${totalCost} руб.`;
        document.getElementById("quantity").value = "";
    });
});
