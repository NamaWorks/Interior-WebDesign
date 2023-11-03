const products = [
  //Accesories for the room
  {
    name: 'Charlotte Set',
    price: 30,
    category: 'Accessories for the room',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494246/.Interior%20Web%20Design/pexels-charlotte-may-5825576_fz2lgj_noebax.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Karolina Set',
    price: 15,
    category: 'Accessories for the room',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494226/.Interior%20Web%20Design/pexels-karolina-grabowska-4207892_oelxhl_pk1n2w.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Rachel Set',
    price: 120,
    category: 'Accessories for the room',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494658/.Interior%20Web%20Design/pexels-rachel-claire-4825713_cwawhu_bb9ylr.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Vlada Set',
    price: 75,
    category: 'Accessories for the room',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494251/.Interior%20Web%20Design/pexels-vlada-karpovich-5357344_ismhas_ugmvpa.jpg',
    link: 'https://www.google.com'
  },
  // Kitchen items
  {
    name: 'Blank Set',
    price: 275,
    category: 'Kitchen items',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494249/.Interior%20Web%20Design/pexels-blank-space-2647714_honesr_bhbef5.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Jonathan Set',
    price: 1050,
    category: 'Kitchen items',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494237/.Interior%20Web%20Design/pexels-jonathan-borba-5570224_dqqj4v_lgkczj.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Medhat Set',
    price: 1320,
    category: 'Kitchen items',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494670/.Interior%20Web%20Design/pexels-medhat-ayad-447592_sevwb9_ksrxci.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Mister Set',
    price: 1320,
    category: 'Kitchen items',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494668/.Interior%20Web%20Design/pexels-mister-mister-2442904_uahsci_nhnbnj.jpg',
    link: 'https://www.google.com'
  },
  // Minimal & modern chairs
  {
    name: 'Joaquin Set',
    price: 120,
    category: 'Minimal & modern chairs',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494665/.Interior%20Web%20Design/pexels-pixabay-533157_fwazln_ugsu7s.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Diana Set',
    price: 360,
    category: 'Minimal & modern chairs',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494660/.Interior%20Web%20Design/pexels-rachel-claire-5490336_kqrd6i_pvdfyt.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Valerie Set',
    price: 830,
    category: 'Minimal & modern chairs',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494652/.Interior%20Web%20Design/pexels-valeria-boltneva-827518_ojdj4r_rs5dox.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Vecislava Set',
    price: 470,
    category: 'Minimal & modern chairs',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494654/.Interior%20Web%20Design/pexels-vecislavas-popa-1571463_bp2r3e_cnzv73.jpg',
    link: 'https://www.google.com'
  },
  // Outdoor Decor
  {
    name: 'Jonathan Set',
    price: 1470,
    category: 'Outdoor decor',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494235/.Interior%20Web%20Design/pexels-jonathan-borba-3255245_fehuk6_xlumxq.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Ksenia Set',
    price: 2190,
    category: 'Outdoor decor',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494229/.Interior%20Web%20Design/pexels-ksenia-chernaya-3951746_i33mvu_egmvbc.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Leelo Set',
    price: 830,
    category: 'Outdoor decor',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494223/.Interior%20Web%20Design/pexels-leeloo-thefirst-8210482_fvpmwn_qo9izp.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Claire Set',
    price: 430,
    category: 'Outdoor decor',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494663/.Interior%20Web%20Design/pexels-rachel-claire-5490356_xh5rge_tq0ddb.jpg',
    link: 'https://www.google.com'
  },
  //Minimal & modern chairs
  {
    name: 'Charlotte Set',
    price: 430,
    category: 'Trendy sofa set',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494244/.Interior%20Web%20Design/pexels-charlotte-may-5824901_xccfhq_gyc3mu.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'May Set',
    price: 700,
    category: 'Trendy sofa set',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494240/.Interior%20Web%20Design/pexels-charlotte-may-5825720_jl3abv_rwk8el.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Maksim Set',
    price: 390,
    category: 'Trendy sofa set',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494224/.Interior%20Web%20Design/pexels-maksim-goncharenok-4352247_aaqui7_auwkdu.jpg',
    link: 'https://www.google.com'
  },
  {
    name: 'Shirin Set',
    price: 660,
    category: 'Trendy sofa set',
    image:
      'https://res.cloudinary.com/dgrhbsilh/image/upload/v1696494656/.Interior%20Web%20Design/pexels-shirin-olyaei-2986011_oqx0ad_jctyyk.jpg',
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
        <a href="${product.link}" target="_blank"><img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy"></a>
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
  //*Esta primera es la forma de hacerlo
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

// Aquí añadimos los links de google para fuentes y eso para que los cargue justo al cargar el HTML
const htmlHead = document.querySelector('head')
const addLinksToHead = () => {
  htmlHead.innerHTML += `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,600&display=swap"
      rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet">
  `
}

addLinksToHead()
