import { useState } from "react";
import useCrudCart from "../../hooks/useCrudCard";
import "./styles/productIdInfo.css";

const ProductIdInfo = ({ product }) => {
  const [quatity, setQuatity] = useState(1);

  const { addProductToCart } = useCrudCart();

  const handlePlus = () => {
    setQuatity(quatity + 1);
  };

  const handleMinus = () => {
    if (quatity - 1 >= 1) {
      setQuatity(quatity - 1);
    }
  };

  const handleAddToCart = () => {
    const data = {
      quantity: quatity,
      productId: product.id,
    };
    addProductToCart(data);
  };

  return (
    <section className="productIdInfo__container">
      <h3 className="productIdInfo__subtitle">{product?.brand}</h3>
      <h2 className="productIdInfo__title">{product?.title}</h2>
      <p className="productIdInfo__description">{product?.description}</p>
      <footer className="productIdInfo__footer">
        <div className="productIdInfo__price">
          <span className="productIdInfo__label-p">Price</span>
          <span className="productIdInfo__value-p">{product?.price}</span>
        </div>
        <div className="productIdInfo__quantity">
          <span>Quatity</span>
          <div className="productIdInfo__btns">
            <button onClick={handleMinus}>-</button>
            <button className="productIdInfo__btn-quant">{quatity}</button>
            <button onClick={handlePlus}>+</button>
          </div>
        </div>
        <button className="productIdInfo__btn-cart" onClick={handleAddToCart}>
          Add to Cart <i className="bx bxs-cart-add"></i>
        </button>
      </footer>
    </section>
  );
};

export default ProductIdInfo;
