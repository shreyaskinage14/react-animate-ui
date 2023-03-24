import React from 'react'

const TitleComponent = ({ title }) => {
    return (
        <>
            <div className='d-flex p-3 align-items-center justify-content-center'>
                <h2 className='m-3 title-lines'><span>{title}</span></h2>
            </div>
        </>
    )
}

export default TitleComponent