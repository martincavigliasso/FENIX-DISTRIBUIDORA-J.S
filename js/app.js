


const contenedorProductos = document.getElementById('contenedor-productos');
const buscador = document.getElementById('search')


buscador.addEventListener('input', ()=>{
    mostrarProductos(stockProductos.filter(item=> item.nombre.toUpperCase().includes( buscador.value.toUpperCase())))
})

mostrarProductos(stockProductos)

function mostrarProductos(array){
    contenedorProductos.innerHTML= ""
    
   array.forEach(item => {

       let div = document.createElement('div')
       div.classList.add('producto')
    div.innerHTML += `
                    <div class="card" >
                        <div class="card-image">
                            <img src=${item.img}>
                            <span class="card-title" id="${item.id}">${item.nombre}</span>
                            <a  id="agregar${item.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${item.desc}</p>
                            
                            <p> $${item.precio}</p>
                        </div>
                    </div>
    `
    contenedorProductos.appendChild(div)

        let nombreDetalle = document.getElementById(`${item.id}`)
        nombreDetalle.addEventListener('click',()=>{
            let guardarLS = stockProductos.find(elemento => elemento.id == item.id)
            localStorage.setItem('producto', JSON.stringify(guardarLS))
            
        })

        let btnAgregar = document.getElementById(`agregar${item.id}`)
        btnAgregar.addEventListener('click',()=>{
           agregarAlCarrito(item.id)
        })

   })
}






