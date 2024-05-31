import React from 'react';
import styled from 'styled-components';

// Styled components for the different sections of the homepage
const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
`;

const Main = styled.main`
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const ProductName = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

// Dummy product data
const products = [
  {
    id: 1,
    name: 'Asus Rog Scar-15',
    price: 'Rs.1,60,990.00/-',
    image: 'https://realcomputer.in/image/cache/catalog/G533QS-HF059TS/1-200x200.jpg',
  },
  {
    id: 2,
    name: 'Hp Pavilion 15',
    price: 'Rs.67,900.00/-',
    image: 'https://cpimg.tistatic.com/7367685/s/4/hp-laptop.jpg',
  },
  {
    id: 3,
    name: 'MacBook Air 13',
    price: 'Rs.1,14,990.00/-',
    image: 'https://m.media-amazon.com/images/I/41WU3tTCFwL._SY445_SX342_QL70_FMwebp_.jpg',
  },
];

const HomePage = () => {
  return (
    <div>
      <Header>
        <h1>Shopito</h1>
      </Header>
      <Main>
        <Section>
          <Title>Featured Products</Title>
          <ProductGrid>
            {products.map(product => (
              <ProductCard key={product.id}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductCard>
            ))}
          </ProductGrid>
        </Section>
      </Main>
    </div>
  );
};

export default HomePage;
