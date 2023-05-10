
//Start Product List----------------------------------------------------------------
/*
const productList =[];


const necktieColorList = ["red","blue", "purple" , "black" , "green"]
const necktieColorIMGList = ["images/redNeckTie.jpg","images/blueNeckTie.jpg", "images/purpleNeckTie.jpg" , "black" , "green"]

const bowTieColorList = ["red","blue", "purple" , "black" , "green"]
const bowTieColorIMGList = ["images/redNeckTie.jpg","images/blueNeckTie.jpg", "images/purpleNeckTie.jpg" , "black" , "green"]

const tieClipsColorList = ["red","blue", "purple" , "black" , "green"]
const tieClipsColorIMGList = ["images/redNeckTie.jpg","images/blueNeckTie.jpg", "images/purpleNeckTie.jpg" , "black" , "green"]

const cuffLinksColorList = ["red","blue", "purple" , "black" , "green"]
const cuffLinksColorIMGList = ["images/redNeckTie.jpg","images/blueNeckTie.jpg", "images/purpleNeckTie.jpg" , "black" , "green"]


const categoryList = ["NeckTies", "Bow Ties" , "Tie Clips" , "CuffLinks"]
const categoryIDList = ["neckTies_id", "bowTies_id" , "tieClips_id" , "cuffLinks_id"]



const noOfProduct = 21;
const noOfProductPerPage = 10;



const createProductHtml = ()=>{

    //div.innerHTML = ;
    let noOfPages =  Math.floor(productList.length/noOfProductPerPage);
    let lastPage = productList.length % noOfProductPerPage;

    if (lastPage >0 ){
        noOfPages++;
    }

//    console.log(`noOfPages : ${noOfPages}`);
//    console.log(`lastPage : ${lastPage}`);

}

const initProductList = () =>{

    
    for(let i=0; i<noOfProduct; i++){
        createProduct(i);
    }
    
   
    createProductHtml();
   
    console.log(productList);
}

const createProduct = (index) => {
    let product = {};

    let categoryIndex = Math.floor(Math.random() * 3);
    let categoryName = categoryList[categoryIndex]; // change this if you need to hard code the category
    let categoryID = categoryIDList[categoryIndex];
    let category = {};
    category.display = categoryName;
    category.id = categoryID;
    

    let randIndex = 0;
    let color = "";
    let imgLink = ""; 

    if(categoryName == "NeckTies"){
        
        randIndex = Math.floor(Math.random() * necktieColorList.length);
        color = necktieColorList[randIndex];  
          
        imgLink = necktieColorIMGList[randIndex];
    
    }else if(categoryName == "Bow Ties"){



    }
    
    
    let imageURL = imgLink;

    product.id = index;
    product.productname = `${color} ${categoryName} Brand ${index}`;
	product.category =  category;
	product.description =  `This is a ${color} ${categoryName} ${index}`;
	product.inventory = Math.floor(Math.random() * 100) +1;
	product.price = product.inventory = Math.floor(Math.random() * 100) +1;
    product.quantity = product.inventory = Math.floor(Math.random() * 100) +1;
    product.image = imageURL;
    product.category = category;

    productList.push(product);
}

initProductList();

console.log(productList[0].category.display);
console.log(productList[0].category.id);
*/
//End Product List----------------------------------------------------------------


//Start Account List----------------------------------------------------------------
/*
const accountList =[];
const noOfAccounts = 5;

const createAccount = (index) =>{
        let account = {};
        account.name = `Person ${index}`;
        account.email = `123${index}@gmail.com`;
        
        if (index%2 == 0){
            account.role =  `admin`;
        }else{
            account.role =  `normal`;
        }
        
        account.password =  `12345678`;
        accountList.push(account);

}


const initAccountList = () =>{
    for(let i=0; i<noOfAccounts; i++){
        createAccount(i);
    }
    console.log(accountList);
}

initAccountList();
*/
//End Account List----------------------------------------------------------------

//Start Category List----------------------------------------------------------------

const globalCategoryList =[];

const createCategory = (index) =>{
        let category = {};
        category.display = `Neckties`;
        category.id = `neckTies_id`;
        globalCategoryList.push(category);


        category = {};
        category.display = `Bow Ties`;
        category.id = `bowTies_id`;
        globalCategoryList.push(category);

        category = {};
        //category.display = `Tie Clips`;
        category.display = `Tie Tacks`;
        category.id = `tieTacks_id`;
        globalCategoryList.push(category);

        category = {};
        category.display = `Cufflinks`;
        category.id = `cufflinks_id`;
        globalCategoryList.push(category);

/*      
        category = {};
        category.display = `Suspenders`;
        category.id = `suspenders_id`;
        globalCategoryList.push(category);
*/

}

