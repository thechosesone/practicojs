console.log(`camburcito`);

var inputValue = 'alberto';

const initialPrice = 500;

var discount = 0;

var totalPrice = initialPrice - ((initialPrice * discount) / 100);

const couponCodes = [
    {name: 'francisco', discount: 50},
    {name: 'bernardo', discount: 80},
    {name: 'joseph', discount: 95},
    {name: 'gioacchino', discount: 60},
];




//setting initial values for price and discount

let discountText = document.getElementById('Discount');
discountText.innerText = `${discount}%`;

let priceText = document.getElementById('InitialPrice');
priceText.innerText = `$${initialPrice}`;

let totalText = document.getElementById('Total');
totalText.innerText = `$${totalPrice}`;

const validateCoupon = () => {

let input = document.getElementById('CouponInput');
let inputValue = input.value;

const validCoupon = couponCodes.find(item => item.name === inputValue);
const confirmation = document.getElementById('Confirmation');

//color changes for validation text

const confirmationText = document.getElementById('Confirmation');

const redConfirmation = () => {confirmationText.classList.remove('greentext');
confirmationText.classList.add('redtext')}

const greenConfirmation = () => {confirmationText.classList.remove('redtext');
confirmationText.classList.add('greentext')}



if (!validCoupon) {

    redConfirmation();
    
    confirmation.innerText = `El cupón ${inputValue} no es válido`;
    discount = 0;
    discountText.innerText = `${discount}%`;

    totalPrice = initialPrice - ((initialPrice * discount) / 100);
    totalText.innerText = `$${totalPrice}`;

    document.getElementById



} else {

    greenConfirmation();

    confirmation.innerText = `El cupón ${inputValue} es válido (:`;
    discount = validCoupon.discount;

    discountText.innerText = `${discount}%`;

    totalPrice = initialPrice - ((initialPrice * discount) / 100);
    totalText.innerText = `$${totalPrice}`;

}
}





