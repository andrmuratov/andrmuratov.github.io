document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('order-form');
    const result = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const quantity = document.getElementById('quantity').value;
        const productPrice = parseInt(document.getElementById('product').value);

        // Используем функцию match для проверки
        if (!isQuantityValid(quantity)) {
            result.textContent = 'Пожалуйста, введите корректное количество (целое число).';
            return;
        }

        const totalCost = parseInt(quantity) * productPrice;
        result.textContent = `Итоговая стоимость: ${totalCost} руб.`;
    });
});
