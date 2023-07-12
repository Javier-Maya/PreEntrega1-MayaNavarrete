import { useState } from "react";
import Button from 'react-bootstrap/Button';

function CartWidget(){
  const [items, setItems]= useState(0);

  const sumarItem = ()=>{ setItems(items + 1) }
  const restarItem = ()=>{ 
      if(items>0){
          setItems(items-1)
      }
      else{
          setItems(items+0)
      }
  }
  
  return(
    <div>
      <div className="cart">
        <svg viewBox="0 0 24 24" fill="currentColor" height="2em" width="2em">
        <path d="M21.822 7.431A1 1 0 0021 7H7.333L6.179 4.23A1.994 1.994 0 004.333 3H2v2h2.333l4.744 11.385A1 1 0 0010 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 00-.115-.921z" />
        <path d="M12 19.5 A1.5 1.5 0 0 1 10.5 21 A1.5 1.5 0 0 1 9 19.5 A1.5 1.5 0 0 1 12 19.5 z" />
        <path d="M19 19.5 A1.5 1.5 0 0 1 17.5 21 A1.5 1.5 0 0 1 16 19.5 A1.5 1.5 0 0 1 19 19.5 z" />
        </svg> <p>Productos en el carrito:</p> {items}
      </div>
      <div className="botones">
        <Button onClick={sumarItem}>AGREGAR ARTÍCULO AL CARRITO</Button>
        <Button onClick={restarItem}>ELIMINAR ARTÍCULO DEL CARRITO</Button>
      </div>
    </div>
  )
}

export default CartWidget;