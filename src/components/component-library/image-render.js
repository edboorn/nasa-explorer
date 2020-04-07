import React from 'react'

const image = ({image, explanation, copyright, date}) => {
    return (
        <div className="image">
            <img src={image} alt={explanation} />
            <p>{copyright}</p>
            <p>{date}</p>
        </div>
    )
}

export default image;