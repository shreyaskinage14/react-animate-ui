import React from 'react'
import { search, sidebar, wishlist, bag, user } from '../utils/imagePath'

const Header = () => {
    return (
        <div className='sticky-top shadow-lg'>
            <div className='bg-black text-white p-2 d-flex justify-content-between'>
                <p className='header-title left'>Welcome to the Store</p>
                <p className='header-title right'><i className="fa-solid fa-phone me-2" />Call Us: 1234567890</p>
            </div>
            <div className='d-flex justify-content-between p-4 ps-1 bg-white'>
                <div className='ms-5'>
                    <img src={sidebar} id="icons" className='ms-5' alt='sidebar' />
                </div>
                <div className=''>
                    <p className='m-0 h4 fw-light'>Logo Here</p>
                </div>
                <div className='me-5'>
                    <div className='me-5 w-100 d-flex gap-3 align-items-evenly'>
                        <img src={search} id="icons" title="Search" alt='search' />
                        <img src={wishlist} id="icons" title="Wishlist" alt='wishlist' />
                        <img src={bag} id="icons" title="Bag" alt='bag' />
                        <img src={user} id="icons" title="User" alt='user' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header