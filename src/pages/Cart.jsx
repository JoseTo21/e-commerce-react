import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCartThunk } from "../store/slices/cart.slice";
import ProductsInCart from "../components/cart/ProductsInCart";
import "./styles/cart.css";
import usePurchases from "../hooks/usePurchases";

const Cart = () => {
  const dispatch = useDispatch();

  const { buyThisCart } = usePurchases();

  useEffect(() => {
    dispatch(getAllProductsCartThunk());
  });

  const { cartGlobal } = useSelector((state) => state);

  const totalPriceCart = cartGlobal?.reduce(
    (acc, cv) => acc + cv.quantity * cv.product.price,
    0
  );

  const handlePurchase = () => {
    buyThisCart();
  };

  return (
    <div className="cart">
      <h2 className="cart__title">My Cart</h2>
      <div className="cart__container">
        {cartGlobal?.map((prodCart) => (
          <ProductsInCart key={prodCart.id} prodCart={prodCart} />
        ))}
      </div>
      <footer className="cart__footer">
        <span className="cart__total-label">Total:</span>
        <h3 className="cart__total-value">{totalPriceCart}</h3>
        <button onClick={handlePurchase} className="cart__btn">
          Buy Now!
        </button>
      </footer>
    </div>
  );
};

export default Cart;
