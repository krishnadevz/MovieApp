import React from "react";
import { Link } from "@reach/router";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
import { StyledGridContent } from "../styles/StyledGrid";
import PropTypes from 'prop-types';

const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </StyledMovieThumb>
);
MovieThumb.propTypes={
  image:PropTypes.string,
  movieid:PropTypes.number,
  clickable:PropTypes.bool,
}
export default MovieThumb;
