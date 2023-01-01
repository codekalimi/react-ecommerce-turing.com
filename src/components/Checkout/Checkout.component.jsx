import "./Checkout.style.scss";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import CheckoutItemComponent from "./CheckoutItem.component";

const CheckoutComponent = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItemComponent key={item.id} cartItem={item} />;
      })}
      <span className="total">Total: 0</span>
    </div>
  );
};
export default CheckoutComponent;