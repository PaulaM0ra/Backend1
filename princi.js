const cellphones = [
    // iPhone models
    { brand: 'Apple', type: 'Smartphone', model: 'iPhone 11', releaseDate: '2019-09-20', price: 699, image: 'iphone11.jpg', review: 'Reseña del iPhone 11...', synopsis: 'Sinopsis del iPhone 11...', otherInfo: 'Otra información relevante...' },
    { brand: 'Apple', type: 'Smartphone', model: 'iPhone 12', releaseDate: '2020-10-23', price: 799, image: 'iphone12.jpg', review: 'Reseña del iPhone 12...', synopsis: 'Sinopsis del iPhone 12...', otherInfo: 'Otra información relevante...' },
    { brand: 'Apple', type: 'Smartphone', model: 'iPhone 13', releaseDate: '2021-09-24', price: 899, image: 'iphone13.jpg', review: 'Reseña del iPhone 13...', synopsis: 'Sinopsis del iPhone 13...', otherInfo: 'Otra información relevante...' },
    { brand: 'Apple', type: 'Smartphone', model: 'iPhone 14', releaseDate: '2022-09-16', price: 999, image: 'iphone14.jpg', review: 'Reseña del iPhone 14...', synopsis: 'Sinopsis del iPhone 14...', otherInfo: 'Otra información relevante...' },
    { brand: 'Apple', type: 'Smartphone', model: 'iPhone 15', releaseDate: '2024-08-10', price: 1099, image: 'iphone15.jpeg', review: 'Reseña del iPhone 15...', synopsis: 'Sinopsis del iPhone 15...', otherInfo: 'Otra información relevante...' },

    // Samsung models
    { brand: 'Samsung', type: 'Smartphone', model: 'Galaxy S20', releaseDate: '2020-03-06', price: 999, image: 'galaxyS20.jpg', review: 'Reseña del Galaxy S20...', synopsis: 'Sinopsis del Galaxy S20...', otherInfo: 'Otra información relevante...' },
    { brand: 'Samsung', type: 'Smartphone', model: 'Galaxy S21', releaseDate: '2021-01-29', price: 799, image: 'galaxyS21.jpg', review: 'Reseña del Galaxy S21...', synopsis: 'Sinopsis del Galaxy S21...', otherInfo: 'Otra información relevante...' },
    { brand: 'Samsung', type: 'Smartphone', model: 'Galaxy S22', releaseDate: '2022-02-25', price: 899, image: 'galaxyS22.jpg', review: 'Reseña del Galaxy S22...', synopsis: 'Sinopsis del Galaxy S22...', otherInfo: 'Otra información relevante...' },
    { brand: 'Samsung', type: 'Smartphone', model: 'Galaxy S23', releaseDate: '2023-02-17', price: 999, image: 'galaxyS23.jpg', review: 'Reseña del Galaxy S23...', synopsis: 'Sinopsis del Galaxy S23...', otherInfo: 'Otra información relevante...' },
    { brand: 'Samsung', type: 'Smartphone', model: 'Galaxy S24', releaseDate: '2024-07-20', price: 1099, image: 'galaxyS24.jpg', review: 'Reseña del Galaxy S24...', synopsis: 'Sinopsis del Galaxy S24...', otherInfo: 'Otra información relevante...' },

    // Other brands and models
    { brand: 'Xiaomi', type: 'Smartphone', model: 'Redmi Note 11', releaseDate: '2021-03-16', price: 299, image: 'redmiNote11.jpg', review: 'Reseña del Redmi Note 11...', synopsis: 'Sinopsis del Redmi Note 11...', otherInfo: 'Otra información relevante...' },
    { brand: 'Xiaomi', type: 'Smartphone', model: 'Redmi Note 12', releaseDate: '2022-01-10', price: 349, image: 'redmiNote12.jpg', review: 'Reseña del Redmi Note 12...', synopsis: 'Sinopsis del Redmi Note 12...', otherInfo: 'Otra información relevante...' },
    { brand: 'Xiaomi', type: 'Smartphone', model: 'Redmi Note 13', releaseDate: '2024-06-15', price: 399, image: 'redmiNote13.jpg', review: 'Reseña del Redmi Note 13...', synopsis: 'Sinopsis del Redmi Note 13...', otherInfo: 'Otra información relevante...' },
    { brand: 'Google', type: 'Smartphone', model: 'Pixel 6', releaseDate: '2021-10-28', price: 599, image: 'pixel6.jpg', review: 'Reseña del Pixel 6...', synopsis: 'Sinopsis del Pixel 6...', otherInfo: 'Otra información relevante...' },
    { brand: 'Google', type: 'Smartphone', model: 'Pixel 7', releaseDate: '2022-10-13', price: 699, image: 'pixel7.jpg', review: 'Reseña del Pixel 7...', synopsis: 'Sinopsis del Pixel 7...', otherInfo: 'Otra información relevante...' },
//Tablets

    { brand: 'Apple', type: 'Tablet', model: 'iPad 9th Gen', releaseDate: '2021-09-24', price: 329, image: 'ipad9.jpg', review: 'Reseña del iPad 9th Gen...', synopsis: 'Sinopsis del iPad 9th Gen...', otherInfo: 'Otra información relevante...' },
    { brand: 'Apple', type: 'Tablet', model: 'iPad Air 5th Gen', releaseDate: '2022-03-18', price: 599, image: 'ipadair5.jpg', review: 'Reseña del iPad Air 5th Gen...', synopsis: 'Sinopsis del iPad Air 5th Gen...', otherInfo: 'Otra información relevante...' },
    { brand: 'Samsung', type: 'Tablet', model: 'Galaxy Tab S7', releaseDate: '2020-08-21', price: 649, image: 'galaxyTabS7.jpg', review: 'Reseña del Galaxy Tab S7...', synopsis: 'Sinopsis del Galaxy Tab S7...', otherInfo: 'Otra información relevante...' },
    { brand: 'Samsung', type: 'Tablet', model: 'Galaxy Tab S8', releaseDate: '2022-02-09', price: 749, image: 'galaxyTabS8.jpg', review: 'Reseña del Galaxy Tab S8...', synopsis: 'Sinopsis del Galaxy Tab S8...', otherInfo: 'Otra información relevante...' },
//Accsesorios
{ brand: 'Apple', type: 'Accsesorios', model: 'AirPods Pro', releaseDate: '2019-10-30', price: 249, image: 'airpodsPro.jpg', review: 'Reseña de AirPods Pro...', synopsis: 'Sinopsis de AirPods Pro...', otherInfo: 'Otra información relevante...' },
{ brand: 'Sony', type: 'Accsesorios', model: 'WH-1000XM4', releaseDate: '2020-08-06', price: 349, image: 'wh1000xm4.jpg', review: 'Reseña del WH-1000XM4...', synopsis: 'Sinopsis del WH-1000XM4...', otherInfo: 'Otra información relevante...' },
{ brand: 'Bose', type: 'Accsesorios', model: 'QuietComfort 45', releaseDate: '2021-09-23', price: 329, image: 'quietcomfort45.jpg', review: 'Reseña del QuietComfort 45...', synopsis: 'Sinopsis del QuietComfort 45...', otherInfo: 'Otra información relevante...' },
{ brand: 'Jabra', type: 'Accessory', model: 'Elite 85h', releaseDate: '2019-02-18', price: 299, image: 'elite85h.jpg', review: 'Reseña del Elite 85h...', synopsis: 'Sinopsis del Elite 85h...', otherInfo: 'Otra información relevante...' }

];

