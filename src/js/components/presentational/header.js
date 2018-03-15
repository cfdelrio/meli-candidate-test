import React from 'react';
import SearchInput from './search-input';
import SearchInputContainer from '../container/search-input-container';

export default class AppContainer extends React.Component {
    render() {
        return (
            <div className="header">
                <img width="53px" height="36px" className="logo" src={require('../../../images/Logo_ML.png')} />
                <div className="search-input">
                    <SearchInputContainer/>
                </div>
            </div>
        );
    }
}
