// ! ----------------------- IMPORTS AREA ------------------------

import {renderCards} from "./ui.js";

// ! ---------------------- FETCH JSON DATA ----------------------

let dbData;

async function fetchMenu(){

  const response = await fetch('./db.json');
  dbData = await response.json();
}
fetchMenu().then(()=>renderCards(dbData.ourMenu))

// ! ---------------------- HTML ELEMENTS ------------------------

const inputs = document.querySelectorAll('#buttons input');

// ! ------------------ EVENT LISTENER & FILTER ------------------

inputs.forEach((input) => {

  input.addEventListener('click',() => {
    const selectedCategory = input.id;

    if (selectedCategory === "all"){
      renderCards(dbData.ourMenu);
    }
    else {

    const filteredMenu = dbData.ourMenu.filter((i) => i.category === selectedCategory);
    renderCards(filteredMenu);
    }
  });
})


