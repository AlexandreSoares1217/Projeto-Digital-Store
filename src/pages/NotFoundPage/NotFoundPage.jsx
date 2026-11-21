import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <Layout>
      <div className="not-found">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">Página não encontrada</h1>
        <p className="not-found__description">
          A página que você procura não existe ou foi movida.
        </p>
        <Link className="not-found__link" to="/">
          Voltar para a Home
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
