import React from 'react'

export default function MediaItem(props) {
    return (
        <div className="p-3 bg-light text-center">
            <img
                src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
                alt={props.movie.title}
                className="img-fluid mb-2"
            />
            <h2 className='text-truncate'>{props.movie.title}</h2>
            <p>{props.movie.overview.split(' ').slice(0, 20).join(' ')}...</p>
        </div>
    )
}
