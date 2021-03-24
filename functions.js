
var array_prices_annuary = [{
    id: 0,
    price: 500,
    duration: 'Per one year'

}, {
    id: 1,
    price: 300,
    duration: 'Per 3 years'

}, {
    id: 2,
    price: 800,
    duration: 'Per 5 years'

},]

var array_prices_monthly = [{
    id: 0,
    price: 11,
    duration: 'Per day'

}, {
    id: 1,
  
    price: 41,
    duration: 'Per month'

}, {
    id: 2,
    price: 100,
    duration: 'Per year'

},
];

const botonesCambiarPrecio = document.querySelectorAll('button.changePrice');
botonesCambiarPrecio.forEach(botton => botton.addEventListener('click', function (e) {
    var id = e.target.id;
    console.log(id)
    if (id === "btn-annuary") {
        change_plans_annuary()
    } else if (id === "btn-Mensual") {

        changePlansMonthly()
    }
}))


function changePlansMonthly() {
    document.getElementById("price-basic").innerHTML = array_prices_monthly[0].price;
    document.getElementById("price-popular").innerHTML = array_prices_monthly[1].price;
    document.getElementById("price-professional").innerHTML = array_prices_monthly[2].price;
    document.getElementById("duration_basic").innerHTML = array_prices_monthly[2].duration;
  
}

function change_plans_annuary() {
    console.log(document.querySelectorAll('span#duration_basic'))
    document.getElementById("price-basic").innerText = "$" + array_prices_annuary[0].price;
    document.getElementById("price-popular").innerText = array_prices_annuary[1].price;
    document.getElementById("price-professional").innerText = array_prices_annuary[2].price;
    
}
document.getElementById("duration-professional").innerHTML = array_prices_monthly[2].duration;