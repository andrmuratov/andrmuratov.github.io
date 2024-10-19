document.getElementById('service-form').addEventListener('change', function() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const serviceType = document.querySelector('input[name="service-type"]:checked').value;
    let totalPrice = 0;

    // Стоимость базовых услуг для каждого типа
    const servicePrices = {
        cleaning: 500,        // Клининговая услуга (без опций и свойств)
        computersetup: 1200,  // Настройка компьютера (с опциями)
        plumbing: 1500        // Сантехнические работы (с дополнительным свойством)
    };

    totalPrice = servicePrices[serviceType] * quantity;

    const optionsContainer = document.getElementById('options-container');
    const propertyContainer = document.getElementById('property-container');
    
    // Логика отображения опций и свойств в зависимости от типа услуги
    if (serviceType === 'cleaning') {
        // Клининговая услуга: нет опций и свойств
        optionsContainer.style.display = 'none';
        propertyContainer.style.display = 'none';
    } else if (serviceType === 'computersetup') {
        // Настройка компьютера: есть только опции
        optionsContainer.style.display = 'block';
        propertyContainer.style.display = 'none';
    } else if (serviceType === 'plumbing') {
        // Сантехнические работы: есть только свойство
        optionsContainer.style.display = 'none';
        propertyContainer.style.display = 'block';
    }

    // Добавление стоимости опций для "Настройки компьютера"
    if (serviceType === 'computersetup') {
        const selectedOption = document.getElementById('service-options').value;
        if (selectedOption === 'premium') {
            totalPrice += 300;  // Дополнительная стоимость премиум-опции
        }
    }

    // Добавление стоимости свойства для "Сантехнических работ"
    if (serviceType === 'plumbing' && document.getElementById('service-property').checked) {
        totalPrice += 200;  // Стоимость дополнительного свойства
    }

    // Обновление итоговой цены
    document.getElementById('total-price').textContent = totalPrice;
});
