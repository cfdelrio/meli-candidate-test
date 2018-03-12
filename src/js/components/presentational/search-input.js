import React from 'react';

export default class searchInput extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this);
        this.searchInputClick= this.searchInputClick.bind(this);
    }
    
    render() {
        const {
            searchUpdated,
            searchInputClick
        } = this;

        return (
            <form onSubmit={searchInputClick}>
                <input
                    type="text"
                    className="search-input" 
                    placeholder="Nunca dejes de buscar"
                    onChange={ searchUpdated }
                    searchClick={ searchInputClick }
                    value={this.state.searchTerm}
                />
            </form>
        );
    }
    
    searchUpdated (event) {
        this.setState({searchTerm: event.target.value})
    }

    searchInputClick() {
        console.debug(this.state);
        event.preventDefault();
    }
}
