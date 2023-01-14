
/*onClick event*/

function calcularTotal (){
const price = 700;
let span1 = document.querySelector("#phar1_total");
let span2 = document.querySelector("#phar1_amount");
let laptop = document.querySelector("#quanty");
let cantidadLaptop = laptop.value;
let total = cantidadLaptop * price;
    span2.innerHTML =cantidadLaptop;
    span1.innerHTML = total;
}

/*onChange event*/
    
function color(){
    let selection = document.querySelector("#colorss");
    let circulo =document.getElementById("circule1");
    let colorSelection = selection.value;
    circulo.style.backgroundColor= colorSelection;
}