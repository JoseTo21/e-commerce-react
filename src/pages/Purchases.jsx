import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchases from "../components/purchases/ProductPurchases";
import "./styles/purchases.css";

const Purchases = () => {
  const { purchases, getAllProductsPurchased } = usePurchases();

  useEffect(() => {
    getAllProductsPurchased();
  }, []);

  return (
    <div className="purchases">
      <h2 className="purchases__title">My Purchases</h2>
      <div className="purchases__container">
        {purchases?.map((prodPurchase) => (
          <ProductPurchases key={prodPurchase.id} prodPurchase={prodPurchase} />
        ))}
      </div>
    </div>
  );
};

export default Purchases;
