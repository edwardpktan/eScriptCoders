const necktie1 = {
    name: "Necktie 1",
    description: "This t-shirt is designed by Billie Eilish",
    imageURL: "https://cdn.shopify.com/s/files/1/0281/3493/2552/products/TRSL0002_512x512@2x.jpg?v=1597282021",
    style: "Billie Dark Print",
    price: 59.00
}

const necktie2 = {
    name: "Necktie 2",
    description: "This t-shirt is designed by Billie Eilish",
    imageURL: "https://cdn.shopify.com/s/files/1/0281/3493/2552/products/TRSL0003_512x512@2x.jpg?v=1597282021",
    style: "Billie Light Print",
    price: 59.00
}

// (2) Push the product objects into an array
const productList = [];
productList.push(necktie1, necktie2);


function displayDetails(index) {
    //alert(`hello!`);
    // When user clicks on any "More" button, the details of the selected product will be displayed
    document.querySelector("#modalName").innerHTML = productList[index].name;
    document.querySelector("#modalImg").src = productList[index].imageURL;
    document.querySelector("#modalDescription").innerHTML = productList[index].description;
    document.querySelector("#modalStyle").innerHTML = productList[index].style;
    document.querySelector("#modalPrice").innerHTML = productList[index].price;

    // Launch the productDetail page
    // productList[index] pass it to the productDetail page to display
    // session Storage


}

// (3) Display all products when user launch the product.html page
// const displayProduct = () => {}
function displayProduct() {

    let display = "";

    for (let i = 0; i < productList.length; i++) {

        display += `
        <div class="col-lg-3 col-md-6 col-sm-6 col-6">
            <div class="card img-fluid" style="width: 18rem;">
                <img src=${productList[i].imageURL} class="card-img-top" alt="image">
                    <div class="card-body">
                        <h5 class="card-title">${productList[i].name}</h5>
                        <a id="item${i+1}" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" onClick="displayDetails(${i})">More</a>
                    </div>
            </div>
        </div>
        `
    }

    document.querySelector("#row").innerHTML = display;

}  // End of displayProduct function

// 4) Add product to the product list when user clocks on the submit button from the productform.html
function addProduct(name, imageURL, description, quantity, price) {

    // The parameters will be sent in from another function
    /* 
    1) Contruct the object
        property: value,
    */
    const productItem = {
        name: name,
        imageURL: imageURL,
        description: description,
        quantity: quantity,
        price: price
    } 

    productList.push(productItem);

}

// Hardcorded now: The individual property value are sent in through the argument - later we need to refactor when you have the productform.html
addProduct("Billie Eilish Name Light T-Shirt", "https://down-sg.img.susercontent.com/file/f288418133be1ff113cf956d97483b06", "This t-shirt is designed by Billie Eilish", 50, 59);

addProduct("Billie Eilish Name Dark T-Shirt", "This t-shirt is designed by Billie Eilish", "https://down-sg.img.susercontent.com/file/7f94877bde818dc7a2175fed15b66458", "Billie Dark Print", 59);

addProduct("Billie Eilish Dark T-Shirt", "This t-shirt is designed by Billie Eilish", "https://down-sg.img.susercontent.com/file/758c9d557116819ace316e51b1c09803", "Billie Dark Print", 59);

addProduct("Billie Eilish Dark T-Shirt", "This t-shirt is designed by Billie Eilish", "https://down-sg.img.susercontent.com/file/758c9d557116819ace316e51b1c09803", "Billie Dark Print", 59);

displayProduct();