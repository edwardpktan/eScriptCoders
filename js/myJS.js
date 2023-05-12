
// Start of Product List
const productList = [];
let filteredProductList = [];

const necktieColorList = ["Gold", "Pink", "Blue", "Black", "Maroon", "Red", "Silver", "Grey", "Cream", "Grey Skinny", "Silver Skinny", "Cream Skinny", "Purple Skinny", "Pink Skinny", "Red Skinny", "Maroon Skinny", "Black Skinny", "Blue Skinny"];
const necktieColorIMGList = ["images/TRSL0002sq.jpg", "images/TRSL0003sq.jpg", "images/TRSL0004sq.jpg", "images/TRSL0005sq.jpg", "images/TRSL0006sq.jpg", "images/TRSL0007sq.jpg", "images/TRSL0008sq.jpg", "images/TRSL0009sq.jpg", "images/TRSL0010sq.jpg", "images/TSSL0001sq.jpg", "images/TSSL0002sq.jpg", "images/TSSL0003sq.jpg", "images/TSSL0004sq.jpg", "images/TSSL0005sq.jpg", "images/TSSL0006sq.jpg", "images/TSSL0007sq.jpg", "images/TSSL0008sq.jpg", "images/TSSL0009sq.jpg",];

const bowTieColorList = ["Blue", "Silver", "Black"];
const bowTieColorIMGList = ["images/BTPL0001sq.jpg", "images/BTPL0002sq.jpg", "images/BTPL0003sq.jpg"];

const tieTackColorList = ["Silver", "Pink", "Blue", "Silver Crystal", "Pink Crystal", "Blue Crystal"];
const tieTackIMGList = ["images/TTAC0001sq.jpg", "images/TTAC0002sq.jpg", "images/TTAC0003sq.jpg", "images/TTAC0004sq.jpg", "images/TTAC0005sq.jpg", "images/TTAC0006sq.jpg"];

const cufflinksColorList = ["Mother of Pearl Square", "Black Onyx Square", "Mother of Pearl Rectangle", "Black Onyx Rectangle", "Mother of Pearl Hexagon", "Black Onyx Hexagon", "Clear Crystal Pavé Bezel", "Black Crystal Pavé Bezel", "Blue Crystal Pavé Bezel", "Pink Crystal Pavé Bezel", "Purple Crystal Pavé Bezel", "Clear Crystal Square", "Black Crystal Square"];
const cufflinksIMGList = ["images/CUFF0001sq.jpg", "images/CUFF0002sq.jpg", "images/CUFF0003sq.jpg", "images/CUFF0004sq.jpg", "images/CUFF0019sq.jpg", "images/CUFF0018.jpg", "images/CUFF0023sq.jpg", "images/CUFF0022sq.jpg", "images/CUFF0025sq.jpg", "images/CUFF0023sq.jpg", "images/CUFF0026sq.jpg", "images/CUFF0024sq.jpg", "images/CUFF0028sq.jpg"];

const categoryList = ["Neckties", "Bow Ties", "Tie Tacks", "Cufflinks"];
const categoryIDList = ["neckTies_id", "bowTies_id", "tieTacks_id", "cufflinks_id"];

const noOfProduct = 81;
const noOfProductPerPage = 12;
let currentPage;
let noOfPages;


const getPrevPage = () => {
    console.log("prev");
    currentPage = currentPage - 1;
    if (currentPage < 1) {
        currentPage = 1;
    }
    console.log("currentPage : " + currentPage);
    let pageStart = 0;
    let pageEnd = 0;
    pageEnd = currentPage * noOfProductPerPage;
    pageStart = pageEnd - noOfProductPerPage;
    console.log("pageStart : " + pageStart);
    console.log("pageEnd : " + pageEnd);
    displayProductList(pageStart, pageEnd);
}

