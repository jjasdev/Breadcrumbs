/**
 * @fileoverview Indicador de progreso de los pasos a seguir en carritos de la compra online
 * @version 0.1
 * @author Juanjo Alonso Sánchez <jj.alonso@esla.com>
 * @copyright cgb@esla.com
 */
/**
  * Establece el año en el footer
  * @returns {void}
  */
 function establecerYear(){ 
    const today = new Date();
    const nodoYear = document.querySelector(".footer__copy-year"); 
    nodoYear.innerHTML = today.getFullYear();
}
/**
  * Gestionar migas de pan
  * @returns {void}
  */
 function gestionarBreadcrumbs(){ 
     //Margen aplicado al scroll en los estilos de la página-> scroll-padding-top: 5rem que son 80px
    let marginScroll = 80;
    //Obtenemos la posición de cada elemento teniendo en cuenta el margen aplicado anteriormente             
    let posicionCarrito = anclaCarrito.offsetTop - marginScroll;
    let posicionPago = anclaPago.offsetTop - marginScroll;
    let posicionConfirmacion = anclaConfirmacion.offsetTop - marginScroll;
    //Ponemos sombra al menú
    if (window.scrollY > posicionMenuPasos) {
        menuPasos.classList.add('breadcrumbs__steps--shadow');
    } else {
        menuPasos.classList.remove('breadcrumbs__steps--shadow');
    }
    //Paso 1-> Carrito
    if (window.scrollY > posicionCarrito) {
        pasoCarrito.classList.remove('breadcrumbs__steps--disabled');
        pasoCarrito.classList.add('breadcrumbs__steps--active');
        pasoCarrito.parentElement.previousElementSibling.classList.add('breadcrumbs__steps-number--active');

    } else {
        pasoCarrito.classList.add('breadcrumbs__steps--disabled');
        pasoCarrito.classList.remove('breadcrumbs__steps--active');
        pasoCarrito.parentElement.previousElementSibling.classList.remove('breadcrumbs__steps-number--active');
    } 
    //Paso 2-> Pago
    if (window.scrollY > posicionPago) {
        pasoPago.classList.remove('breadcrumbs__steps--disabled');
        pasoPago.classList.add('breadcrumbs__steps--active');
        pasoPago.parentElement.previousElementSibling.classList.add('breadcrumbs__steps-number--active');
        pasoPago.parentElement.previousElementSibling.previousElementSibling.classList.add('breadcrumbs__steps--active');

    } else {
        pasoPago.classList.add('breadcrumbs__steps--disabled');
        pasoPago.classList.remove('breadcrumbs__steps--active');
        pasoPago.parentElement.previousElementSibling.classList.remove('breadcrumbs__steps-number--active');
        pasoPago.parentElement.previousElementSibling.previousElementSibling.classList.remove('breadcrumbs__steps--active');
    }        
    //Paso 3-> Confirmación
    if (window.scrollY > posicionConfirmacion) {
        pasoConfirmacion.classList.remove('breadcrumbs__steps--disabled');
        pasoConfirmacion.classList.add('breadcrumbs__steps--active');
        pasoConfirmacion.parentElement.previousElementSibling.classList.add('breadcrumbs__steps-number--active');
        pasoConfirmacion.parentElement.previousElementSibling.previousElementSibling.classList.add('breadcrumbs__steps--active');

    } else {
        pasoConfirmacion.classList.add('breadcrumbs__steps--disabled');
        pasoConfirmacion.classList.remove('breadcrumbs__steps--active');
        pasoConfirmacion.parentElement.previousElementSibling.classList.remove('breadcrumbs__steps-number--active');
        pasoConfirmacion.parentElement.previousElementSibling.previousElementSibling.classList.remove('breadcrumbs__steps--active');
    }
}

//CÓDIGO

//Gestionar migas de pan
const menuPasos = document.querySelector(".breadcrumbs__steps"); 
const pasoCarrito = document.querySelector(".breadcrumbs__steps-carrito"); 
const pasoPago = document.querySelector(".breadcrumbs__steps-pago"); 
const pasoConfirmacion = document.querySelector(".breadcrumbs__steps-confirmacion"); 
const anclaCarrito = document.querySelector("#carrito"); 
const anclaPago = document.querySelector("#pago"); 
const anclaConfirmacion = document.querySelector("#confirmacion"); 
let posicionMenuPasos = menuPasos.clientHeight;
window.onscroll = ()=> {        
    gestionarBreadcrumbs();
};
//Pinta el año
establecerYear();