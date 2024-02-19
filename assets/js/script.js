/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector(".preload")
const circle = document.querySelector(".circle")
const preloadImg = document.getElementById("preload-img")
// console.log(preloader);

setTimeout(() => {
    preloadImg.style.opacity = "0"
    circle.style.opacity = "0"
    preloader.style.opacity = "0"
    setTimeout(() =>{
        preloader.style.display = "none"

    } , 3000)

}, 3000);



/**
 * 
 *  nave
 * 
 */

let closeNave = document.getElementById("close-nav")
let navOpacity = document.getElementById("nav-opacity")
let navBarMobile = document.getElementById("nav-bar-mobile")
let Topbar = document.getElementById("Topbar")

closeNave.addEventListener('click',function(){
    navOpacity.style.left = "-100%"
})

let openNav = document.getElementById("open-nav")

openNav.addEventListener('click',function(){
    navOpacity.style.left = "0"
})


/**
 * 
 *  imge home
 * 
 */


let containerImg1 = document.querySelector(".container-img1")


let time = setInterval(function (){
    containerImg1.style.zIndex = "-1"

},5000)

setInterval(function(){
    containerImg1.style.zIndex = "2"
},10000)


/**
 * 
 *  feature-product-api
 * 
 */


let data_feature = async ()=> {

    let res = await fetch("http://localhost:3000/featur_products", {
        method : "GET",
    } ).then((res) => res.json())

    display__features_pro(res)
   
}; 

window.addEventListener("DOMContentLoaded",()=>{
    data_feature()
})



function display__features_pro(myData){
    let push_data = "";
    for (let i = 0; i < myData.length; i++) {
       
        push_data += ` <div class="card-products" id="card-feature">
        <img src="${myData[i].product_url}" alt="">

        <div class="title-cards">
          <p>H&M</p>
          <h3>${myData[i].product_name}</h3>

          <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>

          <div class="price-card">
            
            <div class="price-cards">
        
            <h4>${myData[i].price}</h4>


            ${myData[i].onSale?"<h4> <del>120$</del> </h4>" : ""}

            </div>

             <i id="zoom" class="fa-solid fa-magnifying-glass"></i> 

          </div>

          <h4>count : ${myData[i].count}</h4>
          <a href="#">Go To The Shop <i class="fa-solid fa-arrow-right"></i> </a>
        </div>
      </div>`
        
    //   console.log(myData);
    }

    let features = document.getElementById("feature-products")

    features.innerHTML = push_data
}