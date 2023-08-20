/****
 *   Here, 9 cards conveys same kind of handler function and data. since, the data
 *   between those cards shares the same aspects, we make that common format of 
 *   data as the following object. as well as the common functionallity inspired
 *   me to build a common decorator "clickHandlerProducer" function.
 *   
 *   obj = {
 *      name: 
 *      price:
 *   }
 */
function setNumToElement(whereToSet, num) {
    const element = document.getElementById(whereToSet);
    element.innerText = num;
}
function getNumFromElement(id) {
    const element = document.getElementById(id);
    const str = element.innerText;
    const num = +parseFloat(str).toFixed(2);
    return num;
}
function clickHandlerProducer(obj) {
    return function () {
        const cartList = document.getElementById("cartList");
        const sell200Btn = document.getElementById("sell200-btn");
        const purchaseBtn = document.getElementById("purchase-btn");
        //first step: dynamically adding li's
        const li = document.createElement("li");
        li.innerText = obj.name;
        cartList.appendChild(li);

        //second step: dynamically adding totalPrice 
        const price = getNumFromElement("priceId");
        const netPrice = obj.price + price;
        const unit = netPrice + " " + "TK"
        setNumToElement("priceId", unit);

        //third step: converts the "Make Purchase" button blur to visible 
        //when Total price > 0
        if (netPrice > 0) {
            purchaseBtn.style.opacity = 1;
            purchaseBtn.style.pointerEvents = "auto";
        }
        //fourth step: converts the coupon button blur to visible 
        //when totla price > 0
        if (netPrice > 200) {
            sell200Btn.style.opacity = 1;
            sell200Btn.style.pointerEvents = "auto";
        }
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

document.getElementById("sell200-btn").addEventListener("click", function (e) {
    const couponId = document.getElementById("couponId");
    if (couponId.value === "SELL200") {
        const price = getNumFromElement("priceId");
        const discount = (price * 20) / 100;
        setNumToElement("discountId", discount);
        const total = price - discount;
        setNumToElement("totalPriceId", total);
    }
})

function overlayMessageShow() {
    let blackOverlay = document.getElementById("overlayId");
    blackOverlay.style.display = "block";
    


   
}