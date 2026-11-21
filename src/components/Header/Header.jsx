import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import cartIcon from "../../assets/mini-cart.svg";
import "./Header.css";

const navLinks = [
  { text: "Home", to: "/" },
  { text: "Produtos", to: "/products" },
  { text: "Categorias", to: "/categorias" },
  { text: "Meus Pedidos", to: "/pedidos" },
];

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    const term = search.trim();
    if (!term) return;
    navigate(`/products?filter=${encodeURIComponent(term)}`);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") handleSearch();
  }

  return (
    <header className="header">
      <div className="header__top">
        <Link to="/" aria-label="Drip Store - Home">
          <Logo />
        </Link>

        <div className="header__search">
          <input
            type="text"
            aria-label="Buscar produtos"
            placeholder="Buscar produtos..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" aria-label="Buscar" onClick={handleSearch}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>
        </div>

        <div className="header__actions">
          <Link to="/cadastro" className="header__register">
            Cadastre-se
          </Link>
          <Link to="/login" className="header__login">
            Entrar
          </Link>
          <img
            src={cartIcon}
            alt="Carrinho de compras"
            width={24}
            height={24}
          />
        </div>
      </div>

      <nav className="header__nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
