const id = [
    "counter1",
    "counter2",
    "counter3",
    "counter4",
    "counter5",
    "counter6",
    "counter7"
];

const price = [
    22000,
    10000,
    15000,
    8000,
    10000,
    15000,
    20000
];

let len = 7;
let sum = 0;

for(let i = 0; i < len; ++i)
{
    document.getElementById(id[i]).innerHTML = 0;
}

function plus(n)
{
    const counter = document.getElementById(id[n]);
    let counterValue = counter.value;
    counter.value = ++counterValue;

    // count the price
    sum += price[n];

    // update total price
    document.getElementById("price").innerHTML = "IDR " + sum;
}

function minus(n)
{
    const counter = document.getElementById(id[n]);
    let counterValue = counter.value;
    if(counter.value > 0)
    {
        counter.value = --counterValue;
        // count the price
        sum -= price[n];

        // update total price
        document.getElementById("price").innerHTML = "IDR " + sum;
    }
}

function goToCheckout()
{
    if(sum>0)
    {
        // reset all quantity to 0
        for(let i = 0; i < len; ++i)
        {
            const counter = document.getElementById(id[i]);
            counter.value = 0;
        }

        // store value of sum to local storage
        localStorage.setItem("TOTAL",sum);
        window.location.href = "../Checkout Page/checkout.html";
        return;

    }
}
