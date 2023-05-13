
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

//getCategorys();

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
