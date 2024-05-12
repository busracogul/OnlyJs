import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { nanoid } from 'nanoid';
import './App.css';
import IconButton from './components/IconButton';
import Fuse from "fuse.js";

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

  const [filteredName, setFilteredName] = useState('');
  const [filteredShopId, setFilteredShopId] = useState('');
  const [filteredCategoryId, setFilteredCategoryId] = useState('');
  const [filteredStatus, setFilteredStatus] = useState('');

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

  const filteredProducts = products.filter((product) => {
    let result = true;
    const fuse = new Fuse(products, {
      keys: ["name"],
    });
    const res = fuse.search(filteredName);

    if (filteredName !== '' && !res.find(r => r.item.id === product.id)) {
      return false;
    }
    //Status
    if (filteredStatus !== "reset" &&
      ((product.isBought === true && filteredStatus !== true) ||
        (product.isBought === undefined && filteredStatus === true))
    ) {
      return false;
    }
    //Shop
    if (filteredShopId !== "" && product.shop !== filteredShopId) {
      return false;
    }
    //Category
    if (filteredCategoryId !== "" && product.category !== filteredCategoryId) {
      return false;
    }
    return true;
  });

  console.log(filteredStatus)
  return (
    <>
      <div className='p-5 m-5'>
        <Form className='row'>
          <div className="col-3">
            <Form.Group controlId="productName">
              <Form.Control type="text" placeholder="Ürün Adı" value={productName} onChange={(e) => { setProductName(e.target.value) }} />
            </Form.Group>
          </div>
          <div className="col-3">
            <Form.Select aria-label="Market seçiniz" value={selectedShop} onChange={(e) => { setSelectedShop(e.target.value) }}>
              <option>Market seçiniz</option>
              {shops.map(shop => (
                <option key={shop.id} value={shop.id}>{shop.name}</option>
              ))}
            </Form.Select>
          </div>
          <div className="col-3">
            <Form.Select aria-label="Kategori seçiniz" value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value) }}>
              <option>Kategori seçiniz</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </Form.Select>
          </div>
          <div className="col-3">
            <Button variant="outline-light" onClick={handleAddProduct}>Ekle</Button>{' '}
          </div>
        </Form>

        <Form className='d-flex row mt-5'>
          <div className="col-3">
            <Form.Group controlId="productName">
              <Form.Control type="text" placeholder="Filter name" value={filteredName} onChange={(e) => { setFilteredName(e.target.value) }} />
            </Form.Group>
          </div>
          <div className="col-3">
            <Form.Select aria-label="Market seçiniz" className='' value={filteredShopId} onChange={(e) => { setFilteredShopId(e.target.value) }}>
              <option value={""}>Marketi Filtrele</option>
              {shops.map(shop => (
                <option key={shop.id} value={shop.id}>{shop.name}</option>
              ))}
            </Form.Select>
          </div>
          <div className="col-3">
            <Form.Select aria-label="Kategori seçiniz" className='col-height' value={filteredCategoryId} onChange={(e) => { setFilteredCategoryId(e.target.value) }}>
              <option value={""}>Kategori Filtrele</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </Form.Select>
          </div>
          <div className="col-3">
            <Form.Group onChange={(e) => {
              const val = e.target.value;
              setFilteredStatus(val === "reset" ? val : val === "true" ? true : false);
            }} className='ms-4 text-white'>
              <div className="col-1">
                <Form.Check
                  inline
                  value={"reset"}
                  label="Sıfırla"
                  name="group1"
                  type={"radio"}
                  id={`inline-radio-1`}
                />
              </div>
              <div className="col-1">
                <Form.Check
                  inline
                  value={true}
                  label="Alınmış"
                  name="group1"
                  type={"radio"}
                  id={`inline-radio-2`}
                />
              </div>
              <div className="col-1">
                <Form.Check
                  inline
                  value={false}
                  label="Alınmamış"
                  name="group1"
                  type={"radio"}
                  id={`inline-radio-3`}
                />
              </div>
            </Form.Group>
          </div>
        </Form>

        <Table striped bordered hover size="sm" className='w-75 mt-5'>
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
            {filteredProducts.map(product => (
              <tr key={product.id} className={product.isBought ? 'strike-through' : ''} onClick={() => {
                if (products.every((uP) => Boolean(uP.isBought))) {
                  alert("Alışverişi tamamladınız");
                }
                handleToggleBought(product.id)
              }
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
      </div>
    </>
  );
}

export default App;
