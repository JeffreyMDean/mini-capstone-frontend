import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";
import { CartedProductsIndex } from './CartedProductsIndex'
import { ProductsNew } from "./ProductsNew";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log('get data from rails')
    axios.get("/products.json").then(response => {
      setProducts(response.data)
    })

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  const handleShowPhoto = (product => {
    console.log("handleShowPhoto", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  }
  
  return (
    <div className="container">
      <ProductsNew onCreateProduct={handleCreateProduct} />
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct}/>} />
        <Route path="/" element={<ProductsIndex products={products} onShowProduct={handleShowProduct} />} />
        <Route path="/cart" element={<CartedProductsIndex />} />
  </Routes>
    <main>
      <ProductsIndex products={products} onShowProduct={handleShowProduct}/>
      <Modal show={isProductsShowVisible} onClose={handleClose}>
      <ProductsShow product={currentProduct} />
      </Modal> 
    </main>
    </div>
  )
}