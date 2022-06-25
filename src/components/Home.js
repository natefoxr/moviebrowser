import { ReactComponent as TmdbLogo } from './tmdbBig.svg';
import Hero from './Hero';

const Home = () => {

    return (
      <div>
        <Hero text="Welcome to a Movie Browser Built in React.js"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="fs-3 lead">
                Hi this is a project that will help you search movies buy title and get information quickly about each one. I hope you enjoy my creation!
              </p>
              <div className="col-lg-4 offset-lg-4 my-5">
                <TmdbLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Home;