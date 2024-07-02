import { useState } from "react";

export function ProductsIndex(props) {
  console.log(props, "props");
  const [searchTerm, setSearchTerm] = useState("")
  
  return (
    <div>
    <div id="products-index"></div>
      <h1>All products</h1>
      <p>Search: <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search by title..." list="titles"/></p>
      <datalist id="titles">
      {props.productss.map(products =>
          <option key={products.id}>{products.title}</option>
          )}
      </datalist>
      <div className="cards">
        {props.productss
          .filter(products => 
      <div className="cards">
      {props.products.map(product => (
        {props.products
          .filter(product => 
            product.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(product => (
      <div key={product.id} className="products card">
        <p>{product.title}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <img src={product.image_url} />
        <p>{product.description}</p>
        <button onClick={() => props.onShowProdcut(product)}>More info</button>
      </div>
      </div>
    </div>
  );
}