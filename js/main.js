// Get the form element
const form = document.querySelector('form');
const createDropDown = () => {

  //  <option value="">Please Select</option>
  // <option value="neckties">Neck Ties</option>
  // <option value="bowties">Bow Ties</option>
  // <option value="Tie Clips">Tie Clips</option>
  // <option value="cufflinks">Cuff Links</option> 

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

// Listen for the form submission event
let button = document.querySelector("#savebutton");
button.addEventListener('click', function (e) {
  e.preventDefault(); // prevent form submission
  
  // Get the product details from the form
  const category = document.getElementById('cate').value;
  const name = document.getElementById('product').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const price = parseFloat(document.getElementById('exampleInputEmail1').value);
  const description = document.getElementById('exampleInput').value;

  // Check if the quantity is valid
  if (quantity <= 0) {
    alert('Quantity must be greater than 0');
    return;
  } else if (quantity > 50) {
    alert('Quantity cannot exceed 50');
    return;
  }

  // Create a new product object
  const product = {
    category,
    name,
    quantity,
    price,
    description,
  };

  // Get the existing products from localStorage
  let products = JSON.parse(localStorage.getItem('products')) || [];

  // Check if the product already exists
  const index = products.findIndex((p) => p.name === product.name);

  if (index === -1) {
    // Add the new product to the array
    products.push(product);
  } else {
    // Update the quantity of the existing product
    products[index].quantity += product.quantity;
  }

  // Save the products to localStorage
  localStorage.setItem('products', JSON.stringify(products));

  // Show a success message
  alert('Product saved successfully!');
  
  // Clear the form
  form.reset();
});