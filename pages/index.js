// pages/index.js

import Head from 'next/head';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FiltersSidebar from '../components/FiltersSidebar';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { useState } from 'react';

export default function Home({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total page count

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Head>
        <title>Product Listing</title>
      </Head>

      <Header />
      <SearchBar />

      <div className="main-content">
        <FiltersSidebar />
        <section className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />

      <style jsx>{`
        .main-content {
          display: flex;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
          flex: 1;
        }

        @media (max-width: 768px) {
          .main-content {
            flex-direction: column;
          }

          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}

// Fetching data using Server Side Rendering (SSR)
export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
