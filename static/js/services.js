var totalPrice;
// storing current price as variable
var currentPrice = 89;
var inst = "Guitar1";
var teacherPrice = 849;

var priceString = "Rs " + currentPrice + "/day";

var amtBox = document.getElementById("totAmtBox");
amtBox.style.display = "none";
amtBox.value = currentPrice + teacherPrice;

var total = document.getElementById("totAmt");
var instru = document.getElementById("instru");
var TotalAmount;

instru.innerHTML = inst;

var instruInputBox = document.getElementById("instruInput");
instruInputBox.value = instru.innerHTML;
instruInputBox.style.display = "none";

total.innerHTML =
    document.getElementById("priceg1").innerHTML +
    " + " +
    teacherPrice +
    " = " +
    "Rs " +
    (currentPrice + teacherPrice);

var teacherChoiceYes = document.getElementById("yes");
var teacherChoiceNo = document.getElementById("no");

var planDetails = document.getElementById("plan");
planDetails.innerHTML = "You have selected " + priceString + " plan";


document.getElementById("dm1").onchange = function () {
    changeprice();
};

function changeprice() {
    var x = document.getElementById("dm1").value;

    if (x == "daily") {
        currentPrice = 89;
        priceString = "Rs " + currentPrice + "/day";
    }
    if (x == "weekly") {
        currentPrice = 319;
        priceString = "Rs " + currentPrice + "/week";
    }
    if (x == "monthly") {
        currentPrice = 449;
        priceString = "Rs " + currentPrice + "/month";
    }
    document.getElementById("priceg1").innerHTML = "Rs " + currentPrice;

    if (teacherChoiceYes.checked) {
        teacherPrice = 849;
        total.innerHTML =
            document.getElementById("priceg1").innerHTML +
            " + " +
            teacherPrice +
            " = " +
            "Rs " +
            (currentPrice + teacherPrice);
    } else {
        teacherPrice = "";
        total.innerHTML = document.getElementById("priceg1").innerHTML;
    }
    totalPrice = teacherPrice + currentPrice;
    amtBox.value = totalPrice;
    console.log(amtBox);
    planDetails.innerHTML = "You have selected " + priceString + " plan";
}

teacherChoiceYes.onchange = function () {
    changeprice();
};

teacherChoiceNo.onchange = function () {
    changeprice();
};

document.getElementById('btncheck').addEventListener('click', function () {
    window.location.href = '/feed';
})