import React, { useState } from 'react'
import { cart, heart, share } from '../utils/imagePath'

const TCard = ({ image, title, bgColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='d-flex flex-column gap-3'>
            <div className='position-relative overflow-hidden card-transparent transition rounded-0 border-0' style={{ backgroundColor: bgColor }}>
                <img loading='lazy' src={image} className='transition' alt='Card One' />
                <div className='oncard-title position-absolute bottom-0 w-100 p-4 text-white'>{title}</div>
            </div>
        </div>
    )
}

export default TCard