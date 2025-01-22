let amount1;
let amount2;
let amount3;

function calculateTotalAmount(){
    amount1 = parseFloat(document.getElementById("amount1").value);
    amount2 = parseFloat(document.getElementById("amount2").value);
    amount3 = parseFloat(document.getElementById("amount3").value);

    if(isNaN(amount1))
    {
        amount1 = 0;
    }
    if(isNaN(amount2))
    {
        amount2= 0;
    }
    if(isNaN(amount3))
    {
        amount3= 0;
    }

    let totalAmount = amount1 + amount2 + amount3;

    document.getElementById("totalAmount").innerText= `The total amount is :${totalAmount}`;
}