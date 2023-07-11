import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Pagination from '../../components/Pagination'
import Loading from '../../components/Loading'

function Products() {
  const [products, setProducts] = useState([])
  const [pagination, setPagination] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const getProducts = async (page = 1) => {
    setIsLoading(true)
    const productRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`
    )
    console.log(productRes)
    setProducts(productRes.data.products)
    setPagination(productRes.data.pagination)
    setIsLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <div className='container mt-md-5 mt-3 mb-7'>
        <Loading isLoading={isLoading}></Loading>
        <div className='row'>
          {products.map((product) => {
            return (
              <div className='col-md-3' key={product.id}>
                <div className='card border-0 mb-4 position-relative position-relative'>
                  <img
                    src={product.imageUrl}
                    className='card-img-top rounded-0 object-cover'
                    alt='...'
                    height={300}
                  />
                  <div className='card-body p-0'>
                    <h4 className='mb-0 mt-1'>
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h4>
                    <p className='text-muted mt-3'>NT$ {product.price}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <nav className='d-flex justify-content-center'>
          <Pagination
            pagination={pagination}
            changePage={getProducts}
          ></Pagination>
        </nav>
      </div>
    </>
  )
}

export default Products
