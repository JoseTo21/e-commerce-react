import { useState } from "react";
import "./styles/sliderImgs.css";

const SlidersImgs = ({ product }) => {
  const [numberImg, setNumberImg] = useState(0);

  const objStyle = {
    transform: `translateX(calc(-${numberImg} / 3 * 100%))`,
  };

  const handlePrevious = () => {
    if (numberImg - 1 < 0) {
      setNumberImg(2);
    } else {
      setNumberImg(numberImg - 1);
    }
  };

  const handleNext = () => {
    if (numberImg + 1 > 2) {
      setNumberImg(0);
    } else {
      setNumberImg(numberImg + 1);
    }
  };

  return (
    <div className="slider">
      <button
        onClick={handlePrevious}
        className="slider__arrowhead slider__left"
      >
        &lt;
      </button>
      <div style={objStyle} className="slider__interior">
        {product?.images.map((imgInfo) => (
          <div key={imgInfo.id} className="slider__img-container">
            <img className="slider__img" key={imgInfo.id} src={imgInfo.url} />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="slider__arrowhead slider__rigth">
        &gt;
      </button>
    </div>
  );
};

export default SlidersImgs;
