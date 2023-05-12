import useCrudCart from "../../hooks/useCrudCard";
import "./styles/productInCart.css";

const ProductsInCart = ({ prodCart }) => {
  const { deleteProductFromCart } = useCrudCart();

  const handleDeleteCart = () => {
    deleteProductFromCart(prodCart.id);
  };

  return (
    <article className="prodcart">
      <header className="prodcart__header">
        <img className="prodcart__img" src={prodCart.product.images[2].url} />
      </header>
      <h3 className="prodcart__title">{prodCart.product.title}</h3>
      <button className="prodcart__delete" onClick={handleDeleteCart}>
        <i className="bx bxs-trash"></i>
      </button>
      <footer className="prodcart__footer">
        <span className="prodcart__quantity">{prodCart.quantity}</span>
        <div className="prodcart__subtotal">
          <span className="prodcart__subtotal-label">Subtotal:</span>
          <span className="prodcart__subtotal-value">
            {prodCart.product.price * prodCart.quantity}
          </span>
        </div>
      </footer>
    </article>
  );
};

export default ProductsInCart;
