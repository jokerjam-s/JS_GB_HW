'use strict';

export class BasketItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.count = 1;
    }

    addCount(count) {
        this.count += count;
    }

    subCount(count) {
        this.count -= count;
        if (this.count < 0) {
            this.count = 0;
        }
    }
}

export class Basket {
    constructor() {
        this.counts = 0;
        this.cost = 0.0;
        this.items = [];
    }

    addItem(item: BasketItem) {
        const thing: BasketItem = this.items.find(thing => thing.name === item.name);

        if (thing === undefined) {
            this.items.push(item);
        } else {
            thing.count++;
        }
        this.counts++;
        this.cost += item.price;
    }
}