const createNavbarHtml = ()=>{

    let mainNavBarHtml = "";
    let mobileNavBarHtml = "";

    for(let i=0;i<globalCategoryList.length; i++){
        let display = globalCategoryList[i].display;
        let id = globalCategoryList[i].id;

        mobileNavBarHtml += `<li class="mobileNavItems nav-item">
              <a class="nav-link" aria-current="page" href="productListMain.html" onclick="setCategory('category','${id}')">${display}</a>
            </li>`
        
        mainNavBarHtml += `<li class="nav-item mx-4">
            <a class="nav-link" aria-current="page" href="productListMain.html" onclick="setCategory('category','${id}')">${display}</a>
          </li>`;
    }

    document.querySelector(".mainNavbar>ul").innerHTML = mainNavBarHtml;
    document.querySelector(".mobileNavbar>ul").innerHTML = mobileNavBarHtml;
    


}

const initGlobalCategoryList = () =>{

    createCategory(); //create global category list
    //console.log(globalCategoryList);
    createNavbarHtml(); //create Navbar links
}

initGlobalCategoryList();
//End Category List----------------------------------------------------------------

//Start Search----------------------------------------------------------------

const createPatternString = () =>{
    let pattern = "";

    for(let i=0; i< globalCategoryList.length;i++){
        let category = globalCategoryList[i].display;
        let categoryWithoutS = category.slice(0,-1);
        let categoryWithoutSWithoutSpace = categoryWithoutS.replace(" ", "");
        let categoryWithoutSpace = category.replace(" ", "");
        let categoryWithSpaceLink = categoryWithoutS.replace("link", " link");
        let categoryWithSpaceLinks = category.replace("links", " links");
        let categoryWithSpaceTie = categoryWithoutS.replace("tie", " tie");
        let categoryWithSpaceTies = category.replace("ties", " ties");
        pattern += `${category}|${categoryWithoutS}|${categoryWithoutSWithoutSpace}|${categoryWithoutSpace}|${categoryWithSpaceLink}|${categoryWithSpaceLinks}|${categoryWithSpaceTie}|${categoryWithSpaceTies}|`;
        
    }
    pattern = pattern.slice(0,-1);
    return pattern;
}

const getRegExpResult = (query, pattern) =>{
    let regex = new RegExp(pattern, "gi");
    let result = query.match(regex);

    return result;

}
/*
const setCategory = (key , value) => {
    
    localStorage.setItem("searchStringArray", "");
    localStorage.setItem("category", "");
    
    localStorage.setItem(key, "");
    localStorage.setItem(key, value);
    //localStorage.getItem("lastname");
    //console.log("I am here");
    //console.log("localStorage.getItem : " + localStorage.getItem(key));
}


const getCategory = () => {
    return localStorage.getItem("category");
    //console.log("I am here");
}

// const getSearchStringArray = () =>{
//     let searchString = localStorage.getItem('searchStringArray');
//     const searchCategoryArray = JSON.parse(searchString);
//     //console.log(searchCategoryArray); 
    
// }
*/

const replaceWithIDFromGlobalCatList = (result) =>{
    result.forEach((element, index) => {
        console.log(`element : ${element}`);
        

        globalCategoryList.forEach((category) => {
          let catDisplay = category.display.toUpperCase();
          console.log(`catDisplay : ${catDisplay}`);
          
          console.log(catDisplay.replace(" ", ""));
          

          if (element.toUpperCase() == catDisplay || (element + "s").toUpperCase() == catDisplay || (element+"s").toUpperCase() == catDisplay.replace(" ", "")|| element.toUpperCase() == catDisplay.replace(" ", "")+"S"||(element + "s").toUpperCase().replace(" ", "") == catDisplay){
           // console.log("match " + category.id);
            result[index] = category.id;
            //result[index] = category.display;
          }
        });
    });


}

const navigateToProductPage = () =>{

    location.href = "productListMain.html";
}



const setQuery = () =>{

    let query = document.querySelector("#searchInput").value;
//    console.log(query);
    if(query != ""){
        let pattern = createPatternString();

        console.log(`pattern : ${pattern}`);
        let result = getRegExpResult(query,pattern);
        if(result != null){
            
//            console.log(result);
            replaceWithIDFromGlobalCatList(result);
//            console.log(result);

            let resultStr = JSON.stringify(result);
            setCategory('searchStringArray', resultStr);
            navigateToProductPage();

        }else{
            alert ("Can't find the category");
        }
    }else{
        setCategory('searchStringArray', "");
    }

}


// const getSearchStringArray = () =>{
//     let searchString = localStorage.getItem('searchStringArray');
//     const searchCategoryArray = JSON.parse(searchString);
//     //console.log(searchCategoryArray); 
    
// }



//End Search----------------------------------------------------------------
