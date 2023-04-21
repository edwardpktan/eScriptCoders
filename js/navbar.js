
//Start Product List----------------------------------------------------------------
/*
const productList =[];


const colorList = ["red","blue", "purple" , "black" , "green"]
const categoryList = ["NeckTies", "Bow Ties" , "Tie Clips" , "CuffLinks"]

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

    let color = colorList[Math.floor(Math.random() * 4)];
    let category = categoryList[Math.floor(Math.random() * 3)]; // change this if you need to hard code the category


    product.productname = `${color} ${category} ${index}`;
	product.category =  category;
	product.description =  `This is a ${color} ${category} ${index}`;
	product.inventory = Math.floor(Math.random() * 100) +1;
	product.price = product.inventory = Math.floor(Math.random() * 100) +1;
    product.quantity = product.inventory = Math.floor(Math.random() * 100) +1;
    product.image = "image/tiered.jpg";
    productList.push(product);
}

initProductList();
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
        category.id = `neckTies`;
        globalCategoryList.push(category);


        category = {};
        category.display = `Bow Ties`;
        category.id = `bowTies`;
        globalCategoryList.push(category);

        category = {};
        category.display = `Tie Clips`;
        category.id = `tieClips`;
        globalCategoryList.push(category);

        category = {};
        category.display = `Cufflinks`;
        category.id = `cuffLinks`;
        globalCategoryList.push(category);

}

const createNavbarHtml = ()=>{

    let mainNavBarHtml = "";
    let mobileNavBarHtml = "";

    for(let i=0;i<globalCategoryList.length; i++){
        let display = globalCategoryList[i].display;
        let id = globalCategoryList[i].id;

        mobileNavBarHtml += `<li class="mobileNavItems nav-item">
              <a class="nav-link" aria-current="page" href="productListMain.html" onclick="setCategory('category','${display}')">${display}</a>
            </li>`
        
        mainNavBarHtml += `<li class="nav-item mx-4">
            <a class="nav-link" aria-current="page" href="productListMain.html" onclick="setCategory('category','${display}')">${display}</a>
          </li>`;
    }

    document.querySelector(".mainNavbar>ul").innerHTML = mainNavBarHtml;
    document.querySelector(".mobileNavbar>ul").innerHTML = mobileNavBarHtml;

}

const initGlobalCategoryList = () =>{

    createCategory(); //create global category list
    console.log(globalCategoryList);
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
        pattern += `${category}|${categoryWithoutS}|`;
    }
    pattern = pattern.slice(0,-1);
    return pattern;
}

const getRegExpResult = (query, pattern) =>{
    let regex = new RegExp(pattern, "gi");
    let result = query.match(regex);

    return result;

}

const setCategory = (key , value) => {
    
    localStorage.setItem("searchStringArray", "");
    localStorage.setItem("category", "");
    
    localStorage.setItem(key, "");
    localStorage.setItem(key, value);
    //localStorage.getItem("lastname");
    //console.log("I am here");
    //console.log("localStorage.getItem : " + localStorage.getItem(key));
}

const replaceWithIDFromGlobalCatList = (result) =>{
    result.forEach((element, index) => {
        globalCategoryList.forEach((category) => {
          let catDisplay = category.display.toUpperCase();
          if (element.toUpperCase() == catDisplay || (element + "s").toUpperCase() == catDisplay){
           // console.log("match " + category.id);
            result[index] = category.id;
          }
        });
    });


}
const setQuery = () =>{

    let query = document.querySelector("#searchInput").value;
    //console.log(query);
    if(query != ""){
        let pattern = createPatternString();
        let result = getRegExpResult(query,pattern);
        if(result != null){
            //replaceWithIDFromGlobalCatList(result);
            console.log(result);


            let resultStr = JSON.stringify(result);
            setCategory('searchStringArray', resultStr);
        }else{
            alert ("Can't find the category");
        }
    }else{
        setCategory('searchStringArray', "");
    }

}

const getSearchStringArray = () =>{
    let searchString = localStorage.getItem('searchStringArray');
    const searchCategoryArray = JSON.parse(searchString);
    //console.log(searchCategoryArray); 
    
}


//End Search----------------------------------------------------------------
