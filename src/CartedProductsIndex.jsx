import axios from 'axios'
import {useState, useEffect} from 'react'

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([])
  const getData = () => {
    console.log('getting data')
    window.location.href = '/'
  }
}
  axios.get('http://localhost:3000/carted_products.json').then(response => {
    console.log(response.data);
    setCartedProducts(response.data)
  })


  const buy = () => {
    console.log('buy')
    axios.post('http://localhost:3000/orders.json').then(response => {
      console.log(response.data);

    })
  }

  useEffect(getData, [])

  return (
    <div>
      <p>CPI</p>
      {cartedProducts.map(cp => (
        <div>
          {/* <p>id: {cp.id}</p>
          <p>product: </p>
          <p>price: </p>
          <p>quantity: </p> */}

          <hr />
    </div>
  ))}
  <button onClick={buy}>Buy!</button>
  </div>
  )
}