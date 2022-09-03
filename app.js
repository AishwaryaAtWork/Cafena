// to hide and unhide nav menubar
var navbar=document.querySelector('.nav');
document.querySelector('#menuBtn').onclick=()=>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    search.classList.remove('show');
}

// to hide and unhide cart menubar
var cartItem=document.querySelector('.cart-items-container');
document.querySelector('#cartBtn').onclick=()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('show');
}

//to hide and unhide search bar
var search=document.querySelector('.search-form');
document.querySelector('#searchBtn').onclick=()=>{
    search.classList.toggle('show');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    search.classList.remove('show');
};