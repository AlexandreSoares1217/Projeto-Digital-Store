import { useState } from "react";
import "./ProductOptions.css";

function ProductOptions({ options, shape, type, radius }) {
  const [selected, setSelected] = useState(null);
  const isColor = type === "color";
  const isCircle = shape === "circle";

  return (
    <div className="product-options">
      {options.map((option, index) => {
        const classes = [
          "product-options__item",
          `product-options__item--${shape}`,
          selected === index ? "product-options__item--active" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={`${option}-${index}`}
            type="button"
            className={classes}
            aria-label={isColor ? `Cor ${option}` : `Tamanho ${option}`}
            aria-pressed={selected === index}
            style={{
              backgroundColor: isColor ? option : "transparent",
              borderRadius: isCircle ? "50%" : radius,
              fontSize: isCircle && !isColor ? "12px" : undefined,
            }}
            onClick={() => setSelected(index)}
          >
            {!isColor && option}
          </button>
        );
      })}
    </div>
  );
}

export default ProductOptions;
