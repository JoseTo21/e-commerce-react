import "./styles/productPurchases.css";

const ProductPurchases = ({ prodPurchase }) => {
  return (
    <article className="prodpurchase">
      <img
        className="prodpurchase__img"
        src={prodPurchase.product.images[0].url}
      />
      <h3 className="prodpurchase__title">{prodPurchase.product.title}</h3>
      <span className="prodpurchase__quantity">{prodPurchase.quantity}</span>
      <span className="prodpurchase__price">
        {prodPurchase.quantity * prodPurchase.product.price}
      </span>
    </article>
  );
};

export default ProductPurchases;
