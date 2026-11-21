import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Gallery from "../../components/Gallery/Gallery";
import BuyBox from "../../components/BuyBox/BuyBox";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import { products } from "../../data/products";
import "./ProductViewPage.css";

// O repositório escreveu "produc-image" sem o "t". Use o nome exato.
const galleryImages = [
  { src: "/produc-image-1.jpeg" },
  { src: "/produc-image-2.jpeg" },
  { src: "/produc-image-3.jpeg" },
  { src: "/produc-image-4.jpeg" },
  { src: "/produc-image-5.jpeg" },
];

function ProductViewPage() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id) ?? products[0];

  return (
    <Layout>
      <div className="product-view">
        <div className="product-view__top">
          <Gallery
            images={galleryImages}
            width="700px"
            height="570px"
            radius="4px"
            showThumbs
          />

          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={product.stars}
            rating={product.rating}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description="Tênis de alta performance com conforto para o dia a dia. Material respirável e solado antiderrapante."
          >
            <p className="product-view__label">Tamanho</p>
            <ProductOptions
              options={["39", "40", "41", "42", "43"]}
              shape="square"
              type="text"
              radius="4px"
            />
            <p className="product-view__label">Cor</p>
            <ProductOptions
              options={["#C92071", "#1F1F1F", "#B5B6F2", "#FFFFFF"]}
              shape="circle"
              type="color"
            />
          </BuyBox>
        </div>

        <Section
          title="Produtos recomendados"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={products.filter((p) => p.id !== product.id).slice(0, 4)} />
        </Section>
      </div>
    </Layout>
  );
}

export default ProductViewPage;
