import React, { FC } from 'react'
import shape1 from './assets/img/shape-1.svg'
import shape2 from './assets/img/shape-2.svg'
import shape3 from './assets/img/shape-3.svg'
import shape4 from './assets/img/shape-4.svg'
import shape5 from './assets/img/shape-5.svg'
import shape6 from './assets/img/shape-6.svg'

import './assets/css/bootstrap-4.5.0.min.css'
import './assets/css/lineicons.css'
import './assets/css/animate.css'
import './assets/css/style.css'




const App: FC = () => {
  return (
    <main className="main-14">
      <div className="main-wrapper demo-14">
        <img src={shape1} alt="" className="shape shape-1" />
        <img src={shape2} alt="" className="shape shape-2" />
        <img src={shape3} alt="" className="shape shape-3" />
        <img src={shape4} alt="" className="shape shape-4" />
        <img src={shape5} alt="" className="shape shape-5" />
        <img src={shape6} alt="" className="shape shape-6" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="img-wrapper wow fadeInLeft" data-wow-delay=".2s">
                <img src="assets/img/img-1.svg" alt="" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-6 odd-col">

              <div className="content-wrapper">
                <h1 className="wow fadeInDown" data-wow-delay=".2s">Coming Soon</h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">The and greater, all hasn't revisit general up by her The soon my himself including it those
                  from everything you necessary will didn't little.</p>

                <div className="wow fadeInLeft" data-wow-delay=".2s" data-countdown="2023/04/16"></div>

                <form
                  action="https://formspree.io/f/mqkoljey"
                  method="post" id="subscribe-form" name="subscribe-form"
                  className="subscribe-form subscribe-form-1 validate wow fadeInDown" data-wow-delay=".6s"
                  target="_blank" noValidate>
                  <input
                    type="email"
                    name="EMAIL"
                    id="EMAIL"
                    className="required email"
                    placeholder="Enter Mail Address"
                    required
                    pattern=".+@email\.com"
                    />

                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
                    <input
                      type="text" name="b_4dbefd9d3a1d6a570020b1e85_e16d098ae8" tabIndex={-1} />
                  </div>
                  <button type="submit" id="subscribe" className="sub_btn common-btn">Add Waiting List</button>
                </form>

              </div>

            </div>
          </div>
        </div>
      </div >
    </main >
  )
}

export default App;