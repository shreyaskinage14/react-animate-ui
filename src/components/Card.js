import React, { useState } from 'react'
import { cart, heart, share } from '../utils/imagePath'

const Card = ({ image, title, discountPrice, ogPrice }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [size, setSize] = useState("");

    return (
        <div className='reveal d-flex flex-column py-2 pb-4'>
            <div className='overflow-hidden card card-product transition rounded-0 border-0' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img loading='lazy' src={image} id="card-img" className='transition' style={{ filter: isHovered ? "blur(5px)" : "" }} alt='Card One' />
                <div className={!isHovered ? 'd-none opacity-0' : 'transition opacity-100 hover-buttons d-flex w-100 gap-3 position-absolute top-50 left-50 justify-content-center'}>
                    <button className='card-button rounded-circle p-2 border-0' onMouseEnter={() => setIsHovered(true)}><img loading='lazy' src={cart} alt="cart" /></button>
                    <button className='card-button rounded-circle p-2 border-0' onMouseEnter={() => setIsHovered(true)}><img loading='lazy' src={heart} alt="heart" /></button>
                    <button className='card-button rounded-circle p-2 border-0' onMouseEnter={() => setIsHovered(true)}><img loading='lazy' src={share} alt="share" /></button>
                </div>
            </div>
            <p className='w-75 py-2 m-auto'>{title}</p>
            <div className='d-flex justify-content-center align-items-center gap-1'>
                <span className='h6 m-0'>${discountPrice}</span><small className='text-danger strike-through'><s>${ogPrice}</s></small>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-3 pt-2'>
                <div className={`card card-size rounded-0 ${size === "S" ? "hover" : ""} shadow-sm transition`} onClick={() => setSize("S")}>
                    <span>S</span>
                </div>
                <div className={`card card-size rounded-0 ${size === "M" ? "hover" : ""} shadow-sm transition`} onClick={() => setSize("M")}>
                    <span>M</span>
                </div>
                <div className={`card card-size rounded-0 ${size === "L" ? "hover" : ""} shadow-sm transition`} onClick={() => setSize("L")}>
                    <span>L</span>
                </div>
                <div className={`card card-size rounded-0 ${size === "XL" ? "hover" : ""} shadow-sm transition`} onClick={() => setSize("XL")}>
                    <span>XL</span>
                </div>
                <div className={`card card-size rounded-0 ${size === "XXL" ? "hover" : ""} shadow-sm transition`} onClick={() => setSize("XXL")}>
                    <span>XXL</span>
                </div>
            </div>
        </div>
    )
}

export default Card