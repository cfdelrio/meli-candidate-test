import React from 'react';
import { Redirect } from 'react-router'

export default class searchInput extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            searchTerm: this.props.searchTerm,
            fireRedirect: false,
        };

        this.searchUpdated = this.searchUpdated.bind(this);
        this.searchInputClick= this.searchInputClick.bind(this);
    }
    
    render() {
        const {
            searchUpdated,
            searchInputClick
        } = this;
        const { fireRedirect, searchTerm } = this.state

        return (
            <div>
                <form onSubmit={searchInputClick}>
                    <input
                        type="text"
                        className="search-input" 
                        placeholder="Nunca dejes de buscar"
                        onChange={ searchUpdated }
                        />
                        <label for="input"></label>
                </form>
                {fireRedirect && (
                    <Redirect to={`/items?q=${searchTerm}`}/>
                )}
            </div>            
        );
    }
    
    searchUpdated (event) {
        this.setState({ fireRedirect: false });        
        this.setState({searchTerm: event.target.value})
    }

    searchInputClick() {
        const { onSubmitSearch } = this.props;
        const {searchTerm } = this.state;
        
        this.setState({ fireRedirect: true });        
        onSubmitSearch(searchTerm);
        event.preventDefault();
    }
}
