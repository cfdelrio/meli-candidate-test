import React from 'react';
import SearchInput from './search-input';
import SearchInputContainer from '../container/search-input-container';

export default class AppContainer extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="search-input">
                    <SearchInputContainer/>
                </div>
            </div>
        );
    }
}
