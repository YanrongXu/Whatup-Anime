import React from 'react'

const DEFAULT_IMAGE = 'https://miro.medium.com/max/1200/1*CDb7OD7D50e27r5F56xGcA.jpeg'

const Anime = ({anime}) => {

    return (
        <div className='anime'>
            <h2>Fruits Basket</h2>
            <div>
                <img width='200' height="267" alt={`anime name`}
                    src={DEFAULT_IMAGE} />
            </div>
        </div>
    )
}

export default Anime
