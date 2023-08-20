/****
 *   obj = {
 *      name: 
 *      price:
 *   }
 * 
 * 
 * 
 */
function clickHandlerProducer(obj) {
    function setNumToElement(whereToSet, num, unit = "") {
        const element = document.getElementById(whereToSet);
        element.innerText = num + unit;
    }
    function getNumFromElement(id) {
        const element = document.getElementById(id);
        const str = element.innerText;
        const num = parseFloat(str).toFixed(2);
        return num;
    }
    return function () {
        const cartList = document.getElementById("cartList");
        const priceId = document.getElementById("priceId");
        

        //first step: dynamically adding li's
        const li = document.createElement("li");
        li.innerText = obj.name;
        cartList.appendChild(li);

        //second step: dynamically adding totalPrice 
        const price = getNumFromElement(priceId);
        const netPrice = obj.price + price;
        setNumToElement(priceId, netPrice, "TK");
    }
}

/***
 * Separation between handlerProducer and handler's.
 */

const item1 = clickHandlerProducer({
    name: "K. Accessories",
    price: 39.00
})
const item2 = clickHandlerProducer({
    name: "K. Accessories",
    price: 25.00
})
const item3 = clickHandlerProducer({
    name: "Home Cooker",
    price: 49.00
})
const item4 = clickHandlerProducer({
    name: "Sports Back Cap",
    price: 49.00
})
const item5 = clickHandlerProducer({
    name: "Full Jersey Set",
    price: 69.00
})
const item6 = clickHandlerProducer({
    name: "Sports cates",
    price: 169.00
})
const item7 = clickHandlerProducer({
    name: "Single Relax Chair",
    price: 185.00
})
const item8 = clickHandlerProducer({
    name: "Children play",
    price: 299.00
})
const item9 = clickHandlerProducer({
    name: "Flexible Sofa",
    price: 339.00
})