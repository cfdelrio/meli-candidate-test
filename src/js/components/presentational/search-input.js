import React from 'react';
import { Redirect } from 'react-router'
import { SEARCH_PLACEHOLDER } from '../helper/model-helper';

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
            searchInputClick, 
        } = this;
        
        const {
            searchTerm,
            fireRedirect 
        } = this.state
        
        return (
            <div>
                <form onSubmit={searchInputClick}>
                    <input
                        type="text"
                        className="search-input" 
                        placeholder={SEARCH_PLACEHOLDER}
                        onChange={searchUpdated}
                        ref={(input) => {this.textInput = input}}
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
        this.setState({
            searchTerm: event.target.value,
            fireRedirect: false,
        })
    }

    searchInputClick() {
        const { onSubmitSearch } = this.props;
        const { searchTerm } = this.state;

        this.setState({fireRedirect: true});
        onSubmitSearch(searchTerm);
        event.preventDefault();
    }
}
