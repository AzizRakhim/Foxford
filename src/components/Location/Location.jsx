import React from 'react';
import "./Location.scss";

function Location() {
  return (
    <section id='location' className='location'>
      <div className="container">
        <h2 className='location__title text-center'>
          Where is "FoxFord" educational center
          located?
        </h2>
        <p className='location__text general-text text-center'>
          How to contact us?
        </p>
        <div className='location__info-wrapper d-flex'>
          <div className='location__info-box col-5'>
            <h2 className='location__info-title'>FoxFord</h2>
            <ul className='location__list p-0 m-0'>
              <li className="location__item d-flex align-items-center">
                <div className='location__icon-wrapper d-flex align-items-center'>
                  <i className='bx bx-map'></i>
                  <p className='location__address-label m-0'>Street:</p>
                </div>
                <p className='location__address mb-0'>Prokurotura street, 4th house.</p>
              </li>
              <li className="location__item d-flex align-items-center">
                <div className='location__icon-wrapper d-flex align-items-center'>
                  <i className='bx bx-map-alt'></i>
                  <p className='location__address-label m-0'>Region:</p>
                </div>
                <p className='location__address mb-0'>Yangikurgan</p>
              </li>
              <li className="location__item d-flex align-items-center">
                <div className='location__icon-wrapper d-flex align-items-center'>
                  <i className='bx bx-search'></i>
                  <p className='location__address-label m-0'>Orienter:</p>
                </div>
                <p className='location__address mb-0'>Street next to Agrobank</p>
              </li>
            </ul>
          </div>
          <div className='location__img-box col-7'>
            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501.179845170946!2d71.726728791396!3d41.192131126691656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc99355c7742a3e66!2zNDHCsDExJzMxLjciTiA3McKwNDMnNDAuNSJF!5e0!3m2!1sen!2s!4v1664090426805!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location;
