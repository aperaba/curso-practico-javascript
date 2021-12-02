const precioOriginal= 120;
const descuento = 19;

const coupons = [
    "25%",
    "30%",
    "45%",
];

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;


function calcularPrecioCOnDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonDiscount()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioCOnDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: €" + precioConDescuento;
}

const verificationCupon = function () {
    const cupons = [25, 35, 45];
    const inputCupon = document.getElementById("InputCoupon");
    const valueCupon = parseInt(inputCupon.value);
    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else {
        return 0
    }
}


function onClickButtonDiscountCoupon()
{
    const priceInput = document.getElementById("InputPriceCupon");
    const priceValue = priceInput.value;    
    const verificationCupons = verificationCupon();
    const discountCupon = verificationCupons;
    const priceWithDiscount = calcularPrecioCOnDescuento(priceValue, discountCupon);
    console.log(priceInput.value);

    const displayDiscount = document.getElementById("displayDiscount");
    displayDiscount.innerText = "El precio con descuento son: €" + priceWithDiscount;
}