function loadCellphones() {
    const list = document.getElementById('cellphoneList');
    list.innerHTML = '';
    cellphones.forEach((cellphone, index) => {
        const item = document.createElement('div');
        item.className = 'cellphone-item';
        item.onclick = () => showDetail(index);
        item.innerHTML = `
            <img src="${cellphone.image}" alt="${cellphone.model}">
            <h3>${cellphone.model}</h3>
            <p>Marca: ${cellphone.brand}</p>
            <p>Tipo: ${cellphone.type}</p>
            <p>Fecha de Lanzamiento: ${cellphone.releaseDate}</p>
            <p>Precio: $${cellphone.price}</p>
        `;
        list.appendChild(item);
    });
}

function showDetail(index) {
    const detail = document.getElementById('cellphoneDetail');
    const cellphone = cellphones[index];
    detail.innerHTML = `
        <h2>${cellphone.model}</h2>
        <img src="${cellphone.image}" alt="${cellphone.model}">
        <p><strong>Marca:</strong> ${cellphone.brand}</p>
        <p><strong>Tipo:</strong> ${cellphone.type}</p>
        <p><strong>Fecha de Lanzamiento:</strong> ${cellphone.releaseDate}</p>
        <p><strong>Precio:</strong> $${cellphone.price}</p>
        <p><strong>Reseña:</strong> ${cellphone.review}</p>
        <p><strong>Sinopsis:</strong> ${cellphone.synopsis}</p>
        <p><strong>Otra Información:</strong> ${cellphone.otherInfo}</p>
    `;
    detail.style.display = 'block';
    detail.scrollIntoView({ behavior: 'smooth' });

}

function searchFunction() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.cellphone-item');
    items.forEach(item => {
        const model = item.querySelector('h3').textContent.toLowerCase();
        if (model.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterFunction() {
    const brand = document.getElementById('brandFilter').value;
    const type = document.getElementById('typeFilter').value;
    const minPrice = parseFloat(document.getElementById('minPriceFilter').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPriceFilter').value) || Infinity;

    const items = document.querySelectorAll('.cellphone-item');
    items.forEach(item => {
        const itemBrand = item.querySelector('p').textContent.includes('Marca: ' + brand) || brand === '';
        const itemType = item.querySelector('p').textContent.includes('Tipo: ' + type) || type === '';
        const itemPrice = parseFloat(item.querySelector('p').textContent.replace(/[^0-9.-]+/g, '')) || 0;

        if (itemBrand && itemType && itemPrice >= minPrice && itemPrice <= maxPrice) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

window.onload = loadCellphones;
