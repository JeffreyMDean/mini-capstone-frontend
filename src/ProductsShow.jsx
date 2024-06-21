export function ProductsShow(props) {

  const submit = (event) => {
    event.preventDefault()
    console.log('in submit')
    const params = new FormData(event.target)


    axios.post('http://localhost:3000/carted_products.json', 
      params).then(response => {
        console.log(response.data)
        window.location.href = '/'
      })
  }

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Url: {props.product.url}</p>
      <p>Width: {props.product.width}</p>
      <p>Height: {props.product.height}</p>
      <form onSubmit={submit}>
        <p>Quantity: <input type="text" name="quantity" /></p>
        <p><input type="hidden" name="product_id" defaultValue={props.product.id} /></p>
        <input type="submit" value="add to cart" />
      </form>
    </div>
  );
}
