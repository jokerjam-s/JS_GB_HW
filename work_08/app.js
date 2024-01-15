import {
    Basket,
    BasketItem
} from "./basket.js";

'use strict';


let basket = new Basket();

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');
let basketInfo = document.querySelector("#basketInfo");
let basketCounter = document.querySelector("#basketCounter");
let basketButton = document.querySelector("#basket");
let basketItems = basketInfo.querySelector("#basketItems");


fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});


// отображение, обработка данных в корзине
let things = document.querySelectorAll('.featuredItem');

things.forEach(function (thing) {
    thing.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const name = thing.querySelector(".featuredName");
            const price = thing.querySelector(".featuredPrice");
            basket.addItem(new BasketItem(name.outerText, parseFloat(price.outerText.substring(1))));
            basketCounter.textContent = basket.counts;
        }
    })
});

/*
 Отображение информации из корзины
 */
basketButton.addEventListener("mouseover", function (ev) {
    basketItems.innerHTML = "";
    if (basketInfo.style.display === 'none') {
        basketInfo.style.display = 'block';
        const total = basketInfo.querySelector("#countThing");
        const cost = basketInfo.querySelector("#sumCost");

        total.textContent = basket.counts;
        cost.textContent = basket.cost;

        for (const item of basket.items) {
            basketItems.innerHTML += `<div>${item.name}</div><div>${item.count}</div><div>${item.price * item.count}</div>`;
        }
    }
});

basketButton.addEventListener("mouseout", function (e){
    basketInfo.style.display = 'none';
});


