import React, {Component}  from 'react';
import {List} from 'material-ui'

const WebSearchResults = (ListItem) => {
    return class extends Component {
        static propTypes = {
            results: React.PropTypes.array.isRequired,
            onSelectTerm: React.PropTypes.func.isRequired
        };

        render() {
            const listItems = this.props.results.map((result, index) => {
                const selectTerm = (event) => {
                    console.log('selectTerm');
                    this.props.onSelectTerm(result.korean);
                };
                return (
                    <ListItem key={`result-${index}`} result={result} onClickResult={selectTerm}/>
                );
            });
            return (
                <List>
                    {listItems}
                </List>
            );
        };
    };
};

export default  WebSearchResults;