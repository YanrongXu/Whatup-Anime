import React from 'react'

const DEFAULT_IMAGE = 'https://miro.medium.com/max/1200/1*CDb7OD7D50e27r5F56xGcA.jpeg'

const Anime = ({anime}) => {
    const poster = anime.image_url === "N/A" ? DEFAULT_IMAGE : anime.image_url
    return (
        <div className='anime'>
            <h2>{anime.title}</h2>
            <div>
                <img width='200' height="267" alt={`anime name`}
                    src={poster} />
            </div>
        </div>
    )
}

export default Anime
