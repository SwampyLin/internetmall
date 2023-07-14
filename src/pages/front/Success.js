import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Success() {
  const { orderId } = useParams()
  console.log(orderId)
  const [orderData, setOrderData] = useState({})

  const getCart = async (orderId) => {
    const res = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/order/${orderId}`
    )
    console.log('getCart', res)
    setOrderData(res.data.order)
  }
  useEffect(() => {
    getCart(orderId)
  }, [orderId])

  return (
    <div className='container'>
      <div
        style={{
          minHeight: '400px',
          backgroundImage:
            'url(https://i.pinimg.com/originals/ad/00/bb/ad00bb8c6b95113f873ace7ca9dc0afc.jpg)',
          backgroundPosition: 'center center'
        }}
      ></div>
      <div className='mt-5 mb-7'>
        <div className='row'>
          <div className='col-md-6'>
            <h2>商品訂購成功</h2>
            <p className='text-muted'>
              親愛的顧客，感謝您的訂購。我們非常感激您對我們的信任和支持，讓我們有機會為您提供服務。
            </p>
            <Link to='/' className='btn btn-outline-dark me-2 rounded-0 mb-4'>
              回到首頁
            </Link>
          </div>
          <div className='col-md-6'>
            <div className='card rounded-0 py-4'>
              <div className='card-header border-bottom-0 bg-white px-4 py-0'>
                <h2>訂購商品細節</h2>
              </div>
              <div className='card-body px-4 py-0'>
                <ul className='list-group list-group-flush'>
                  {Object.values(orderData?.products || {}).map((item) => {
                    return (
                      <li className='list-group-item px-0' key={item.id}>
                        <div className='d-flex mt-2'>
                          <img
                            src={item.product.imageUrl}
                            alt=''
                            className='me-2'
                            style={{ width: '60px', height: '60px' }}
                          />
                          <div className='w-100 d-flex flex-column'>
                            <div className='d-flex justify-content-between fw-bold'>
                              <h5>{item.product.title}</h5>
                              <p className='mb-0'>
                                {item.qty}
                                {item.product.unit}
                              </p>
                            </div>
                            <div className='d-flex justify-content-between mt-auto'>
                              <p className='mb-0'>NT${item.product.price}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}

                  <li className='list-group-item px-0 pb-0'>
                    <div className='d-flex justify-content-between mt-2'>
                      <p className='mb-0 h4 fw-bold'>總金額</p>
                      <p className='mb-0 h4 fw-bold'>NT${orderData?.total}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
