//varibles Globales
let products = []

const editName = document.getElementById('editProductName')
const editPrice = document.getElementById('editProductPrice')
const editDescription = document.getElementById('editProductDescription')
const editImage = document.getElementById('editProductImage')
let selectedProduct;



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
             <button class="delete-btn" onclick="openDeleteModal('${product._id}')">Borrar</button>
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
    selectedProduct = products.find((pr)=> pr._id === productId)
    document.getElementById('editProductModal').style.display = 'block';
    editName.value = selectedProduct.name  
    editPrice.value = selectedProduct.price
    editDescription.value = selectedProduct.description
    editImage.value = selectedProduct.image
    }


    function openDeleteModal(productId) {
        selectedProduct = products.find((pr)=> pr._id === productId)
        document.getElementById('deleteModal').style.display = 'block';
        }

    // Función para confirmar la eliminación
    function confirmDelete() {
        fetch("http://localhost:3000/api/product",{
            method: "DELETE",
            body:JSON.stringify({
                productId: selectedProduct._id
            }),
            headers:{
                "Content-Type": "application/json",
            }
        }).then(()=>{
            alert("Producto Eliminado")
        })
        .catch(()=>{
            alert("Error al eliminar el Producto")
        })
        closeDeleteModal();
        }    


function closeDeleteModal() {
        document.getElementById('deleteModal').style.display = 'none';
    }

    
function closeEditModal() {
    document.getElementById('editProductModal').style.display = 'none';
    }

    function updateProduct(){
        fetch("http://localhost:3000/api/product",{
            method: "PUT",
            body:JSON.stringify({
                name:editName.value,
                price:editPrice.value,
                description:editDescription.value,
                image:editImage.value,
                productId: selectedProduct._id
            }),
            headers:{
                "Content-Type": "application/json",
            }
        }).then(()=>{
            alert("Producto Actualizado")
        })
        .catch(()=>{
            alert("Error al actualizar el Producto")
        })
    }