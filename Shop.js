class onlineKioskas {
    constructor(name) {
        this.list = [];
        this.companyName = '';
    }
    intro() {
        console.log(`Hi, we are "Meskiuko kioskas".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`);
    }
    addItem(item, price) {
        let newItem = { item, price };
        this.price = price / 100;
        this.list.push(newItem)
        console.log(newItem);
        console.log('"Meskiuko kioskas" sells ${obuolys} for 1.30 EUR now!');
    }
}
module.exports = onlineKioskas;