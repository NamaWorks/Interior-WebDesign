const products = [
    //Accesories for the room
    {
        name: 'Charlotte Set',
        price: 30,
        category: 'Accessories for the room',
        image: './assets/img/product-img/acc-for-the-room/pexels-charlotte-may-5825576.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Karolina Set',
        price: 15,
        category: 'Accessories for the room',
        image: './assets/img/product-img/acc-for-the-room/pexels-karolina-grabowska-4207892.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Rachel Set',
        price: 120,
        category: 'Accessories for the room',
        image: './assets/img/product-img/acc-for-the-room/pexels-rachel-claire-4825713.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Vlada Set',
        price: 75,
        category: 'Accessories for the room',
        image: './assets/img/product-img/acc-for-the-room/pexels-vlada-karpovich-5357344.jpg',
        link:'https://www.google.com',
    },
    // Kitchen items
    {
        name: 'Blank Set',
        price: 275,
        category: 'Kitchen items',
        image: './assets/img/product-img/kitchem-items/pexels-blank-space-2647714.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Jonathan Set',
        price: 1050,
        category: 'Kitchen items',
        image: './assets/img/product-img/kitchem-items/pexels-jonathan-borba-5570224.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Medhat Set',
        price: 1320,
        category: 'Kitchen items',
        image: './assets/img/product-img/kitchem-items/pexels-medhat-ayad-447592.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Mister Set',
        price: 1320,
        category: 'Kitchen items',
        image: './assets/img/product-img/kitchem-items/pexels-mister-mister-2442904.jpg',
        link:'https://www.google.com',
    },
    // Minimal & modern chairs
    {
        name: 'Joaquin Set',
        price: 120,
        category: 'Minimal & modern chairs',
        image: './assets/img/product-img/minimal-n-modern-chairs/pexels-pixabay-533157.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Diana Set',
        price: 360,
        category: 'Minimal & modern chairs',
        image: './assets/img/product-img/minimal-n-modern-chairs/pexels-rachel-claire-5490336.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Valerie Set',
        price: 830,
        category: 'Minimal & modern chairs',
        image: './assets/img/product-img/minimal-n-modern-chairs/pexels-valeria-boltneva-827518.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Vecislava Set',
        price: 470,
        category: 'Minimal & modern chairs',
        image: './assets/img/product-img/minimal-n-modern-chairs/pexels-vecislavas-popa-1571463.jpg',
        link:'https://www.google.com',
    },
    // Outdoor Decor
    {
        name: 'Jonathan Set',
        price: 1470,
        category: 'Outdoor decor',
        image: './assets/img/product-img/outdoor-decor/pexels-jonathan-borba-3255245.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Ksenia Set',
        price: 2190,
        category: 'Outdoor decor',
        image: './assets/img/product-img/outdoor-decor/pexels-ksenia-chernaya-3951746.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Leelo Set',
        price: 830,
        category: 'Outdoor decor',
        image: './assets/img/product-img/outdoor-decor/pexels-leeloo-thefirst-8210482.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Claire Set',
        price: 430,
        category: 'Outdoor decor',
        image: './assets/img/product-img/outdoor-decor/pexels-rachel-claire-5490356.jpg',
        link:'https://www.google.com',
    },
    //Minimal & modern chairs
    {
        name: 'Charlotte Set',
        price: 430,
        category: 'Trendy sofa set',
        image: './assets/img/product-img/trendy-sofa-set/pexels-charlotte-may-5824901.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'May Set',
        price: 700,
        category: 'Trendy sofa set',
        image: './assets/img/product-img/trendy-sofa-set/pexels-charlotte-may-5825720.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Maksim Set',
        price: 390,
        category: 'Trendy sofa set',
        image: './assets/img/product-img/trendy-sofa-set/pexels-maksim-goncharenok-4352247.jpg',
        link:'https://www.google.com',
    },
    {
        name: 'Shirin Set',
        price: 660,
        category: 'Trendy sofa set',
        image: './assets/img/product-img/trendy-sofa-set/pexels-shirin-olyaei-2986011.jpg',
        link:'https://www.google.com',
    },
];

// --------------

//! Product template

const getProductTemplate = (product) => {
    return `
    <div class="product">
        <a href="${product.link}" target="_blank"><img class="product-image" src="${product.image}" alt="${product.name}"></a>
        <a href="${product.link}" target="_blank"><div class="mascara"></div></a>
        <div class="product-info">
            <p class="name">${product.name}</p>
            <p class="category">${product.category}</p>
            <p class="price">${product.price}</p>
        </div>
    </div>`
}

// --------------

//! New Arrivals section

const getNewArrivalsProducts = (arr) => {
    const newArrivals = arr.slice((arr.length - 4), arr.length);
    return newArrivals
}
const newArrivalsProducts = getNewArrivalsProducts(products);
const addNewArrivalsToHTML = (arr) => {
    for(i=0; i<arr.length; i++){
    let product = arr[i];
    let newArrivalsDiv = document.getElementById('new-arrivals-products');
    newArrivalsDiv.innerHTML += getProductTemplate(product);
    }
};
addNewArrivalsToHTML(newArrivalsProducts);

// --------------

//! Product filter section

const categorySelector = document.getElementById('select-category');
// const categorySelection = categorySelector.options[categorySelector.selectedIndex];
// const selectedCat = categorySelection.text;

const priceSelector = document.querySelector('#price-input');
const priceSelection = priceSelector.value;

const filteredProductsDiv = document.getElementById('filter-products');

const filteredArray = [];
const filterProducts = (arr) => {
    arr.forEach(product => {
    //     if(product.price <= priceSelection && product.category === selectedCat){
    //         filteredArray.push(product)
    //     } else if(priceSelection >= product.price && selectedCat === "All Categories") {
    //         filteredArray.push(product)
    //     }
    // })
    console.log(categorySelector.value);
    if(product.category === categorySelector.value) {
        filteredArray.push(product)
    }
})
console.log(filteredArray);
}

const addFilteredToHTML = (arr) => {
    for(i=0; i<arr.length; i++){
    let product = arr[i];
    filteredProductsDiv.innerHTML += getProductTemplate(product);
    }
}

// --------------

//! Search Button

const searchButton = document.querySelector('#search-button')

const onSearchButtonClicked = () => {
    filterProducts(products);
    addFilteredToHTML(filteredArray);
}

searchButton.addEventListener('click', onSearchButtonClicked)