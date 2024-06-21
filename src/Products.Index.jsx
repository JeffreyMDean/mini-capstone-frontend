export function ProductsIndex(props) {
  return (
    <div>
      <h1>All photos</h1>
      {props.products.map((photo) => (
      <div key={product.id}>
        <p>{product.title}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.}</p>
        <button onClick={() => props.onShowProdcut(product)}>More info</button>
    </div>
  );
}