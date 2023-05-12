// // Get the form element
// const form = document.querySelector('form');
const createDropDown = () => {

//   //  <option value="">Please Select</option>
//   // <option value="neckties">Neck Ties</option>
//   // <option value="bowties">Bow Ties</option>
//   // <option value="Tie Clips">Tie Clips</option>
//   // <option value="cufflinks">Cuff Links</option> 

 let dropDown = document.querySelector("#cate");
 let cateHTML = "<option value=''>Please Select</option>";
 
 console.log(globalCategoryList);
 
 for(let i=0;i<globalCategoryList.length; i++){
  let display = globalCategoryList[i].display;
  let id = globalCategoryList[i].id;

  cateHTML += `<option value="${id}">${display}</option>`

  
  
 }
  dropDown.innerHTML =  cateHTML;
 //console.log(dropDown.innerText);

}

createDropDown();

// // Listen for the form submission event
// let button = document.querySelector("#savebutton");
// button.addEventListener('click', function (e) {
//   e.preventDefault(); // prevent form submission
  
//   // Get the product details from the form
//   const category = document.getElementById('cate').value;
//   const name = document.getElementById('product').value;
//   const quantity = parseInt(document.getElementById('quantity').value);
//   const price = parseFloat(document.getElementById('exampleInputEmail1').value);
//   const description = document.getElementById('exampleInput').value;

  // Check if the quantity is valid
  
  // if (quantity <= 0) {
  //   alert('Quantity must be greater than 0');
  //   return;
  // } else if (quantity > 50) {
  //   alert('Quantity cannot exceed 50');
  //   return;
  // }
   
  

//   
//Global variable - to store the image object
let storeImage = ""


//When user clicks on 'Save Item', calls API to add items to the database
//1)store all the inputs into variables
//2)do validation
//calls a function from the productController.js to access the API to add items to the Database
//3)Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {


   // Prevent default action of the Form submission
   event.preventDefault();
   // Select the inputs
   const category = document.getElementById('cate').value;
   const productName = document.querySelector('#newItemNameInput ').value;
   const description = document.querySelector('#newItemDescription').value;

   //Browser security will not be able to track/store the actual path of where you choose your image
   //C:/user/Desktop/t-shirt_new.jpg
   //C:\\fakepath\\t-shirt_new.jpg
   const imageURL = document.querySelector('#newItemImageFile').value.replace("C:\\fakepath\\", "");
   const quantity = document.querySelector('#quantity').value;
   const price = document.querySelector('#newItemPrice').value;


   
       if (quantity <= 0) {
    alert('Quantity must be greater than 0');
    return;
  } else if (quantity > 10) {
    alert('Quantity cannot exceed 10');
    return;
  }
   


  //3) calls a function from the productController.js to access the API to add items to the Database
   addProduct(productName, description, imageURL, inventory, quantity, price, imageobject); //arguments


});


// select file input
const input = document.querySelector('#newItemImageFile');


// add event listener
input.addEventListener('change', () => {
   storeImage = input.files[0];  //array of files for us to access
});
