import React from 'react'

const TiledContainer = ({ image, index }) => {
    return (
        <>
            <div className='row'>
                {index === 0 || index === 1 ?
                    <div className='col-6'>
                        <img loading='lazy' className='reveal' src={image} alt={`tiled-${index}`} />
                    </div>
                    :
                    <div className='col-4'>
                        <img loading='lazy' className='reveal' src={image} alt={`tiled-${index}`} />
                    </div>
                }
            </div>
        </>
    )
}

export default TiledContainer