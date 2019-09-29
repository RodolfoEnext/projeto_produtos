var modal_aging = document.getElementById("modal_aging");
var info_modal = document.querySelector('.info_modal');
var prod = document.getElementsByClassName("prod");
var ingredientes = document.getElementById("modal_ingredients");
var nav_response = document.querySelector('.nav_response');
var nav_button_config = document.getElementsByClassName("nav_button_config")
var nav_button_close = document.querySelector(".nav_button_close");
var nav_button_open = document.querySelector(".nav_button_open");
var logo = document.querySelector('.logo');
var header_logos = document.querySelector('.header_logos');
var search = document.querySelector('.search');
var main = document.querySelector('main');
var footer = document.querySelector('footer');

var cont = 0;

console.log(nav_button_config.length);

nav_button_open.addEventListener('click', function(event) {
    abrirMenuMobile();
})

nav_button_close.addEventListener('click', function(event) {
    fecharMenuMobile();
})

abrirMenuMobile = () => {
    nav_response.classList.add('volta');
    nav_button_open.classList.add('display');
    nav_button_close.classList.remove('display');
    logo.style.display = 'none';
    header_logos.style.display = 'none';
    search.style.display = 'flex';
    main.style.display = 'none';
    footer.style.display = 'none';

    // search.style.padding = '5%';


}

fecharMenuMobile = () => {
    // nav_button_open.classList.add('display');
    nav_response.classList.remove('volta');
    nav_button_open.classList.remove('display');
    nav_button_close.classList.add('display');
    logo.style.display = '';
    header_logos.style.display = 'flex';
    search.style.display = 'none';
    main.style.display = 'flex';
    footer.style.display = 'flex';

}

// fecharMenuMobile = () => {
//     nav_button_open.classList.add('display');
//     nav_response.classList.remove('volta');


//     console.log(nav_button_close);
// }


/*    FOR SOBRE CLASS DOS PRODUTOS     */
for (let i = 0; i < prod.length; i++) {
    prod[i].addEventListener('click', function() {
        cont = i + 1;
        mostrar(cont);
        lerApi(cont);
    });
}

/*    ABRIR POPUP     */
function mostrar(cont) {
    modal_aging.classList.add('abrir');
}

/*    FECHAR POPUP     */
function fechar(cont) {
    modal_aging.classList.remove('abrir');
    ingredientes.innerHTML = '';
}


/*      AJAX       */
function lerApi(cont) {
    var destino = "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json";
    var xhttp = new XMLHttpRequest();
    var msg = '';
    var produtos;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var produtos = JSON.parse(this.responseText);
            console.log(produtos.potions[1].ingredients);

            var name = document.getElementById("modal_name");
            var efeitos = document.getElementById("modal_effect");
            var price = document.getElementById("modal_price");
            var image = document.getElementById("modal_image");


            name.innerHTML = `${produtos.potions[cont].name}`;
            efeitos.innerHTML = `${produtos.potions[cont].effect}`;
            price.innerHTML = `$${produtos.potions[cont].price}`;
            image.src = `../projeto_final/images/products/${produtos.potions[cont].image}`;


            for (let j = 0; j < produtos.potions[cont].ingredients.length; j++) {
                var ul = document.getElementById('modal_ingredients');
                var li = document.createElement('li');
                ul.appendChild(li);
                li.innerHTML = `${produtos.potions[cont].ingredients[j]}`;
            }
        }
    }
    xhttp.open("GET", destino, true);
    xhttp.send();
}