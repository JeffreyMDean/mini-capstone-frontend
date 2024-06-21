import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";
import { CartedProductsIndex } from './CartedProductsIndex'

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleShowPhoto = (product => {
    console.log("handleShowPhoto", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct}/>} />
        <Route path="/" element={<ProductsIndex products={products} onShowProduct={handleShowProduct} />} />
        <Route path="/cart" element={<CartedProductsIndex />} />
  </Routes>
  return (
    <main>
      <ProductsIndex products={products} onShowProduct={handleShowProduct}/>
      <Modal show={isProductsShowVisible} onClose={handleClose}>
      <ProductsShow product={currentProduct}>
      </Modal> 
    </main>
  )
}