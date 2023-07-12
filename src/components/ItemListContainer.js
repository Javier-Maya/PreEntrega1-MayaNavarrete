const ItemListContainer = ( { Producto, Precio, Descripcion, Imagen }  ) => {
    return (
        <div className="cardProductos">
            <div className="">
                <img className="imagenProducto" src={Imagen} alt="Imagen del producto"/>
            </div>
            <div className="textoEnCard">
                <p>{Producto}</p>
                <p>$ {Precio}</p>
                <p>{Descripcion}</p>
            </div>
     </div>
    )
}

export default ItemListContainer;