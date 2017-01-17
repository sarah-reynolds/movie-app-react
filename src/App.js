import React, { Component } from 'react';

import BootstrapNavBar from './BootstrapNavBar'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
	constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(searchTextFromChild){
        this.setState({
            searchText: searchTextFromChild
        });
        this.props.router.push('/search/'+encodeURI(searchTextFromChild));
    }


	render() {

		// load up the movie posters array with poster components
		return (
			<div className="container">
				<div className="row">
                    <BootstrapNavBar functionFromParent={this.handleSearch} />
                    {this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
