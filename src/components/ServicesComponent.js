import React from 'react'

const ServicesComponent = () => {
    return (
        <div className='my-3 reveal'>
            <div className='position-relative services p-5 d-flex gap-5 align-items-center justify-content-center'>
                <div className='px-5 border-end'>
                    <img src='assets/return.png' alt='' />
                    <p className='mt-3'>7 Days Return</p>
                </div>
                <div className='px-5 border-end'>
                    <img src='assets/verified.png' alt='' />
                    <p className='mt-3'>Quality Products</p>
                </div>
                <div className='px-5 border-end'>
                    <img src='assets/authenticated.png' alt='' />
                    <p className='mt-3'>Safe Payment</p>
                </div >
                <div className='px-5'>
                    <img src='assets/customer.png' alt='' />
                    <p className='mt-3'>24x7 Helpline</p>
                </div>
                <div id="circleLeft" className='left-bottom' />
                <div id="circleRight" className='right-top' />
            </div>
        </div>
    )
}

export default ServicesComponent