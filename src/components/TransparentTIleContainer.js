import React from 'react'
import TCard from './TCard'

const TransparentCardContainer = ({ tcardList }) => {
    return (
        <div className='d-flex flex-wrap gap-4 p-5 align-items-center justify-content-center'>
            {tcardList && tcardList.length > 0 ? tcardList.map((tcard) => (
                <TCard
                    image={tcard.path}
                    title={tcard.title}
                    bgColor={tcard.bgColor}
                />
            )) : ""}
        </div>
    )
}

export default TransparentCardContainer