import { Link } from "react-router-dom";
import "./ProductCard.css";

function formatPrice(price) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function ProductCard({ id, image, name, price, priceDiscount }) {
  const hasDiscount = priceDiscount !== undefined;

  return (
    <article className="product-card">
      <Link className="product-card__link" to={`/product/${id}`}>
        <img className="product-card__image" src={image} alt={name} />
      </Link>

      <h3 className="product-card__name">{name}</h3>

      <div className="product-card__prices">
        <span
          className={
            hasDiscount
              ? "product-card__price product-card__price--old"
              : "product-card__price"
          }
        >
          {formatPrice(price)}
        </span>

        {hasDiscount && (
          <span className="product-card__price">
            {formatPrice(priceDiscount)}
          </span>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
