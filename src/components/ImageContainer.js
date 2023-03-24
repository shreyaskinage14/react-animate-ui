import React from 'react'

const ImageContainer = ({ image, title, bg }) => {
    return (
        <div>
            <div className='rounded-circle' style={{
                width: "170px",
                height: "170px",
                backgroundColor: bg,
                overflow: "hidden",
            }}>
                <img loading='lazy' src={image} alt={image} style={{ objectFit: "cover" }} className="rounded-circle" />
            </div>
            <p className='mt-3 img-title'>{title}</p>
        </div>
    )
}

export default ImageContainer