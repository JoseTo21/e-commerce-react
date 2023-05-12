import { useNavigate } from "react-router-dom";
import "./styles/cardProducts.css";
import useCrudCart from "../../hooks/useCrudCard";

const CardProducts = ({ product }) => {
  const navigate = useNavigate();

  const { addProductToCart } = useCrudCart();

  const handleSelectProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBtnClick = (e) => {
    e.stopPropagation();
    const data = {
      quantity: 1,
      productId: product.id,
    };
    addProductToCart(data);
  };

  return (
    <article onClick={handleSelectProduct} className="product">
      <header className="product__header">
        <img
          className="product__img product__img-1"
          src={product.images[0].url}
          alt=""
        />
        <img
          className="product__img product__img-2"
          src={product.images[1].url}
          alt=""
        />
      </header>
      <div className="product__body">
        <section className="product__section">
          <h4>{product.brand}</h4>
          <h3>{product.title}</h3>
        </section>
        <div className="product__price">
          <span className="product__price-label">Price</span>
          <span className="product__price-value">{product.price}</span>
        </div>
        <button onClick={handleBtnClick} className="product__btn">
          <i className="bx bxs-cart-add"></i>
        </button>
      </div>
    </article>
  );
};

export default CardProducts;
