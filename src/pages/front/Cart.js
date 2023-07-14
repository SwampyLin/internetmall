import axios from 'axios'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import { useDispatch } from 'react-redux'
import { createAsyncMessage } from '../../slice/messageSlice'

function Cart() {
  const { cartData, getCart, isLoading } = useOutletContext()
  const [loadingItems, setLoadingItems] = useState([])
  const [cartIsLoading, setCartIsLoading] = useState(false)
  const dispatch = useDispatch()

  const updateCartItem = async (item, quantity) => {
    const data = {
      data: {
        product_id: item.product_id,
        qty: quantity
      }
    }
    setLoadingItems([...loadingItems, item.id])
    try {
      const res = await axios.put(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${item.id}`,
        data
      )
      console.log('這是調整商品數量的返回資訊', res)
      getCart()
      setLoadingItems(
        loadingItems.filter((loadingObject) => {
          return loadingObject !== item.id
        })
      )
      dispatch(createAsyncMessage(res.data))
    } catch (error) {
      console.log(error)
      dispatch(createAsyncMessage(error.response.data))
      setLoadingItems(
        loadingItems.filter((loadingObject) => {
          return loadingObject !== item.id
        })
      )
    }
  }

  const removeCartItem = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart/${id}`
      )
      console.log('這是刪除商品的api返回資訊', res)
      getCart()
      dispatch(createAsyncMessage(res.data))
    } catch (error) {
      console.log(error)
      dispatch(createAsyncMessage(error.response.data))
    }
  }

  return (
    <>
      {/* <Loading isLoading={isLoading || cartIsLoading}></Loading> */}
      <div className='container'>
        <div className='row justify-content-center'>
          <div
            className='col-md-6 bg-white py-5'
            style={{ minHeight: 'calc(100vh - 56px - 76px)' }}
          >
            <div className='d-flex justify-content-between'>
              <h2 className='mt-2'>購物車</h2>
            </div>
            {
              <>
                <div
                  className={`w-100 rounded-3 ${
                    cartData.total === 0 ? 'd-block' : 'd-none'
                  }`}
                >
                  <div>
                    {' '}
                    <p className='text-center'>您的購物車中還沒有商品</p>
                    <Link
                      to={'/products'}
                      className='btn btn-outline-primary w-100 mt-1 rounded-3 py-3'
                    >
                      繼續挑選商品
                    </Link>
                  </div>
                </div>
              </>
            }
            {cartData?.carts?.map((item) => {
              return (
                <div className='d-flex mt-4 bg-light' key={item.id}>
                  <img
                    src={item.product.imageUrl}
                    alt=''
                    className='object-cover'
                    style={{
                      width: '120px'
                    }}
                  />
                  <div className='w-100 p-3 position-relative'>
                    <button
                      type='button'
                      className='position-absolute btn btn-danger'
                      style={{ top: '0px', right: '0px' }}
                      onClick={() => {
                        removeCartItem(item.id)
                      }}
                    >
                      <i className='bi bi-x-lg'></i>
                    </button>
                    <div className='p-4'>
                      <p className='mb-0 fw-bold'>{item.product.title}</p>
                      <p
                        className='mb-1 text-muted'
                        style={{ fontSize: '14px' }}
                      >
                        {item.product.content}
                      </p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                      <div className='input-group w-50 align-items-center'>
                        <select
                          name=''
                          className='form-select'
                          id=''
                          value={item.qty}
                          disabled={loadingItems.includes(item.id)}
                          onChange={(e) => {
                            updateCartItem(item, e.target.value * 1)
                          }}
                        >
                          {[...new Array(20)].map((i, num) => {
                            return (
                              <option value={num + 1} key={num}>
                                {num + 1}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                      <p className='mb-0 ms-auto'>NT$ {item.final_total}</p>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className='d-flex justify-content-between mt-4'>
              <p className='mb-0 h4 fw-bold'>總金額</p>
              <p className='mb-0 h4 fw-bold'>NT${cartData.final_total}</p>
            </div>
            <Link
              to={'/products'}
              className={`btn btn-outline-primary w-100 mt-4 rounded-0 py-3 ${
                cartData.total === 0 ? 'd-none' : 'd-block'
              }`}
            >
              繼續挑選商品
            </Link>
            <Link
              to={'/checkout'}
              className={`btn btn-outline-primary w-100 mt-4 rounded-0 py-3 ${
                cartData.total === 0 ? 'd-none' : 'd-block'
              }`}
            >
              去結帳
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
