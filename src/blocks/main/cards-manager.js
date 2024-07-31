import CATALOG from '../../catalog/catalog.js';

CATALOG.forEach((element) => {
    let card = document.createElement('span');
    card.className = 'main__product-card';

    let cardImage = document.createElement('img');
    cardImage.className = 'main__product-card-image';
    cardImage.setAttribute('src', element.image);
    
    let cardName = document.createElement('p');
    cardName.className = 'main__product-card-name';
    cardName.innerText = element.name;
    
    let hoverButton = document.createElement('button')
    hoverButton.className ='main__details-button'
    hoverButton.innerText = 'Подробнее';

    card.append(cardImage)
    card.append(cardName)
    card.append(hoverButton);


    if (element.discountStatus == 'Yes') {
        let discountIndicator = document.createElement('p');
        discountIndicator.className = 'main__discount_indicator';
        discountIndicator.innerText = 'Акция';

        card.append(discountIndicator)
    }

    if (element.discountStatus == 'Yes') {
        let priceWithDiscount = document.createElement('span')
        priceWithDiscount.className = 'main__price-with-discount'
        priceWithDiscount.innerText = element.priceWithDiscount;

        let priceWithoutDiscount = document.createElement('span')
        priceWithoutDiscount.className = 'main__price-without-discount'
        priceWithoutDiscount.innerText = element.price;

        card.append(priceWithDiscount)
        card.append(priceWithoutDiscount)
    } else {
        let price = document.createElement('span')
        price.className = 'main__price'
        price.innerText = element.price;

        card.append(price)
    }
    // ОСТАЛОСЬ: 
    //     1. СДЕЛАТЬ БАННЕР АКЦИИ (ЧЕРНЫЙ СВЕРХУ)
    //     2. СДЕЛАТЬ КНОПКУ ПОДРОБНЕЕ (ОРАНЖЕВАЯ СНИЗУ)



    let cardCatalog = document.querySelector('.main__cards-wrapper');
    cardCatalog.append(card);
})