const getNextPage = () => {
    console.log("next");
    console.log("currentPage : " + currentPage);
    console.log("noOfPages : " + noOfPages);
    currentPage = currentPage + 1;
    if (currentPage > noOfPages) {
        currentPage = noOfPages;
    }
    console.log("currentPage : " + currentPage);
    let pageStart = 0;
    let pageEnd = 0;
    pageEnd = currentPage * noOfProductPerPage;
    pageStart = pageEnd - noOfProductPerPage;
    console.log("pageStart : " + pageStart);
    console.log("pageEnd : " + pageEnd);
    displayProductList(pageStart, pageEnd);

}

const getPage = (page) => {
    console.log("Page : " + page);
    currentPage = page;
    console.log("currentPage : " + currentPage);
    let pageStart = 0;
    let pageEnd = 0;
    pageEnd = page * noOfProductPerPage;
    pageStart = pageEnd - noOfProductPerPage;
    console.log("pageStart : " + pageStart);
    console.log("pageEnd : " + pageEnd);
    displayProductList(pageStart, pageEnd);

}

const createPaginationHtml = (resultArray) => {
    console.log("Pagination");
    noOfPages = Math.floor(resultArray.length / noOfProductPerPage);
    let lastPage = resultArray.length % noOfProductPerPage;
    let paginationDisplay = "";


    if (lastPage > 0) {

        noOfPages++;
    }

    paginationDisplay = `<li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous" onclick ="getPrevPage();">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>`;


    for (let i = 0; i < noOfPages; i++) {
        paginationDisplay += `<li class="page-item"><a class="page-link" href="#" onclick="getPage(${i + 1});">${i + 1}</a></li>`;
    }
    paginationDisplay += `<li class="page-item">
                            <a class="page-link" href="#" aria-label="Next" onclick ="getNextPage();">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>`;


    document.querySelector(".pagination").innerHTML = paginationDisplay;

    //    console.log(`noOfPages : ${noOfPages}`);
    //    console.log(`lastPage : ${lastPage}`);



}

const createProductHtml = (filteredProductArray, pageStart) => {
    //div.innerHTML = ;


    let display = "";
    console.log(`filteredProductArray.length : ${filteredProductArray.length}`);
    for (let i = 0; i < filteredProductArray.length; i++) {
        
        display += `
        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
            <div class="card img-fluid" style="width: 14rem;" id="productCard">
            <a id="item${i + 1}" href="#" data-bs-toggle="modal" data-bs-target="#productModal" onClick="displayDetails(${i + pageStart})">
                <img src=${filteredProductArray[i].imageURL} class="card-img-top" alt="image">
                    <div class="card-body">
                        <h6 class="card-title">${filteredProductArray[i].productName}</h6>
                        <h6 class="card-title">$${filteredProductArray[i].price}</h6>
                    </div>
            </a>
            </div>
        </div>
        `
    }

    document.querySelector("#row").innerHTML = display;

}

const filterProduct = (categoryID) => {
    //console.log("cat ID : " + categoryID);
    const filteredProductArray = productList.filter((product) => {
        //console.log("product.category.categoryID : " + product.category.id);
        return product.category.id == categoryID;

    });
    console.log(filteredProductArray);
    return filteredProductArray;

}

const filterProductSearchString = (searchStringArray) => {

    let stringArray = [];
    //console.log("searchStringArray " + searchStringArray.length);
    for (let i = 0; i < searchStringArray.length; i++) {
        let searchString = searchStringArray[i];
        //console.log("search String " +searchString);
        stringArray = stringArray.concat(filterProduct(searchString));
    }

    return stringArray;
}



