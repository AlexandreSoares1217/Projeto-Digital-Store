import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import { products } from "../../data/products";
import "./ProductListingPage.css";

const sortOptions = [
  { text: "Menor preço", value: "asc" },
  { text: "Maior preço", value: "desc" },
];

const brandOptions = [...new Set(products.map((p) => p.brand))].map((brand) => ({
  text: brand,
  value: brand,
}));

const categoryOptions = [...new Set(products.map((p) => p.category))].map((category) => ({
  text: category,
  value: category,
}));

function toggleSelected(list, value) {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? "";
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const [categories, setCategories] = useState([]);

  let filtered = products.filter((p) =>
    p.name.toLowerCase().includes(filter.trim().toLowerCase()),
  );

  if (brand) filtered = filtered.filter((p) => p.brand === brand);
  if (categories.length)
    filtered = filtered.filter((p) => categories.includes(p.category));

  if (sort === "asc")
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "desc")
    filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <Layout>
      <div className="listing">
        <aside className="listing__sidebar">
          <label htmlFor="sort-select" className="listing__sort-label">
            Ordenar por
          </label>
          <select
            id="sort-select"
            className="listing__sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Selecione</option>
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.text}
              </option>
            ))}
          </select>

          <div className="listing__filters">
            <h3 className="listing__filters-title">Filtrar por</h3>
            <hr />
            <FilterGroup
              title="Marca"
              inputType="radio"
              options={brandOptions}
              selected={brand}
              onChange={setBrand}
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={categoryOptions}
              selected={categories}
              onChange={(value) => setCategories((prev) => toggleSelected(prev, value))}
            />
          </div>
        </aside>

        <div className="listing__content">
          <Section title={`${filtered.length} produtos encontrados`}>
            <ProductListing products={filtered} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}

export default ProductListingPage;
