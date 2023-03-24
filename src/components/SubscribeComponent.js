import React from 'react'
import Button from './Button'

const SubscribeComponent = () => {
    return (
        <div className='p-5 w-75 m-auto reveal'>
            <div className='bg-subscribe p-5 d-flex justify-content-center flex-column gap-4 position-relative'>
                <div id='shapeOne'></div>
                <div id='shapeTwo'></div>
                <div className='display-6 text-white m-auto' style={{ width: "80%" }}>Subscribe to get updates on exciting offers & deals</div>
                <div className='d-flex justify-content-center flex-row'>
                    <input placeholder='Enter your email' className='text-white px-3 p-2' style={{ width: "40%", backgroundColor: "rgba(255, 255, 255, 0.32)" }} />
                    <Button className="bg-white text-black">SUBSCRIBE</Button>
                </div>
            </div>
        </div>
    )
}

export default SubscribeComponent