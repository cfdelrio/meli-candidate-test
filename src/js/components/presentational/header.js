import React from 'react';
import SearchInput from './search-input';

export default class AppContainer extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="search-input">
                    <SearchInput/>
                </div>
            </div>
        );
    }
}
