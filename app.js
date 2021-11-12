document.addEventListener('DOMContentLoaded', function() {
    startApp();
});

function startApp() {
    changeColor();

}

function changeColor() {
    const rojo = document.querySelector('#rojo');
    const azul = document.querySelector('#azul');
    const naranja = document.querySelector('#naranja');

    azul.addEventListener('click', function() {
        const circle = document.querySelector('.card');

        circle.classList.add('background-azul');
        circle.classList.remove('background-naranja');

        const playero = document.querySelector('.container .card .cardimg img');

        playero.src = 'https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Air-Jordan-1-Retro-High-University-Blue-555088-134-1.png?v=1613473514';

        const btnCesta = document.querySelector('.container .card .cardcontent a');

        btnCesta.classList.add('azul');
        btnCesta.classList.remove('naranja');

        const talla = document.querySelectorAll('.talla');

        talla.forEach(item => {
            item.classList.add('azul');
            item.classList.remove('naranja');
        });

        
    });

    naranja.addEventListener('click', function() {
        const circle = document.querySelector('.card');

        circle.classList.add('background-naranja');
        circle.classList.remove('background-azul');

        const playero = document.querySelector('.container .card .cardimg img');

        playero.src = 'https://cdn.shopify.com/s/files/1/0400/4637/products/AirJordan1RetroHighOG_ElectroOrange.png?v=1626729870';

        const btnCesta = document.querySelector('.container .card .cardcontent a');

        btnCesta.classList.remove('azul');
        btnCesta.classList.add('naranja');

        const talla = document.querySelectorAll('.talla');

        talla.forEach(item => {
            item.classList.remove('azul');
            item.classList.add('naranja');
        });
    });

    rojo.addEventListener('click', function() {
        const circle = document.querySelector('.card');

        circle.classList.remove('background-azul');
        circle.classList.remove('background-naranja');

        const playero = document.querySelector('.container .card .cardimg img');

        playero.src = 'https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Air-Jordan-1-Retro-High-Spider-Man-1.png?v=1545053046';

        const btnCesta = document.querySelector('.container .card .cardcontent a');

        btnCesta.classList.remove('azul');
        btnCesta.classList.remove('naranja');

        const talla = document.querySelectorAll('.talla');

        talla.forEach(item => {
            item.classList.remove('azul');
            item.classList.remove('naranja');
        });
    });
}