const displayProductList = (pageStart, pageEnd) => {
    let searchStringArray = getSearchStringArray();
    let categoryString = getCategory();
    //console.log("pageEnd : " + pageEnd);
    //console.log("categoryString : " + categoryString);
    //console.log("searchStringArray");
    //console.log(searchStringArray);
    if (pageEnd == 0) {
        currentPage = 1;
        pageEnd = currentPage * noOfProductPerPage;
        if (searchStringArray != null && searchStringArray != "") {
            //console.log("get search: " + searchStringArray);

            filteredProductList = filterProductSearchString(searchStringArray);
            createPaginationHtml(filteredProductList);
            let resultArray = filteredProductList.slice(pageStart, pageEnd)
            createProductHtml(resultArray, pageStart);

            let searchString = ``;

            for (let i = 0; i < searchStringArray.length; i++) {

                let catID = searchStringArray[i];
                let category = globalCategoryList.find((cat) => {
                    return cat.id == catID;
                });

                catDisplay = category.display;
                if (i == 0) {
                    searchString += `${catDisplay}`;
                } else {
                    searchString += ` And ${catDisplay}`;
                }

            }
            let breadcrumbString = `<li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">${searchString}</li>`;

            document.querySelector("#breadcrumb").innerHTML = breadcrumbString;


        } else if (categoryString != null && categoryString != "") {

            filteredProductList = filterProduct(categoryString);
            createPaginationHtml(filteredProductList);
            //            console.log("filteredProductList.length: " + filteredProductList.length);
            //            console.log("pageStart : " + pageStart);
            //            console.log("pageEnd : " + pageEnd);
            let resultArray = filteredProductList.slice(pageStart, pageEnd)

            console.log("resultArray.length: " + resultArray.length);
            createProductHtml(resultArray, pageStart);

            let category = globalCategoryList.find((cat) => {
                return cat.id == categoryString;
            });

            catDisplay = category.display;



            let breadcrumbString = `<li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">${catDisplay}</li>`;

            document.querySelector("#breadcrumb").innerHTML = breadcrumbString;


        } else {
            createPaginationHtml(productList);
            let resultArray = productList.slice(pageStart, pageEnd);
            createProductHtml(resultArray, pageStart);

            let breadcrumbString = `<li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">ALL</li>`;

            document.querySelector("#breadcrumb").innerHTML = breadcrumbString;


        }
    } else {
        let resultArray = filteredProductList.slice(pageStart, pageEnd)
        createProductHtml(resultArray, pageStart);
    }

    //console.log(productList);
}


const initProductList = () => {

    //setCategory("category", "bowTies_id");
    //let stringArray = ["bowTies_id", "neckTies_id"];
    //let stringA = JSON.stringify(stringArray);

    //setCategory("searchStringArray", stringA);

    for (let i = 0; i < noOfProduct; i++) {

        createProduct(i);
    }
    console.log(productList);
    displayProductList(0, 0);

}

const createProduct = (index) => {

    let product = {};

    let categoryIndex = Math.floor(Math.random() * categoryList.length);
    //let categoryIndex = 0;
    let categoryName = categoryList[categoryIndex]; // change this if you need to hard code the category
    let categoryID = categoryIDList[categoryIndex];
    let category = {};
    category.display = categoryName;
    category.id = categoryID;

    let randIndex = 0;
    let color = "";
    let imgLink = "";

    if (categoryName == "Neckties") {

        randIndex = Math.floor(Math.random() * necktieColorList.length);
        color = necktieColorList[randIndex];
        imgLink = necktieColorIMGList[randIndex];

    } else if (categoryName == "Bow Ties") {

        randIndex = Math.floor(Math.random() * bowTieColorList.length);
        color = bowTieColorList[randIndex];
        imgLink = bowTieColorIMGList[randIndex];

    } else if (categoryName == "Tie Tacks") {

        randIndex = Math.floor(Math.random() * tieTackColorList.length);
        color = tieTackColorList[randIndex];
        imgLink = tieTackIMGList[randIndex];

    } else if (categoryName == "Cufflinks") {

        randIndex = Math.floor(Math.random() * cufflinksColorList.length);
        color = cufflinksColorList[randIndex];
        imgLink = cufflinksIMGList[randIndex];

    }

    product.productName = `${color} ${categoryName} ${index}`;
    product.category = category;
    product.description = `This is a ${color} ${categoryName} ${index}`;
    product.inventory = Math.floor(Math.random() * 100) + 1;
    product.price = Math.floor(Math.random() * 100) + 1;
    product.quantity = Math.floor(Math.random() * 100) + 1;
    product.imageURL = imgLink;
    product.category = category;

    productList.push(product);

}

