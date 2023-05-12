import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProducts from "../home/CardProducts";
import "./styles/similarProducts.css";

const SimilarProducts = ({ product }) => {
  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`;

  const [filterProducts, getProductByCategory] = useFetch(url);

  useEffect(() => {
    if (product) {
      getProductByCategory();
    }
  }, [product]);

  return (
    <section className="similarProducts__container">
      <h2>Discover Similar Products</h2>
      <div className="similarCards__container">
        {filterProducts?.map((prod) => {
          if (prod.id !== product.id) {
            return <CardProducts key={prod.id} product={prod} />;
          }
        })}
      </div>
    </section>
  );
};

export default SimilarProducts;
