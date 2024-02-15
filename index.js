"use strict";

let cardWrapper = $('.wrapper');
let brandOption = $('#brands');
let brand = [];

// ------------ RENDER FUNCTION --------------------


function renderProducts(data) {
    
if(data.length > 0) {

    data.forEach((el)=>{

        const {title, brand , thumbnail , price , discountPercentage}=el;

        
        const card=render('div', 'card',
        `
        <img src="${thumbnail}" alt="">
           <p>${title}</p>
           <p><span>${price}</span> <span>${Math.round(price*1.44)}</span></p>
           <p>Save - ₹32999 | ${brand} </p>
           <div>
               ${Math.round(discountPercentage)}%
               OFF
           </div>
         `);

         cardWrapper.appendChild(card);

    }) 
}else{
    cardWrapper.innerHTML=`<h1 class="text-center"> NOT FOUND </h1>`
}


}

renderProducts(product.products)

function findBrand(data) {

    if (data.length > 0) {
        data.forEach((el) => {

            if (! brand.includes(el.brand)) {
                brand.push(el.brand)
            }
        })
    }

}

findBrand(product.products)

function renderBrand(data) {

    if (data.length > 0) {

        data.forEach ((el) => {
            const option = render('option', 'classby', el)
            brandOption.appendChild(option)
        })
    }
}

renderBrand(brand)


brandOption.addEventListener('change', (e) => {
    sortBrands(e.target.value)
})


function sortBrands(brandName) {
    cardWrapper.innerHTML = ""

    const filterBrand = product.products.filter(el => {
        return el.brand.toLowerCase() == brandName.toLowerCase()
    })

    renderProducts(filterBrand)
}

// sortBrands()




// sortPrice UP -------------->


// function sortPrice(product) {
//     const resultPriceUp = product.products.sort ((a,b) => a.price - b.price).map((el) =>{
//         return {Name: el.title, Price: el.price + '$'}
//     })
//     return resultPriceUp
// }

// const priceUp = sortPrice(product)
// console.log(priceUp);


// sortPrice Down -------------->

// function sortPrice(product) {
//     const resultPriceDown = product.products.sort ((a,b) => b.price - a.price).map((el) =>{
//         return {Name: el.title, Price: el.price + '$'}
//     })
//     return resultPriceDown
// }

// const priceDown = sortPrice(product)
// console.log(priceDown);


// sortRating UP -------------->

// function sortRating(product) {
//     const resultRatingUp = product.products.sort ((a,b) => a.rating - b.rating).map((el) =>{
//         return {Name: el.title, Rating: el.rating}
//     })
//     return resultRatingUp
// }

// const RatingUp = sortRating(product)
// console.log(RatingUp);


// sortRating Down -------------->


// function sortRating(product) {
//     const resultRatingDown = product.products.sort ((a,b) => b.rating - a.rating).map((el) =>{
//         return {Name: el.title, Rating: el.rating}
//     })
//     return resultRatingDown
// }

// const RatingDown = sortRating(product)
// console.log(RatingDown);


// FilterCategory -------------->


// function filterCategory(product, category) {
//     const FilterCategory = product.products.filter((el) =>{
//         return el.category.toLowerCase() == category
//     })
//     return FilterCategory
// }

// const Category = filterCategory(product, 'smartphones')
// console.log(Category);


// Map array uzbekchaga o'girish -------------->

// let array = product.products;

// function makeObject (array) {
//     if (array.length>0) {
//         return array.map((el) => {
//             return {id:el.id, nomi:el.title, miqdori:el.quantity, tavsifi:el.description, narxi:el.price, reyting:el.rating, aysiya: el.stock, brandi: el.brand, categoriyasi: el.category, eskizi: el.thumbnail, suratlari: el.images}
//         })
//     }
// }

// const result = makeObject(array)
// console.log(result);