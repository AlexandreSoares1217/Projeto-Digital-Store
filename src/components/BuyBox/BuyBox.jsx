import starIcon from "../../assets/star-icon.svg";
import "./BuyBox.css";

function money(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  const hasDiscount = priceDiscount !== undefined;

  return (
    <div className="buybox">
      <h1 className="buybox__name">{name}</h1>
      <p className="buybox__reference">Ref.: {reference}</p>

      <div className="buybox__rating">
        <span className="buybox__stars">
          {stars} <img src={starIcon} alt="" />
        </span>
        <span className="buybox__rating-count">({rating} avaliações)</span>
      </div>

      <div className="buybox__prices">
        <span className={hasDiscount ? "buybox__price--old" : "buybox__price"}>
          {money(price)}
        </span>
        {hasDiscount && (
          <span className="buybox__price">{money(priceDiscount)}</span>
        )}
      </div>

      <p className="buybox__description">{description}</p>
      {children}

      <button className="buybox__cta" type="button">
        COMPRAR
      </button>
    </div>
  );
}

export default BuyBox;
