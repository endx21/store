const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuList = document.querySelector(".menu");
const shoppingCar = document.querySelector("#shoppingCartContainer");
const shoppingIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");

const productDetailOpen = document.querySelector("#productDetail");
const productClose = document.querySelector(".product-detail-close");
const ImgDetail = document.querySelector("#description-product-img");
const showN = document.querySelector(".showN");
const showP = document.querySelector(".showP");
const showD = document.querySelector(".showD");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuList.addEventListener("click", toggleMobileMenu);
shoppingIcon.addEventListener("click", toggleShoppingCar);
productClose.addEventListener("click", close);



function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    shoppingCar.classList.add("inactive");
    productDetailOpen.classList.add("inactive");
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    shoppingCar.classList.add("inactive");
    productDetailOpen.classList.add("inactive");
}
function toggleShoppingCar(){
    shoppingCar.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailOpen.classList.add("inactive");
}
/*function open(){
    productDetailOpen.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    shoppingCar.classList.add("inactive");
    
    renderProduct(showAsideDescription());
}*/
function close(){
    productDetailOpen.classList.add("inactive");
}

/*Products cards */
const productList = [];
productList.push({
    imagen: "https://cdn.shopify.com/s/files/1/1320/2227/products/GlacierJacket-Black-Main-RGB_1200x.jpg?v=1617065304",
    price: "30,00",
    name: "Glaciar Jacket",
    description: "...",
    id: 0,
});
productList.push({
    imagen: "https://images.samsung.com/is/image/samsung/latin-t35f-lf24t350fhlxzp-frontblack-301443711?$650_519_PNG$",
    price: "95,40" ,
    name: "Monitor 24''",
    description: "...",
    id: 1,
});
productList.push({
    imagen: "https://i5.walmartimages.com/asr/f7b0bdd7-e6e3-4622-a292-f8e7e996d2db.3ec5ecea2ef0a9d9d6715abf44a145f6.png",
    price: "99,99",
    name: "Gaming Chair",
    description: "...",
    id: 2,
});
productList.push({
    imagen: "https://m.media-amazon.com/images/I/51Z76RUZNxL._AC_SX679_.jpg",
    price: "39,99",
    name: "AOT Levi Figure Action",
    description: "...",
    id: 3,
});
productList.push({
    imagen: "https://m.media-amazon.com/images/I/81aOEQTT7ML._AC_SX569_.jpg",
    price: "45,00",
    name: "Japanese Shacks",
    description: "...",
    id: 4,
});
productList.push({
    imagen: "https://m.media-amazon.com/images/I/61zyHl-S4ML._AC_SX679_.jpg",
    price: "24,99",
    name: "Chainsaw Man Power Toy Figure",
    description: "...",
    id: 5,
});
productList.push({
    imagen: "https://m.media-amazon.com/images/I/81b12iKnYJL._AC_SX679_.jpg",
    price: "129,99",
    name: "Computer Desk",
    description: "...",
    id: 6,
});
productList.push({
    imagen: "https://m.media-amazon.com/images/I/71z-gXH0rJL._AC_SX425_.jpg",
    price: "29,99",
    name: "Headphones",
    description: "...",
    id: 7,
});
productList.push({
    imagen: "https://m.media-amazon.com/images/I/81PggGpgBkL._AC_UY500_.jpg",
    price: "60,00",
    name: "Running Shoes",
    description: "...",
    id: 8,
});

/*Render Products*/

function renderProduct(arr){
    for(product of arr){
        
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        //productCard.setAttribute("id", product.id);

        const productImg = document.createElement("img");
        productImg.classList.add("productImg");
        productImg.setAttribute("id", product.id);
        productImg.setAttribute("src", product.imagen);
        /*productImg.addEventListener("click", open);*/

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;

        const figure = document.createElement("figure");
        const imgCart = document.createElement("img");
        imgCart.setAttribute("src", "./icons/bt_add_to_cart.png");

        figure.appendChild(imgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        productImg.addEventListener("click", open);

        cardsContainer.appendChild(productCard);

        function open(){
            productDetailOpen.classList.remove("inactive");
            desktopMenu.classList.add("inactive");
            mobileMenu.classList.add("inactive");
            shoppingCar.classList.add("inactive");
            
            let show = productImg.getAttribute("id");
            ImgDetail.setAttribute("src", productList[show].imagen);
            showN.innerText = productList[show].name;
            showP.innerText =  "$" + productList[show].price;
            showD.innerText = productList[show].description;

        }
    }
    

}
renderProduct(productList);
//productImg.querySelector(".productImg");
    // COPIAR IMG DE CARD EN ASIDE
    //ImgDetail.setAttribute('src', open.target.src);

    // COPIAR LOS ELEMENTOS DE UN CARD AL ASIDE
    //productDetailOpen.children[2].children[0].textContent = productInfo.children[0].children[0].textContent;
    //productDetailOpen.children[2].children[1].textContent = productInfo.children[0].children[1].textContent;
   // productDetailOpen.children[2].children[2].textContent = product[productCard.getAttribute('id')].description;//traer la descripcion del producto
    //productDetailOpen.children[2].children[3].setAttribute('value', product[productCard.getAttribute('id')].id);//colocar id en el boton de compra del aside


/*<div class="product-detail-close">
<img src="./icons/icon_close.png" alt="close">
</div>
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
<div class="product-info">
<p>$35,00</p>
<p>Bike</p>
<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
<button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.png" alt="add to cart">
    Add to cart
</button>
</div>
function renderPDetail(arrs){
    for(PDetail of arrs){
        const pDClose = document.createElement("div");
        pDClose.classList.add("product-detail-close");

        const imgClose = document.createElement("img");
        imgClose.setAttribute("src", "./icons/icon_close.png");
        imgClose.addEventListener("click", close);

        pDClose.appendChild(imgClose);

        const productImgD = document.createElement("img");
        productImgD.setAttribute("src", PDetail.imagen);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const priceD = document.createElement("p");
        priceD.innerText = "$" + PDetail.price;
        const nameD = document.createElement("p");
        nameD.innerText = PDetail.name;
        const productDescrip = document.createElement("p");
        productDescrip.innerText = PDetail.description;

        const buttonAdd = document.createElement("button");
        buttonAdd.classList.add("primary-button", "add-to-cart-button");
        buttonAdd.innerText = "Add to cart";

        const imgButton = document.createElement("img");
        imgButton.setAttribute("src", "./icons/bt_add_to_cart.png");
        
        buttonAdd.appendChild(imgButton);
        productInfo.appendChild(priceD);
        productInfo.appendChild(nameD);
        productInfo.appendChild(productDescrip);
        productInfo.appendChild(buttonAdd);
        productDetailOpen.appendChild(pDClose);
        productDetailOpen.appendChild(productImgD);
        productDetailOpen.appendChild(productInfo);
    }
}
renderPDetail(productList);*/
