window.addEventListener('load', () => {
    const total = localStorage.getItem("TOTAL");
    document.getElementById("total").innerHTML = "IDR " + total;

})

function goToThank()
{
    window.location.href = "../Thanks Page/thanks.html";
}