const setCategory = (key, value) => {

    localStorage.setItem("searchStringArray", "");
    localStorage.setItem("category", "");

    localStorage.setItem(key, "");
    localStorage.setItem(key, value);

}

const getCategory = () => {

    return localStorage.getItem("category");

}

const getSearchStringArray = () => {

    let searchString = localStorage.getItem("searchStringArray");
    const searchCategoryArray = [];
    // JSON.parse(searchString);

    if (searchString != null && searchString != "") {
        console.log("I'm in JSON");
        console.log("Something JSON " + JSON.parse(searchString));
        return JSON.parse(searchString);
    }

    return searchCategoryArray;

}


initProductList();

/*
// Product Controller

//development APIs
const addAPI = 'http://localhost:8080/product/add';
const displayAPI = 'http://localhost:8080/product/all';

//production APIs
// const addAPI = 'https://webdemoedward.azurewebsites.net/product/add';
// const displayAPI = 'https://webdemoedward.azurewebsites.net/product/all';

function displayProduct() {
    //fetch data from database using the REST API endpoint from Spring Boot
    fetch(displayAPI)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log("2. receive data")
            console.log(data);

            data.forEach(function (product) {
                const productObj = {
                    id: product.id,
                    productName: product.productName,
                    description: product.description,
                    inventory: product.inventory,
                    quantity: product.quantity,
                    price: product.price,
                    product_url: product.product_url
                };

                //This array consist of 12 objects
                productList.push(productObj);
            });

            //Display all the 12 objects from the productList array
            renderProductPage();
        })
        .catch(function (error) {
            console.log(error);
        });
}

//(3)  Display all products when user launch the product.html page
function renderProductPage() {


    let display = "";


    for (let i = 0; i < productList.length; i++) {
        
        display += `
        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
        <div class="card img-fluid" style="width: 14rem;" id="productCard">
        <a id="item${i + 1}" href="#" data-bs-toggle="modal" data-bs-target="#productModal" onClick="displayDetails(${i + pageStart})">
            <img src=${filteredProductArray[i].imageURL} class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title">${filteredProductArray[i].productName}</h5>
                    <h6 class="card-title">$${filteredProductArray[i].price}</h6>
                </div>
        </a>
        </div>
    </div>
       `
    }

    document.querySelector("#row").innerHTML = display;

} //End of renderProductPage function

function displayDetails(index) {
    //When user clicks on any "More" button, the details of the selected product will be displayed
    document.querySelector("#modalName").innerHTML = filteredProductList[index].productName;
    document.querySelector("#modalDescription").innerHTML = filteredProductList[index].description;
    document.querySelector("#modalPrice").innerHTML = filteredProductList[index].price;
    document.querySelector("#modalImg").src = filteredProductList[index].imageURL;
}

// addProduct(name, description, imageURL, inventory, quantity, price, storeImage)
function addProduct(productName, description, imageURL, inventory, quantity, price, imageObject) {
    // FormData us an Object provided by the Browser API for us to send the data over to the backend
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('imageURL', imageURL);
    formData.append('inventory', inventory);
    formData.append('quantity', quantity);
    formData.append('price', price);
    formData.append('imagefile', imageObject);


    fetch(addAPI, {
        method: 'POST',
        body: formData
    })
        .then(function (response) {
            console.log(response.status); // Will show you the status - 200 ok, 500, 404
            if (response.ok) {
                alert("Successfully Added Product!")
            }
            else {
                alert("Something went wrong. Please try again")
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error adding item to Product")
        });
}

*/




