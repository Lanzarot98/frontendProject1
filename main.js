const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) { // si doy click y esta abierto el carrito, entonces lo del carrito se cierra
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside()
    desktopMenu.classList.toggle('inactive');
}

function toggleCarritoAside() { // lo que despliega el carrito
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); // es closed ya que si contiene la clase inactive es porque no aparece el mobile menu
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        //preguntar si el mobileMenu esta open, hay que cerrarlo
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive'); // entonces como el mobilemenu se cierra si hacemos click en el carrito
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive'); // es closed ya que si contiene la clase inactive es porque no aparece el mobile menu
    
    if (!isAsideClosed) {
        //preguntar si el mobileMenu esta open, hay que cerrarlo
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive'); //cada vez que se le de click ejecuta esta funcion que quita o pone la clase inactive
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive'); // cerrar carrito de compra
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive'); // abrir product detail
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'TV Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


function renderProducts(array) {
    for (product of array) { //accede a los nombres o como tal a la caracteristica
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
    

        const productImg = document.createElement('img');
       // productImg.classList.add('product-img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$'+ product.price;
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart); // figure va tener como hijo a la img que es el icono
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
        cardsContainer.appendChild(productCart);
    }
}

renderProducts(productList); // asi puedo insertar todo esa maquetacion dependiendo del objeto/array que le mande (argumento)


