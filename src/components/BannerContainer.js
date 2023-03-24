import React from 'react'
import { homeBanner, middleBanner, endBanner } from '../utils/imagePath';

const BannerContainer = ({ name }) => {

    const imageList = {
        homeBanner, middleBanner, endBanner
    }

    return (
        <div className='reveal'>
            <img loading='lazy' src={imageList[name]} alt="Images" className="img-fluid w-100" />
        </div>
    )
}

export default BannerContainer