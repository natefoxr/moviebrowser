import Hero from './Hero';
import { Link } from 'react-router-dom';

const AboutView = () => {
    return (
      <div>
        <Hero text="About Me"/>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                My name is Nate Moudakis. Right now I am enrolled in The Ultimate 2022 Fullstack Web Development Bootcamp by Kane Ezki, Kalob Taulien, and Radek Wilk 
                through Udemy.com. I have learned a lot of useful skills in this course working with HTML, CSS, JavaScrip, Bootstrap 5, JQuery, and React.js and am utilizing
                those skills to create a project that is useful to others. While this project is a follow along guide, there are aspects that will be my own. I take no
                credit for the ideas and inspiration behind the design or code for a majority of the website. You can follow along with my progress
                <Link className="text-decoration-none text-dark active" to={{ pathname: 'https://github.com/natefoxr'}} target="_blank"> @natefoxr </Link>
                on Github.
              </p>
              <Link className="btn btn-outline-success p-2 text-center mb-4" to={{ pathname: 'https://github.com/natefoxr'}} target="_blank">Go to Nate's Github</Link>
              <br></br>
              <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/205080154_4234487153241401_9068097711171862613_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nLpcCdcAZkwAX9MUaob&tn=yLXqBolJBQlTO3tA&_nc_ht=scontent-sjc3-1.xx&oh=00_AT9lho0lDTinyO9e2MhiE9IdVXY88mdTUogE956sx1GGiw&oe=62D9D2D9' alt="Photo of Nate Moudakis" style={{width: "30%"}}></img>
              <Link className="nav-link active py-5 my-5" aria-current="page" to="https://www.themoviedb.org/">
                This product uses the TMDB API but is not endorsed or certified by TMDB.
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutView;