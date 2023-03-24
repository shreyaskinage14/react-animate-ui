import React from 'react'

const Footer = () => {
  return (
    <div className='border-top pt-4'>
      <div className='row pb-4 pt-3 px-5'>
        <div className='col-3'>
          <p className='m-0 footer-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....</p>
          <div className='d-flex gap-2 py-4'>
            <i className='fa-brands fa-facebook fa-xl' />
            <i className='fa-brands fa-twitter fa-xl' />
            <i className='fa-brands fa-instagram fa-xl' />
            <i className='fa-brands fa-linkedin fa-xl' />
            <i className='fa-brands fa-pinterest fa-xl' />
          </div>
        </div>
        <div className='col-3'>
          <p className='m-0 footer-title'>Online Shopping</p>
          <ul className='list'>
            <li>Men's T-Shirts</li>
            <li>Women's Wear</li>
            <li>Winter Collections</li>
            <li>Hooded T-Shirts</li>
            <li>Streetwear Collections</li>
          </ul>
        </div>
        <div className='col-3'>
          <p className='m-0 footer-title'>Customer Policies</p>
          <ul className='list'>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Returns Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='col-3'>
          <p className='m-0 footer-title'>Store Information</p>
          <ul>
            <li className='d-flex align-items-center'><i className='fa-solid fa-location pe-2' /> Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. </li>
            <li className='d-flex align-items-center'><i className='fa-solid fa-phone pe-2' /> Call Us: 1234567890 </li>
            <li className='d-flex align-items-center'><i className='fa-solid fa-envelope pe-2' /> Email Us: info@yourmail.com </li>
          </ul>
        </div>
      </div>
      <div className='bg-black text-white p-3 d-flex justify-content-center'>
        <p className='header-title'>©2022-23 Powered By dummy team</p>
      </div>
    </div>
  )
}

export default Footer