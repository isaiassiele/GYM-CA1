
/* For Humburger */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})


/* Json For Populating Buy Product Data */
const data = [
    {
        id:'barbell',
        name:'Barbell',
        instruction:'6-Ring',
        image:'images/barbell.jpg',
        price:'75€',
        description:'The equipment is used to be lifted up for strong muscles.'
    },
    {
        id:'trademill',
        name:'Rowing-Machine',
        instruction:'Concept-2',
        image:'images/rowing.jpg',
        price:'140€',
        description:'The equipment is a stationary rowing machine for shoulders.'
    },
    {
        id:'chest',
        name:'Chest',
        instruction:'Strong-Breath',
        image:'images/chest.png',
        price:'315€',
        description:'The equipment is used for shouldering.'
    },
    {
        id:'bench',
        name:'Bench',
        instruction:'Deracy',
        image:'images/bench.jpg',
        price:'135€',
        description:'The equipment is used for sit-ups practice.'
    },
    {
        id:'treadmill',
        name:'Treadmill',
        instruction:'Run-Me',
        image:'images/treadmill.jpg',
        price:'235€',
        description:'The equipment is used for running and walking only.'
    },
    {
        id:'resistance',
        name:'Resistance',
        instruction:'Fast Fingers',
        image:'images/resistance.jpg',
        price:'25€',
        description:'The equipment is used for stretching with your fingers.'
    },
    {
        id:'ellipticals',
        name:'Ellipticals',
        instruction:'Cycle-Like',
        image:'images/ellipticals.jpg',
        price:'35€',
        description:'The equipment is for running integrated with hand movements.'
    },
    {
        id:'power rack',
        name:'Power rack',
        instruction:'Big Boy',
        image:'images/power rack.png',
        price:'350€',
        description:'This equipement is used for holding free weight barbells.'
    },
    {
        id:'Boxer-Full',
        name:'Boxer-Full',
        instruction:'All in 1',
        image:'images/Boxer-Full.jpg',
        price:'135€',
        description:'These are boxers with all items.'
    },
    {
        id:'Boxer-Red',
        name:'Boxer-Red',
        instruction:'Fight',
        image:'images/Boxer-Red.jpg',
        price:'45€',
        description:'The equipment is allowed to be used by big professionlas.'
    },
    {
        id:'Boxer-Black',
        name:'Boxer-Black',
        instruction:'Training',
        image:'images/Boxer-Black.jpg',
        price:'55€',
        description:'These are black training boxers.'
    },
]

/**Data for Sample Products */
const data1 = [
    {
        id:'barbell',
        name:'Barbell',
        image:'images/barbell.jpg',
        price:'75€',
    },
    {
        id:'trademill',
        name:'Trademill',
        image:'images/rowing.jpg',
        price:'140',
    },
    {
        id:'chest',
        name:'Chest',
        image:'images/chest.png',
        price:'315€',
    },
]


/** Function for Populating All Products */
function allProducts(){
    let contProduct = document.getElementById("allProducts")
    let allPrds = ""
    data.map((x)=>{
         allPrds = allPrds + `<div class="col-4 products">
         <a onclick="localStorage.setItem('id','${x.id}')" href="description.html">
             <img src="${x.image}" alt="">
         </a>
         <h4>${x.name}</h4>
         <div class="rating">
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star-half-o" ></i>
         </div>
         <p>${x.price}</p>
     </div>`
    })
  contProduct.innerHTML=allPrds
}

/**Function for Populating Sample Products */
function sampleProducts(){
    let contProduct1 = document.getElementById("sampleProducts")
    let allPrds1 = ""
    data1.map((x)=>{
         allPrds1 = allPrds1 + `<div class="col-4 products1">
         <img src="${x.image}" alt="">
         <h4>${x.name}</h4>
         <div class="rating">
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star-half-o" ></i>
         </div>
         <p>${x.price}</p>
     </div>`
    })
  contProduct1.innerHTML=allPrds1
}

/**Function for the Description Page */
function descriptionPage(){
    let singleProduct = document.getElementById("singleProduct")
    let productID = localStorage.getItem("id")
    let singleData = data.filter(x=> x.id === productID)
    singleProduct.innerHTML = `<div class="row">
    <div class="col-2">
        <img src="${singleData[0].image}" alt="" width="100%" height="50%">
    </div>
    <div class="col-2">
        <p>${singleData[0].name}</p>
        <h1>${singleData[0].instruction}</h1>
        <h4>${singleData[0].price}</h4>
        <select name="" id="">
            <option value="Adult">Adult</option>
            <option value="">Childrens</option>
        </select>
        <input type="number" value="1">
        <button type="button" onclick="reserveItem('${singleData[0].price}','${singleData[0].name}')" style="border:none; background-color:white;">
        <a href="reservation.html" class="btn">Add</a>
        </button>
        <h3>Equipment Details</h3>
        <br>
        <p>${singleData[0].description}</p>
    </div>
</div>`

}

/**Fuction for the Search Section */
const searchProducts = ()=>{
    const searchbox = document.getElementById("search-item").value.toLowerCase();
    const storeitems = document.getElementsByClassName("products");
    for(var i=0; i < storeitems.length;i++){
        if (!storeitems[i].innerHTML.toLowerCase().includes(searchbox)) {
            storeitems[i].style = "display: none";
        }

        else {

            storeitems[i].style = "display: block";

        }
    }
       
}


/**Function for reserving the Items */
function reserveItem(x,y){
    localStorage.setItem("reserveName",y)
    localStorage.setItem("Price",x)
}


