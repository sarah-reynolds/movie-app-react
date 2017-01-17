import React, { Component } from 'react';
import { Link } from 'react-router';
import Constants from './Constants';
import Config from './Config';
import $ from 'jquery';
import Poster from './Poster';


class SearchResults extends Component{
	constructor(props) {
		super(props);
		this.state = {
			searchResults: []
		}
	}

	componentDidMount() {
		var url = Constants.baseUrl+'search/movie?query='+this.props.params.movieToSearchFor+Config.api_key
		$.getJSON(url, (searchData) => {
			this.setState({
				searchResults: searchData.results,

			})
			console.log(this.state.searchResults)
		});
	}
	render(){
		var postersArray = [];
		this.state.searchResults.map((poster,index)=>{
			postersArray.push(<Poster poster={poster} key={index} />)
			return postersArray
		})
			console.log(this.state.searchResults)
		
		return(
			<div className='col-sm-12'>
				<h1>{this.props.params.movieToSearchFor}</h1>
				{postersArray}
				{ /*<Link to={posterLink} ><img role='presentation' src={imagePath} /></Link> */ }
			</div>
		)
	}
}

export default SearchResults;