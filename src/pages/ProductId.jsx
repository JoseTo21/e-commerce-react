import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductIdInfo from "../components/productId/ProductIdInfo";
import SlidersImgs from "../components/productId/SlidersImgs";
import SimilarProducts from "../components/productId/SimilarProducts";
import "./styles/productid.css";

const ProductId = () => {
  const { id } = useParams();

  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`;

  const [product, getProductById] = useFetch(url);

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <div className="productid__container">
      <div className="slider__product">
        <SlidersImgs product={product} />
        <ProductIdInfo product={product} />
      </div>
      <SimilarProducts product={product} />
    </div>
  );
};

export default ProductId;
