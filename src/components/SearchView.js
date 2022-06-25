import Hero from './Hero';
import { ReactComponent as TmdbLogo } from './tmdb.svg';
import { Link } from 'react-router-dom';
import './../App.css';


// TMDB API KEY = 5a65bad7d8cb8b060220d08d2f83b7f7


const MovieCard = ({ movie }) => {
  let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  let detailUrl = `/movies/${movie.id}`

  if(posterUrl === 'https://image.tmdb.org/t/p/w500null') {
    posterUrl = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80'
  }

  return(
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
        </div>
      </div>
    </div>
  )
}



const SearchView = ( { keyword, searchResults }) => {
  let title = `You are searching for ${keyword}`
  if(keyword === "") {
    title = 'You are searching for...'
  }


  const resultsHtml = searchResults.map((obj, i) => {
    return (
      <MovieCard movie={obj} key={i} />
    )
  })

  let length = resultsHtml.length

  return (
    <div>
      <Hero text={title} />
      {(length > 0)  &&
        <div className='container'>
          <div className='row'>
            {resultsHtml}
          </div>
        </div>
      }
      {(length === 0) && (keyword.length > 0) &&
        <div className='container'>
          <div className='row'>
            <h1 className="text-center">There are no results matching {keyword}.</h1>
        </div>
      </div>
      }
      <div className="col-lg-4 offset-lg-4 my-5">
        <TmdbLogo />
      </div>
    </div>
  )
}

export default SearchView;