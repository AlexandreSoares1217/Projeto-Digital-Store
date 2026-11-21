import logoHeader from "../../assets/logo-header.svg";
import logoFooter from "../../assets/logo-footer.svg";

function Logo({ variant = "header" }) {
  const src = variant === "header" ? logoHeader : logoFooter;
  return <img src={src} alt="Drip Store" width={253} height={44} />;
}

export default Logo;
