// ! ----------------------- SEARCH PARAMETER ------------------------

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// ! ---------------------- FETCH JSON DATA ----------------------

document.addEventListener('DOMContentLoaded', async () => {

let dbData;

const response = await fetch('../db.json');

dbData = await response.json();

const product = dbData.ourMenu.find((item) => item.id == id);
 if (!product){
    renderNotFound();
 }
 else {
renderPage(product);
}
});

const outlet = document.getElementById('outlet');


function renderPage(product) {
    outlet.innerHTML = 
    `<div class="d-flex justify-content-between fs-6">
     <a href="/"><img width="35px" src="/images/home.png" /></a>
        <p style="text-transform:capitalize"> Home / ${product.category} / ${product.title} </p>
      </div>
      <h1 class="text-center my-4">${product.title}</h1>
      <img src="${product.img}"
        style="max-height: 400px;"
        class="rounded object-fit-cover shadow"/>
      <h4 class="mt-4">
        <span>Product Category: </span>
        <span class="text-success">${product.category}</span>
      </h4>
      <h4 class="mt-4">
        <span>Product Price: </span>
        <span class="text-success">$${product.price}</span>
      </h4>
      <p class="lead">
      ${product.desc}
      </p>
    `;
}

// ! ---------------------- 404 PAGE NOT FOUND ----------------------

function renderNotFound(){
    outlet.innerHTML = 
    ` 
   <div   class="d-flex flex-column justify-content-center align-items-center">
    <a href="/" class="fs-5 mb-4">Back to Home Page</a>
    <img src='./images/404-img.png' width="500px" /></br>
   </div>
    `;
};

