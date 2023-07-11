import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import CouponModal from '../../components/CouponModal'
import DeleteModal from '../../components/DeleteModal'
import { Modal } from 'bootstrap'
import Pagination from '../../components/Pagination'

function AdminCoupons() {
  const [coupons, setCoupons] = useState([])
  const [pagination, setPagination] = useState({})
  const [type, setType] = useState('create') //edit
  const [tempCoupon, setTempCoupon] = useState({})

  const couponModal = useRef(null)
  const deleteModal = useRef(null)

  useEffect(() => {
    couponModal.current = new Modal('#productModal', {
      backdrop: 'static'
    })
    deleteModal.current = new Modal('#deleteModal', {
      backdrop: 'static'
    })
    getCoupons()
  }, [])

  const getCoupons = async (page = 1) => {
    const res = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupons?page=${page}`
    )
    setCoupons(res.data.coupons)
    setPagination(res.data.pagination)
  }

  const openCouponModal = (type, item) => {
    setType(type)
    setTempCoupon(item)
    couponModal.current.show()
  }

  const closeModal = () => {
    couponModal.current.hide()
  }

  const openDeleteModal = (item) => {
    setTempCoupon(item)
    deleteModal.current.show()
  }

  const closeDeleteModal = () => {
    deleteModal.current.hide()
  }

  const deleteCoupon = async (id) => {
    try {
      const res = await axios.delete(
        `/v2/api/${process.env.REACT_APP_API_PATH}/admin/coupon/${id}`
      )
      if (res.data.success) {
        getCoupons()
        closeDeleteModal()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-3'>
      <CouponModal
        closeModal={closeModal}
        getCoupons={getCoupons}
        tempCoupon={tempCoupon}
        type={type}
      ></CouponModal>
      <DeleteModal
        close={closeDeleteModal}
        text={tempCoupon.title}
        handelDelete={deleteCoupon}
        id={tempCoupon.id}
      ></DeleteModal>
      <h3>優惠券列表</h3>
      <hr />
      <div className='text-end'>
        <button
          type='button'
          className='btn btn-primary btn-sm'
          onClick={() => {
            openCouponModal('create', {})
          }}
        >
          建立新優惠券
        </button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>名稱</th>
            <th scope='col'>折扣比</th>
            <th scope='col'>到期日</th>
            <th scope='col'>優惠碼</th>
            <th scope='col'>啟用狀態</th>
            <th scope='col'>編輯</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.percent}</td>
                <td>{new Date(product.due_date).toDateString()}</td>
                <td>{product.code}</td>
                <td>{product.is_enabled ? '啟用' : '未啟用'}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm'
                    onClick={() => {
                      openCouponModal('edit', product)
                    }}
                  >
                    編輯
                  </button>
                  <button
                    type='button'
                    className='btn btn-outline-danger btn-sm ms-2'
                    onClick={() => {
                      openDeleteModal(product)
                    }}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination pagination={pagination} changePage={getCoupons}></Pagination>
    </div>
  )
}

export default AdminCoupons
