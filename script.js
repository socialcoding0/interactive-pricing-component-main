console.log("src");

const range = document.querySelector("#range-input");
const dolar = document.querySelector("#dolar");
const pageviews = document.querySelector("#pageviews");
const toggleBtn = document.querySelector("#toggle");

let total;


toggleBtn.addEventListener("click", function () {
    toggleBtn.classList.toggle("toggle-active");

    if (toggleBtn.classList.contains("toggle-active")) {

        yearlyDiscount();
    }
    else {
        monthlyBill(range.value);
    }
});


function monthlyBill(val) {

    if (val == 0) {

        pageviews.textContent = "10K pageviews";
        dolar.textContent = "$8.00";
        range.classList.add("input-0");
        range.classList.remove("input-25");
        range.classList.remove("input-50");
        range.classList.remove("input-75");
        range.classList.remove("input-100");

    }
    else if (val == 25) {

        pageviews.textContent = "50K pageviews";
        dolar.textContent = "$12.00";
        range.classList.add("input-25");
        range.classList.remove("input-0");
        range.classList.remove("input-50");
        range.classList.remove("input-75");
        range.classList.remove("input-100");
    }
    else if (val == 50) {

        pageviews.textContent = "100K pageviews";
        dolar.textContent = "$16.00";
        range.classList.add("input-50");
        range.classList.remove("input-25");
        range.classList.remove("input-0");
        range.classList.remove("input-75");
        range.classList.remove("input-100");
    }
    else if (val == 75) {

        pageviews.textContent = "500K pageviews";
        dolar.textContent = "$24.00";
        range.classList.add("input-75");
        range.classList.remove("input-25");
        range.classList.remove("input-50");
        range.classList.remove("input-0");
        range.classList.remove("input-100");
    }
    else if (val == 100) {

        pageviews.textContent = "1M pageviews";
        dolar.textContent = "$36.00";
        range.classList.add("input-100");
        range.classList.remove("input-25");
        range.classList.remove("input-50");
        range.classList.remove("input-75");
        range.classList.remove("input-0");
    }
}


function yearlyDiscount() {
    let getDolar = dolar.textContent.substring(1);
    let yearDiscount = getDolar * 25 / 100;
    total = (getDolar - yearDiscount).toFixed(2);
    dolar.textContent = `$${total}`;

}




range.addEventListener("input", function (e) {
    let val = e.target.value;

    if (toggleBtn.classList.contains("toggle-active")) {

        monthlyBill(val);
        yearlyDiscount();
    }
    else {
        monthlyBill(val);
    }
});
