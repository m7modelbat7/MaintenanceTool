import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import MediaItem from '../MediaItem/MediaItem';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    async function getMovies() {
        try {
            setLoading(true);
            setError('');

            const { data } = await axios.get(
                'https://api.themoviedb.org/3/movie/popular',
                {
                    params: {
                        language: 'en-US',
                        page: 1,
                    },
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`,
                    },
                }
            );

            setMovies(data.results);
        } catch (err) {
            setError('Something went wrong while fetching movies.');
            console.error(err);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <section className="py-4">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-12">
                        <h2>Popular Movies</h2>
                        <p className="text-muted">Data from TMDB API</p>
                    </div>

                    <div className="col-12">
                        {loading && <Loader />}
                        {error && <p className="alert alert-danger">{error}</p>}
                        {!loading && !error && (
                            <>
                                <h2>Movies loaded successfully: {movies.length}</h2>

                                <div className="row g-2">
                                    {movies.map((movie) => (
                                        <div className="col-md-3" key={movie.id}>
                                            <MediaItem  movie={movie} />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}