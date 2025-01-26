import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CardItem from "../components/CardItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "asdfdfd",
    photo: "https://igotoffer.com/apple/wp-content/uploads/2017/05/macbook-12-inch-early-2016.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setValidCouponCode(true);
      else setValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
      setValidCouponCode(false);
    };
  }, []);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <div>
              <CardItem key={idx} cartItem={i} />
            </div>
          ))
        ) : (
          <h1>Not Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal : ₹ {subtotal}</p>
        <p>Shipping Charges: ₹ {shippingCharges}</p>
        <p>Tax: ₹ {tax}</p>
        <p>
          Discount:<em className="red">-₹ {discount}</em>
        </p>
        <p>
          <b>Total: ₹ {total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              R{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
