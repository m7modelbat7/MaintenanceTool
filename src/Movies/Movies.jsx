import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function getMovies() {
    try {
      setLoading(true);
      setError('');

      const {data} = await axios.get(
        'https://api.themoviedb.org/3/movie/popular',
        {
          params: {
            language: 'en-US',
            page: 1,
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          },
        }
      );
      const moviesData = data.results
      const moviesTitles = moviesData.map((movie) => movie.title);
      setMovies(moviesTitles);
    } catch (err) {
      setError('Something went wrong while fetching movies.');
      console.error(err);
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
            {loading && <p>Loading movies...</p>}
            {error && <p className="text-danger">{error}</p>}
            {!loading && !error && (
        <>
              <p>Movies loaded successfully: {movies.length}</p>
              <ul>
                {movies.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul> 

        </>

            )}
          </div>
        </div>
      </div>
    </section>
  );
}