import Hero from './Hero';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieView = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5a65bad7d8cb8b060220d08d2f83b7f7&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="Loading..." />
        }
        if(movieDetails){
            let posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
            let backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

            if(posterPath === 'https://image.tmdb.org/t/p/w500null') {
                posterPath = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80'
            }

            if(backdropUrl === 'https://image.tmdb.org/t/p/originalnull') {
                backdropUrl = 'https://images.unsplash.com/photo-1540266908617-307d8bdaacbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            }

            return (
                <>
                <Hero text={movieDetails.title}  backdrop={backdropUrl} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt='Movie poster' className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return renderMovieDetails()
}

export default MovieView;