import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type CardItemProps = {
  cartItem: CartItem;
  incrementHandler: (cartItem: CartItem) => void; 
  decrementHandler: (cartItem: CartItem) => void; 
  removeHandler: (id: string) => void; 
};

const CardItem = ({ cartItem, incrementHandler, decrementHandler, removeHandler }: CardItemProps) => {
  
  const { photo, productId, name, price, quantity } = cartItem;

  return (
    <div className="cardItem">
      <img src={`${server}/${photo}`} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>R {price}</span>
      </article>
      <div>
        <button onClick={() => decrementHandler(cartItem)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler(cartItem)}>+</button>
      </div>
      <button onClick={()=> removeHandler(productId)}>
        <FaTrash/>
      </button>
    </div>
  );
};

export default CardItem;
