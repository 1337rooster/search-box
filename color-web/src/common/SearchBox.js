import React, {Component} from 'react';

const SearchBox = (SearchFrame, SearchInput, SearchResults) => {
    return class extends Component {
        static propTypes = {
            searchStore: React.PropTypes.object.isRequired,
        };

        render() {
            return (
                <SearchFrame>
                    <SearchInput query={this.props.searchStore.query}
                                 onQueryUpdate={value => this.props.searchStore.updateQuery(value)}
                                 onSubmit={() => this.props.searchStore.search()}
                    />
                    <SearchResults
                        results={this.props.searchStore.results.slice()}
                        onSelectTerm={value => this.props.searchStore.selectTerm(value)}/>
                </SearchFrame>
            );
        }
    };
};


export default SearchBox