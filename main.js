document.write("<p>The end!!!</p>")

const tableBody = document.getElementById('table-body')
tableBody.innerHTML  += ` <tr class="table-primary">
<th scope="row">0</th>
<td>Test</td>
<td>Lorem ipsum dolor sit amet consectetur.</td>
<td>777$</td>
</tr>`

const createBtn = document.getElementById('create-btn')
createBtn.onclick= ()=>{
    console.log("On click worked")
}