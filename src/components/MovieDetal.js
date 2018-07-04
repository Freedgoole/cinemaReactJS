import React, { Component } from "react";
import { Poster } from "../components/Movie";
import styled from "styled-components";
class MovieDetal extends Component {
  state = {
    movies: {}
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=70406fb2caaff1343229964bdfb71c67&language=en-US`
      );
      const movies = await res.json();

      this.setState({
        movies
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const movie = this.state;
    const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
    const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.movies.backdrop_path}`}>
        <MovieInfo>
          <Poster src={`${POSTER_PATH}${movie.movies.poster_path}`} 
          alt={movie.title}/>
          <div>
            <h1>{movie.movies.title}</h1>
            <h3>{movie.movies.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetal;

const MovieWrapper = styled.div`
  position: releatuve;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
> div {
    margin-left: 20px;
}
img {
    position:relative;
    top: -5rem;
}
`;
