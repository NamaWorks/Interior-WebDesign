const products = [
  //Accesories for the room
  {
    name: 'Charlotte Set',
    price: 30,
    category: 'Accessories for the room',
    image:
      './assets/img/product-img/acc-for-the-room/pexels-charlotte-may-5825576.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Karolina Set',
    price: 15,
    category: 'Accessories for the room',
    image:
      './assets/img/product-img/acc-for-the-room/pexels-karolina-grabowska-4207892.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Rachel Set',
    price: 120,
    category: 'Accessories for the room',
    image:
      './assets/img/product-img/acc-for-the-room/pexels-rachel-claire-4825713.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Vlada Set',
    price: 75,
    category: 'Accessories for the room',
    image:
      './assets/img/product-img/acc-for-the-room/pexels-vlada-karpovich-5357344.jpg',
    link: 'https://www.google.com'
  },
  // Kitchen items
  {
    name: 'Blank Set',
    price: 275,
    category: 'Kitchen items',
    image:
      './assets/img/product-img/kitchem-items/pexels-blank-space-2647714.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Jonathan Set',
    price: 1050,
    category: 'Kitchen items',
    image:
      './assets/img/product-img/kitchem-items/pexels-jonathan-borba-5570224.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Medhat Set',
    price: 1320,
    category: 'Kitchen items',
    image:
      './assets/img/product-img/kitchem-items/pexels-medhat-ayad-447592.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Mister Set',
    price: 1320,
    category: 'Kitchen items',
    image:
      './assets/img/product-img/kitchem-items/pexels-mister-mister-2442904.jpg',
    link: 'https://www.google.com'
  },
  // Minimal & modern chairs
  {
    name: 'Joaquin Set',
    price: 120,
    category: 'Minimal & modern chairs',
    image:
      './assets/img/product-img/minimal-n-modern-chairs/pexels-pixabay-533157.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Diana Set',
    price: 360,
    category: 'Minimal & modern chairs',
    image:
      './assets/img/product-img/minimal-n-modern-chairs/pexels-rachel-claire-5490336.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Valerie Set',
    price: 830,
    category: 'Minimal & modern chairs',
    image:
      './assets/img/product-img/minimal-n-modern-chairs/pexels-valeria-boltneva-827518.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Vecislava Set',
    price: 470,
    category: 'Minimal & modern chairs',
    image:
      './assets/img/product-img/minimal-n-modern-chairs/pexels-vecislavas-popa-1571463.jpg',
    link: 'https://www.google.com'
  },
  // Outdoor Decor
  {
    name: 'Jonathan Set',
    price: 1470,
    category: 'Outdoor decor',
    image:
      './assets/img/product-img/outdoor-decor/pexels-jonathan-borba-3255245.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Ksenia Set',
    price: 2190,
    category: 'Outdoor decor',
    image:
      './assets/img/product-img/outdoor-decor/pexels-ksenia-chernaya-3951746.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Leelo Set',
    price: 830,
    category: 'Outdoor decor',
    image:
      './assets/img/product-img/outdoor-decor/pexels-leeloo-thefirst-8210482.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Claire Set',
    price: 430,
    category: 'Outdoor decor',
    image:
      './assets/img/product-img/outdoor-decor/pexels-rachel-claire-5490356.jpg',
    link: 'https://www.google.com'
  },
  //Minimal & modern chairs
  {
    name: 'Charlotte Set',
    price: 430,
    category: 'Trendy sofa set',
    image:
      './assets/img/product-img/trendy-sofa-set/pexels-charlotte-may-5824901.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'May Set',
    price: 700,
    category: 'Trendy sofa set',
    image:
      './assets/img/product-img/trendy-sofa-set/pexels-charlotte-may-5825720.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Maksim Set',
    price: 390,
    category: 'Trendy sofa set',
    image:
      './assets/img/product-img/trendy-sofa-set/pexels-maksim-goncharenok-4352247.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Shirin Set',
    price: 660,
    category: 'Trendy sofa set',
    image:
      './assets/img/product-img/trendy-sofa-set/pexels-shirin-olyaei-2986011.jpg',
    link: 'https://www.google.com'
  }
]

//? Lo ideal es tener las imágenes en cloudinary

