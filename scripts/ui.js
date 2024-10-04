const menuList = document.querySelector('#menu-list');

export const renderCards = (dbData) => {

  const menuHTML = dbData.map((item) => 
      
      `<a href="/detail.html?id=${item.id}" 
      id="card" class="d-flex flex-column flex-md-row text-dark gap-3 text-decoration-none">
        <img class="rounded shadow img-fluid" src="${item.img}"/>
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">$${item.price}</p>
          </div>
          <p class="lead">${item.desc}</p>
        </div>
      </a>`
    )
    .join('');

    menuList.innerHTML = menuHTML;
};