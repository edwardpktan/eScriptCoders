
// Start of Product List
const productList = [];

const necktieColorList = ["Gold", "Pink", "Blue", "Black", "Maroon", "Red", "Silver", "Grey", "Cream", "Grey Skinny", "Silver Skinny", "Cream Skinny", "Purple Skinny", "Pink Skinny", "Red Skinny", "Maroon Skinny", "Black Skinny", "Blue Skinny"];
const necktieColorIMGList = ["images/TRSL0002sq.jpg", "images/TRSL0003sq.jpg", "images/TRSL0004sq.jpg", "images/TRSL0005sq.jpg", "images/TRSL0006sq.jpg", "images/TRSL0007sq.jpg", "images/TRSL0008sq.jpg", "images/TRSL0009sq.jpg", "images/TRSL0010sq.jpg", "images/TSSL0001sq.jpg", "images/TSSL0002sq.jpg", "images/TSSL0003sq.jpg", "images/TSSL0004sq.jpg", "images/TSSL0005sq.jpg", "images/TSSL0006sq.jpg", "images/TSSL0007sq.jpg", "images/TSSL0008sq.jpg", "images/TSSL0009sq.jpg",];

const bowTieColorList = ["Blue", "Silver", "Black"];
const bowTieColorIMGList = ["images/BTPL0001sq.jpg", "images/BTPL0002sq.jpg", "images/BTPL0003sq.jpg"];

const tieTackColorList = ["Silver", "Pink", "Blue", "Silver Crystal", "Pink Crystal", "Blue Crystal"];
const tieTackIMGList = ["images/TTAC0001sq.jpg", "images/TTAC0002sq.jpg", "images/TTAC0003sq.jpg", "images/TTAC0004sq.jpg", "images/TTAC0005sq.jpg", "images/TTAC0006sq.jpg"];

const cufflinksColorList = ["Mother of Pearl Square", "Black Onyx Square", "Mother of Pearl Rectangle", "Black Onyx Rectangle", "Mother of Pearl Hexagon", "Black Onyx Hexagon", "Clear Crystal Pavé Bezel", "Black Crystal Pavé Bezel", "Blue Crystal Pavé Bezel", "Pink Crystal Pavé Bezel", "Purple Crystal Pavé Bezel", "Clear Crystal Square", "Black Crystal Square"];
const cufflinksIMGList = ["images/CUFF0001sq.jpg", "images/CUFF0002sq.jpg", "images/CUFF0003sq.jpg", "images/CUFF0004sq.jpg", "images/CUFF0019sq.jpg", "images/CUFF0018.jpg", "images/CUFF0023sq.jpg", "images/CUFF0022sq.jpg", "images/CUFF0025sq.jpg", "images/CUFF0023sq.jpg", "images/CUFF0026sq.jpg", "images/CUFF0024sq.jpg", "images/CUFF0028sq.jpg"];

const categoryList = ["NeckTies", "Bow Ties", "Tie Tacks", "Cufflinks"];
const categoryIDList = ["neckTies_id", "bowTies_id", "tieTacks_id", "cufflinks_id"];

const noOfProduct = 11;
const noOfProductPerPage = 10;

const createProductHtml = (filteredProductArray) => {
    //div.innerHTML = ;


    let noOfPages = Math.floor(productList.length / noOfProductPerPage);
    let lastPage = productList.length % noOfProductPerPage;
    if (lastPage > 0) {

        noOfPages++;
    }
    //    console.log(`noOfPages : ${noOfPages}`);
    //    console.log(`lastPage : ${lastPage}`);

    let display = "";

    for (let i = 0; i < filteredProductArray.length; i++) {

        display += `
        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
            <div class="card img-fluid" style="width: 14rem;">
            <a href="productpage/product.html">
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
}

const filterProduct = (categoryID) => {
    console.log("cat ID" + categoryID);
    const filteredProductArray = productList.filter((product) => {
        console.log("product.category.categoryID" + product.category.id);
        return product.category.id == categoryID;

    });
    console.log("filter product" + filteredProductArray);
    return filteredProductArray;

}

const filterProductSearchString = (searchStringArray) => {

    let stringArray = [];
    console.log("searchStringArray " + searchStringArray.length);
    for (let i = 0; i < searchStringArray.length; i++) {
        
        
        let searchString = searchStringArray[i];
        console.log("search String " +searchString);
        stringArray = stringArray.concat(filterProduct(searchString));
        

    }
    return stringArray;
}

const initProductList = () => {

    // setCategory("category", "bowTies_id");
    // let stringArray = ["bowTies_id", "neckTies_id"];
    // let stringA = JSON.stringify(stringArray);

    // setCategory("searchStringArray", stringA);

    for (let i = 0; i < noOfProduct; i++) {

        createProduct(i);
    }
    
    let searchStringArray = getSearchStringArray();
    let categoryString = getCategory();

    if (searchStringArray != null && searchStringArray != "") {
        console.log("get search: " + searchStringArray);

        createProductHtml(filterProductSearchString(searchStringArray));
    } else if (categoryString != null && categoryString != "") {
        createProductHtml(filterProduct(categoryString));
    } else {
        createProductHtml(productList);
        console.log("I'm hereee");
    }

    console.log(productList);

}

const createProduct = (index) => {

    let product = {};

    let categoryIndex = Math.floor(Math.random() * categoryList.length);
    // let categoryIndex = 0;
    let categoryName = categoryList[categoryIndex]; // change this if you need to hard code the category
    let categoryID = categoryIDList[categoryIndex];
    let category = {};
    category.display = categoryName;
    category.id = categoryID;

    let randIndex = 0;
    let color = "";
    let imgLink = "";

    if (categoryName == "NeckTies") {

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
    product.price = product.inventory = Math.floor(Math.random() * 100) + 1;
    product.quantity = product.inventory = Math.floor(Math.random() * 100) + 1;
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
