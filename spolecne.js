// Hamburger menu-tlacitko
const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');

// Kliknuti
menuTlacitko.addEventListener ('click', ()=> {
    // trida show
    menuPolozky.classList.toggle('show');
    // zmena ikony
    if (menuPolozky.classList.contains('show')) {
        menuTlacitko.innerHTML ='<i class="fas fa-xmark"></i>';
     } else {
        menuTlacitko.innerHTML= '<i class="fas fa-bars"></i>'
    }
})