//* Revisar con lighthouse de chrome

//* Tendríamos que tener un código reactivo, es decir, que si metemos un producto con una categoría distinta a las existentes se añada al select

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
  const newArrivals = arr.slice(arr.length - 4, arr.length)
  return newArrivals
}
const newArrivalsProducts = getNewArrivalsProducts(products)

const addNewArrivalsToHTML = (arr) => {
  const newArrivalsDiv = document.getElementById('new-arrivals-products')
  for (i = 0; i < arr.length; i++) {
    let product = arr[i]
    newArrivalsDiv.innerHTML += getProductTemplate(product)
  }
}
addNewArrivalsToHTML(newArrivalsProducts)

// --------------

//! Product filter section

const categorySelector = document.getElementById('select-category')
//Seleccionar el select del HTML

const filteredProductsDiv = document.getElementById('filter-products')
//Seleccionamos el div donde vamos a pintar los productos

const priceSelector = document.querySelector('#price-input')
//Seleccionamos el input del precio

const getMaximumValue = (arr) => {
  let maximumValue = 0
  for (const product of arr) {
    //recorremos todos los productos del arr
    if (product.price >= maximumValue) {
      //Pregunto el precio del producto que estoy mirando y en caso de que sea mayor, asigno este valor al de mi maximumValue
      maximumValue = product.price
    }
    return maximumValue
  }
}

const filterProducts = (arr) => {
  //*Esta primera es la forma de hacerlo por cómo lo hacía yo (desplegar este código)
  //!Al incluir el array aquí dentro lo que hacemos es resetear el array
  let filteredArray = []
  arr.forEach((product) => {
    // console.log("Valor del select: " + categorySelector.value);
    // console.log("Categoría del producto: " + product.category);
    // console.log("Precio del producto: " + product.price);
    // console.log("Valor del input: " + priceSelector.value);
    if (
      categorySelector.value === 'All Categories' ||
      product.category === categorySelector.value
    ) {
      if (priceSelector.value) {
        if (product.price <= priceSelector.value) {
          filteredArray.push(product)
        }
      } else {
        filteredArray.push(product)
      }
    }
  })
  console.log(filteredArray)

  //!--------- OTRA FORMA DE HACERLO
  // console.log("Valor del select: " + categorySelector.value);
  // console.log("Valor del input: " + priceSelector.value);
  // let maximumValue = getMaximumValue(arr)

  // let filteredArray = arr.filter(
  //   (product) =>
  //     ((categorySelector.value === "All Categories" ||
  //       product.category === categorySelector.value) &&
  //       priceSelector.value <= priceSelector.value) ||
  //     maximumValue
  // );

  addFilteredToHTML(filteredArray)
  // console.log(filteredArray)
  // console.log(maximumValue);
}

const addFilteredToHTML = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let product = arr[i]
    filteredProductsDiv.innerHTML += getProductTemplate(product)
  }
}

const getAllCategories = (arr) => {
  let categories = []
  categories.push('All Categories')
  for (const product of arr) {
    if (!categories.includes(product.category)) {
      categories.push(product.category)
    }
  }
  // console.log(categories)
  return categories
}
// getAllCategories(products)

const printCategories = (categories) => {
  for (const category of categories) {
    categorySelector.innerHTML += `
        <option value="${category}" class="filter-element">${category}</option>
        `
  }
}

printCategories(getAllCategories(products))

// --------------

//! Search Button

const searchButton = document.querySelector('#search-button')
//Seleccionamos el botón que me permite controlar cuando debo filtrar

const onSearchButtonClicked = () => {
  filteredProductsDiv.innerHTML = ''
  filterProducts(products)
}
searchButton.addEventListener('click', onSearchButtonClicked)

//! CLEAR BUTTON

const clearButton = document.querySelector('#clear-button')

const clean = () => {
  filteredProductsDiv.innerHTML = ''
  categorySelector.value = 'All Categories'
  priceSelector.value = ''
  onSearchButtonClicked()
  // filteredProductsDiv.innerHTML = addFilteredToHTML(products);
}
clearButton.addEventListener('click', clean)
onSearchButtonClicked()

// filteredProductsDiv.innerHTML = addFilteredToHTML(products);