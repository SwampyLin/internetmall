import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='container'>
        <div className='row flex-md-row-reverse flex-column'>
          <div className='col-md-6'>
            <img
              src='https://www.san-x.co.jp/rilakkuma/img/wall/pc02_1920_1080.png'
              className='img-fluid'
              alt='...'
            />
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3'>
            <h2 className='fw-bold'>來自Sax-X的拉拉熊</h2>
            <h5 className='font-weight-normal text-muted mt-2'>
              拉拉熊名字的由來是日文片假名中「放鬆」（リラックス，rirakkusu）和「熊」（クマ，kuma）兩字的組合
            </h5>
            <div className='input-group mb-0 mt-4'></div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <img
                src='https://www.san-x.co.jp/rilakkuma/img/wall/sp02_640_1136.png'
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body p-0'>
                <h4 className='mb-0 mt-4'>拉拉熊2.0</h4>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text text-muted mb-0 w-75 p-3'>
                    煥然一新，風格簡約的拉拉熊
                  </p>
                  <Link
                    className='btn btn-outline-primary rounded-3 p-3'
                    to='/products'
                  >
                    去逛逛
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <img
                src='https://www.san-x.co.jp/rilakkuma/img/wall/sp01_640_1136.png'
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body p-0'>
                <h4 className='mb-0 mt-4'>露營趣</h4>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text text-muted mb-0 w-75 p-3'>
                    拉拉熊們和蜂蜜森林的朋友們一起野外求生
                  </p>
                  <Link
                    className='btn btn-outline-primary rounded-3 p-3'
                    to='/products'
                  >
                    去逛逛
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <img
                src='https://www.san-x.co.jp/d_present/img/wall/61_1366_768.png'
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body p-0'>
                <h4 className='mb-0 mt-4'>桌布</h4>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text text-muted mb-0 w-75 p-3'>
                    留白背景，非常節省流量
                  </p>
                  <Link
                    className='btn btn-outline-primary rounded-3 p-3'
                    to='/products'
                  >
                    去逛逛
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <img
                src='https://www.san-x.co.jp/d_present/img/wall/54_1366_768.png'
                className='card-img-top rounded-0'
                alt='...'
              />
              <div className='card-body p-0'>
                <h4 className='mb-0 mt-4'>遊樂園</h4>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text text-muted mb-0 w-75 p-3'>
                    第四十四回主題，熊姥姥進遊樂園
                  </p>
                  <Link
                    className='btn btn-outline-primary rounded-3 p-3'
                    to='/products'
                  >
                    去逛逛
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-light mt-7'>
        <div className='container'>
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex'>
                    <img
                      src='https://i.pinimg.com/200x150/e9/76/07/e976078a3184a1b6339d87f6a501ad64.jpg'
                      alt=''
                      className='rounded-circle me-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover'
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>“あくせくしたってはじまりませんぜ”</p>
                      <p className='mt-auto text-muted'>
                        拘泥小細節是成不了事的
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex'>
                    <img
                      src='https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                      alt=''
                      className='rounded-circle me-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover'
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row justify-content-center py-7'>
                  <div className='col-md-8 d-flex'>
                    <img
                      src='https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                      alt=''
                      className='rounded-circle me-5'
                      style={{
                        width: '160px',
                        height: '160px',
                        objectFit: 'cover'
                      }}
                    />
                    <div className='d-flex flex-column'>
                      <p className='h5'>
                        “Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat.”
                      </p>
                      <p className='mt-auto text-muted'>
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container my-7'>
        <div className='row'></div>
      </div>
      <div className='bg-light py-7 w-100 '>
        <img
          src='https://www.san-x.co.jp/rilakkuma/img/wall/twitter_01.png'
          alt=''
          className='w-100'
        />
      </div>
    </>
  )
}

export default Home
