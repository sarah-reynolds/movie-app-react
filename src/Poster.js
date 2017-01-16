import React, { Component } from 'react';
import { Link } from 'react-router';
class Poster extends Component{
	render(){
		var imagePath = 'http://image.tmdb.org/t/p/w300'+this.props.poster.poster_path;
		var posterLink = '/movie/'+this.props.poster.id;
		return(
			<div className='col-sm-6 col-md-3 movie-poster'>
				<Link to={posterLink} ><img role='presentation' src={imagePath} /></Link>
			</div>
		)
	}
}

export default Poster;