import React from 'react'

const DEFAULT_IMAGE = 'https://miro.medium.com/max/1200/1*CDb7OD7D50e27r5F56xGcA.jpeg'

const Anime = ({anime}) => {
    const poster = anime.image_url === "N/A" ? DEFAULT_IMAGE : anime.image_url
    var title = anime.title.length > 18 ? anime.title.substring(0, 18) + '...' : anime.title 
    return (
        <div className='anime'>
            <h2>{title}</h2>
            <div className='image-container'>
                <img className='image' width='200' height="267" alt={`anime name`}
                    src={poster} />
                <div className='description'>
                    <div>{anime.synopsis}</div>
                    <a href={anime.url} target="_blank"><button className='button'>More Info</button></a>
                </div>
            </div>
        </div>
    )
}

export default Anime
