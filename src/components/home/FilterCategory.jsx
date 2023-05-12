import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import "./styles/filterCategory.css";

const FilterCategory = () => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories";

  const [categories, getAllCategories] = useFetch(url);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleClickCategories = (id) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
    dispatch(getAllProductsThunk(url));
  };

  const handleClickAllProducts = () => {
    dispatch(getAllProductsThunk());
  };

  return (
    <details className="filterCatergory">
      <summary className="filterCatergory__title">Category:</summary>
      <article className="filterCatergory__container">
        <ul className="filterCatergory__list-complete">
          <li
            className="filterCatergory__list"
            onClick={handleClickAllProducts}
          >
            All Products
          </li>
          {categories?.map((category) => (
            <li
              className="filterCatergory__list"
              onClick={() => handleClickCategories(category.id)}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </article>
    </details>
  );
};

export default FilterCategory;
