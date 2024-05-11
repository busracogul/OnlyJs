import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { nanoid } from 'nanoid';
import './App.css';
import IconButton from './components/IconButton';

const shops = [
  { "id": 1, "name": "Migros" },
  { "id": 2, "name": "Bim" },
  { "id": 3, "name": "Carrefour" },
  { "id": 4, "name": "A101" },
];

const categories = [
  { "id": 1, "name": "Elektronik" },
  { "id": 2, "name": "Şarküteri" },
  { "id": 3, "name": "Oyuncak" },
  { "id": 4, "name": "Fırın" },
];

const App = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [selectedShop, setSelectedShop] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddProduct = () => {
    const productId = nanoid();
    const newProduct = {
      id: productId,
      name: productName,
      shop: selectedShop,
      category: selectedCategory,
      isBought: false,
    };

    setProducts([...products, newProduct]);
    setProductName('');
    setSelectedShop('');
    setSelectedCategory('');
  }

  const handleToggleBought = (productId) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return { ...product, isBought: !product.isBought };
      }
      return product;
    }));    
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Control type="text" placeholder="Ürün Adı" value={productName} onChange={(e) => { setProductName(e.target.value) }} />
      </Form.Group>
      <Form.Select aria-label="Market seçiniz" value={selectedShop} onChange={(e) => { setSelectedShop(e.target.value) }}>
        <option>Market seçiniz</option>
        {shops.map(shop => (
          <option key={shop.id} value={shop.id}>{shop.name}</option>
        ))}
      </Form.Select>
      <Form.Select aria-label="Kategori seçiniz" value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value) }}>
        <option>Kategori seçiniz</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </Form.Select>
      <Button variant="outline-secondary" onClick={handleAddProduct}>Ekle</Button>{' '}
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ürün Adı</th>
            <th>Market</th>
            <th>Kategori</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className={product.isBought ? 'strike-through' : ''} onClick={() =>{
              if (products.every((uP) => Boolean(uP.isBought))) {
                alert("Alışverişi tamamladınız");
              }
              handleToggleBought(product.id)}
            } >
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{shops.find(shop => shop.id === parseInt(product.shop)).name}</td>
              <td>{categories.find(category => category.id == (product.category)).name}</td>
              <td><IconButton
                handleClick={() => {
                  setProducts(products.filter(filterProduct => filterProduct.id !== product.id));
                }}
              /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
