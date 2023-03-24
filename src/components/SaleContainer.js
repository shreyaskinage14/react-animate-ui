import React from 'react'
import { diamond, discount } from '../utils/imagePath'
import Button from './Button'

const SaleContainer = () => {
    return (
        <>
            <div className='reveal my-5 d-flex gap-4 align-items-center justify-content-center'>
                <div className='p-5 d-flex gap-4 fw-bold flex-column align-items-center justify-content-center' style={{ backgroundColor: "#CCCEA7", width: "500px" }}>
                    <img src={diamond} width="170" height="170" alt="Diamond" loading='lazy' />
                    <p className='m-0 h3'>Hurry Up!</p>
                    <p className='m-0 display-4'>85% OFF</p>
                    <p className='m-0 h3'>Sale</p>
                    <Button className="border border-white bg-transparent">SHOP NOW</Button>
                </div>
                <div className='p-5 d-flex gap-4 fw-bold flex-column align-items-center justify-content-center' style={{ backgroundColor: "#D6BEBE", width: "500px" }}>
                    <img src={discount} width="170" height="170" alt="Discount" loading='lazy' />
                    <p className='m-0 h3'>Hurry Up!</p>
                    <p className='m-0 display-4'>75% OFF</p>
                    <p className='m-0 h3'>Sale</p>
                    <Button className="border border-white bg-transparent">SHOP NOW</Button>
                </div>
            </div>
        </>
    )
}

export default SaleContainer