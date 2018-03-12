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

        const {searchTermValue} = this.props;
        
        return (
            <form onSubmit={searchInputClick}>
                <input
                    type="text"
                    className="search-input" 
                    placeholder="Nunca dejes de buscar"
                    onChange={ searchUpdated }
                />
            </form>
        );
    }
    
    searchUpdated (event) {
        this.setState({searchTerm: event.target.value})
    }

    searchInputClick() {
        const { onSubmitSearch } = this.props;
        const {searchTerm } = this.state;
        onSubmitSearch(searchTerm);
        event.preventDefault();
    }
}
