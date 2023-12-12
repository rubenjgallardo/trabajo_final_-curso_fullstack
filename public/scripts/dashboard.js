//varibles Globales
let products = []

const nombreEdit = document.getElementById('editProductName')
const editPrice = document.getElementById('editProductPrice')
const editDescription = document.getElementById('editProductDescription')
const editImage = document.getElementById('editProductImage')




fetch("http://localhost:3000/api/product").then(async (data)=>{
    const productList = document.getElementById("list-products")
    products = await data.json()
    products.forEach((product) => {
        console.log("product", product)
        productList.innerHTML += `
            <li>
                <img src="${product.image}" alt="">
             ${product.name} - Precio: ${product.price}
             <button class="edit-btn" onclick="openEditModal('${product._id}')">Editar</button>
             <button class="delete-btn" onclick="openDeleteModal()">Borrar</button>
            </li>
        `
    })
})



const createProduct = ()=>{
    const nombre = document.getElementById("productName")
    const price = document.getElementById("productPrice")
    const description = document.getElementById("productDescription")
    const image = document.getElementById("productImage")

    fetch("http://localhost:3000/api/product",{
        method: "POST",
        body:JSON.stringify({
            name:nombre.value,
            price:price.value,
            description:description.value,
            image:image.value
        }),
        headers:{
            "Content-Type": "application/json",
        }
    }).then(()=>{
        alert("Producto Creado")
    }).catch(()=>{
        alert("Error al crear el Producto")
    })
}

function openEditModal(productId) {
    console.log("productId", productId)
    const product = products.find((pr)=> pr._id === productId)
    document.getElementById('editProductModal').style.display = 'block';
    nombreEdit.value = product.name  
    editPrice.value = product.price
    editDescription.value = product.description
    editImage.value = product.image
    }


    function updateProduct(){
        fetch("http://localhost:3000/api/product",{
            method: "POST",
            body:JSON.stringify({
                
            })
        })
    }