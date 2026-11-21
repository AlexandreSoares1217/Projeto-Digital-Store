import Layout from "../Layout/Layout";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import { products } from "../../data/products";
import "./HomePage.css";

const slides = [
  { src: "/home-slide-1.jpeg" },
  { src: "/home-slide-2.jpeg" },
  { src: "/home-slide-3.jpeg" },
  { src: "/home-slide-4.jpeg" },
  { src: "/home-slide-5.jpeg" },
  { src: "/home-slide-6.jpeg" },
  { src: "/home-slide-7.jpeg" },
  { src: "/home-slide-8.jpeg" },
];

const colecoes = [
  "/collection-1.png",
  "/collection-2.png",
  "/collection-3.png",
];

function HomePage() {
  return (
    <Layout>
      <div className="home__gallery">
        <Gallery images={slides} width="1440px" height="681px" />
      </div>

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="home__collections">
          {colecoes.map((src, index) => (
            <img key={src} src={src} alt={`Coleção ${index + 1}`} />
          ))}
        </div>
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing products={products} />
      </Section>
    </Layout>
  );
}

export default HomePage;
