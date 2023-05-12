import { useSelector } from "react-redux";
import CardProducts from "../components/home/CardProducts";
import { useRef, useState } from "react";
import FilterCategory from "../components/home/FilterCategory";
import FilterByPrice from "../components/home/FilterByPrice";
import "./styles/home.css";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const [filterClose, setFilterClose] = useState(true);

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const { productsGlobal } = useSelector((state) => state);

  const input = useRef();

  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim());
  };

  const productFilter = productsGlobal
    ?.filter((product) => product.title.toLowerCase().includes(inputValue))
    .filter((product) => {
      const from = +fromTo.from;
      const to = +fromTo.to;
      const price = +product.price;
      if (from && to) {
        return from <= price && price <= to;
      }
      if (from && !to) {
        return from <= price;
      }
      if (!from && to) {
        return price <= to;
      }
      if (!from && !to) {
        return true;
      }
    });

  const handleOpenFilters = () => {
    setFilterClose(false);
  };

  const handleExit = () => {
    setFilterClose(true);
  };

  return (
    <div id="home" className="home__container">
      <aside className={`filters ${filterClose ? "close" : ""}`}>
        <i onClick={handleExit} className="bx bxs-x-circle"></i>
        <FilterCategory />
        <FilterByPrice setFromTo={setFromTo} />
      </aside>

      <div className="filter__on">
        <button onClick={handleOpenFilters}>
          <i className="bx bx-filter-alt"></i>
          <h5>Filters</h5>
        </button>
      </div>

      <div className="cards-search">
        <input
          className="search"
          ref={input}
          onChange={handleChangeInput}
          type="text"
          placeholder="What are you looking for?"
        />
        <div className="cards__container">
          {productFilter?.map((product) => (
            <CardProducts key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
