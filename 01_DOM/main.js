document.write("<p>The end!!!</p>")

const tableBody = document.getElementById('table-body')
const createBtn = document.getElementById('create-btn')

const deleteBtn = document.getElementById('delete-btn')

let product=[];

deleteBtn.onclick = () => {
   product = [];
   tableBody.innerHTML="";
}
// createBtn.onclick = () => {
//     //console.log("On click worked")
//     tableBody.innerHTML  += ` <tr class="table-primary">
//     <th scope="row">${}</th>
//     <td>${}</td>
//     <td>${}</td>
//     <td>${}$</td>
//     </tr>`
// }
createBtn.onclick = (event) => {
   event.preventDefault();
       //console.log("On click worked")
       const newProduct = getProductFromForm();
       product.push(newProduct)
       addProductToTable(newProduct)

      
   }
function getProductFromForm() {
   const modelBtn = document.getElementById('model-input');
   const descBtn = document.getElementById('desc-input');
   const priceBtn = document.getElementById('price-input');

   return {
      id:product.length+1,
      model: modelBtn.value,
      description : descBtn.value,
      price: + priceBtn.value
   }
}

function addProductToTable(product)
{
   tableBody.innerHTML  += 
   `<tr class="table-primary">
   <th scope="row">${product.id}</th>
   <td>${product.model}</td>
   <td>${product.description}</td>
   <td>${product.price}</td>
 </tr>`
}