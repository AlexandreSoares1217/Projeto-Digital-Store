# Projeto Digital Store — Drip Store

Aplicação web de um e-commerce criado como trabalho final de **Front-end** (Digital College), conforme a especificação do [repositório base](https://github.com/digitalcollegebr/projeto-digital-store).

> 📄 Especificação original da atividade (requisitos do projeto): [SPEC.md](./SPEC.md)

## 🚀 Funcionalidades

- **Home** (`/`) — galeria com slide de 8 imagens, coleções em destaque e listagem de produtos em alta
- **Listagem de Produtos** (`/products`) — busca com query string (`?filter=...`), ordenação por preço (menor/maior), filtro funcional por **Marca** e **Categoria**, contador de produtos
- **Visualização do Produto** (`/product/:id`) — galeria com miniaturas e animação de deslize, Buy Box com preços/avaliações/CTA, opções de produto (tamanho e cor), produtos recomendados
- **404** — captura de rotas inexistentes

### Componentes reutilizáveis

- `Layout`, `Header`, `Footer`, `Logo`
- `Section` — título alinhado (left/center), link opcional, children
- `Gallery` — slide com setas, thumbnails (117×95px), radius, slide animation
- `ProductCard` / `ProductListing` — cards de 292×321 com preço original e preço com desconto
- `BuyBox` — nome, referência, estrelas, avaliações, preços, descrição, CTA
- `ProductOptions` — formato square (46px) ou circle (31px), type text/color
- `FilterGroup` — checkboxes/radios controlados (22px, filled primária)

## 🛠️ Tecnologias

- **React 19**
- **react-router-dom** (navegação client-side)
- **Vite 8** (build/dev server)
- **CSS** com variáveis de design (cores da especificação)
- **oxlint** (lint)

## 📁 Estrutura do projeto

```
├── src/
│   ├── assets/          # SVGs (logo, setas, ícones, estrela)
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/
│   │   ├── Layout/      # Layout com Header + Footer
│   │   ├── HomePage/
│   │   ├── ProductListingPage/
│   │   ├── ProductViewPage/
│   │   └── NotFoundPage/
│   ├── data/            # Dados dos produtos
│   ├── App.jsx          # Rotas
│   └── main.jsx         # Bootstrap
├── public/              # Imagens (slides, coleções, produtos)
└── index.html
```

## ▶️ Como rodar

Pré-requisitos: [Node.js](https://nodejs.org/) 20+ e npm

```bash
# clonar o repositório
git clone https://github.com/AlexandreSoares1217/Projeto-Digital-Store.git
cd Projeto-Digital-Store

# instalar as dependências
npm install

# rodar em desenvolvimento (http://localhost:5173)
npm run dev
```

Outras tarefas disponíveis:

```bash
npm run build   # build de produção (gera dist/)
npm run preview # serve o build de produção
npm run lint    # lint com oxlint
```

## 🔗 Rotas

| Rota           | Página                                       |
| -------------- | -------------------------------------------- |
| `/`            | Home (galeria + coleções + produtos em alta) |
| `/products`    | Listagem de produtos (filtros + ordenação)   |
| `/product/:id` | Visualização do produto                      |
| `*`            | Página 404                                   |

## 👥 Equipe

> ⚠️ **Preencha com o nome de todos os integrantes da equipe** (obrigatório na entrega — veja o edital):
>
> - **Nome do integrante 1**
> - **Nome do integrante 2**
> - **Nome do integrante 3**

## 📚 Referências

- [Repositório base / especificação](https://github.com/digitalcollegebr/projeto-digital-store)
- [Documentação React](https://react.dev/)
- Projeto final de Front-end — Digital College (Data final: **20/11/2026**)
