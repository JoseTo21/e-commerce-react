import { useForm } from "react-hook-form";
import "./styles/filterPrice.css";

const FilterByPrice = ({ setFromTo }) => {
  const { reset, register, handleSubmit } = useForm();

  const subit = (data) => {
    setFromTo(data);
    reset({
      from: "",
      to: "",
    });
  };

  return (
    <details className="filterprice">
      <summary className="filterprice__title">Price:</summary>
      <article className="filterprice__container">
        <form className="filterprice__form" onSubmit={handleSubmit(subit)}>
          <div className="filterprice__from">
            <label htmlFor="from">From: </label>
            <input
              {...register("from")}
              type="number"
              id="from"
              placeholder="$"
            />
          </div>
          <div className="filterprice__to">
            <label htmlFor="to">To: </label>
            <input {...register("to")} type="number" id="to" placeholder="$" />
          </div>
          <button className="filterprice__btn">Filter Price</button>
        </form>
      </article>
    </details>
  );
};

export default FilterByPrice;
