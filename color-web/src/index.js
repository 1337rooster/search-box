import React from 'react';
import ReactDOM from 'react-dom';

// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './index.css';

import {ListItem, List, Divider, TextField} from 'material-ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Colors from './common/colors'

// primaryText can be a block element instead of a string.
const KoreanListItem = ({result, onClickResult}) => {
  return (
    <div>
      <ListItem primaryText={result.korean + ' (' + result.english + ')'}
                onClick={onClickResult}/>
      <Divider/>
    </div>
  );
};


const KoreanSearchPage = () => {
  var store = new Colors();
  var textField = null;

  const listItems = store.results.map((result, index) => {
    console.log('listItems ');
    const selectTerm = (event) => {
      console.log('selectTerm ');
      store.selectTerm(result.korean);
    };
    return (
      <KoreanListItem key={`result-${index}`} result={result} onClickResult={selectTerm}/>
    );
  });

  const focusTextField = () => {
    console.log('focusTextField');
    // Explicitly focus the text input using the raw DOM API
    textField.focus();
  };

  const handleKeyDown = (event) => {
    console.log('BEFORE handleKeyDown store.query ' + store.query);
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      //onSubmit();
      store.search();
    }
    console.log('AFTER handleKeyDown store.query ' + store.query);
  };

  const handleOnChange = (event, value) => {
    console.log('BEFORE handleOnChange ' + value + " store.query " + store.query);
    //onQueryUpdate(value);
    store.updateQuery(value)
    //onSubmit();
    store.search();
    focusTextField();
    console.log('AFTER handleOnChange ' + value + " store.query " + store.query);
  };

  return <MuiThemeProvider>
    <div>
        
    <TextField hintText="Search..."
      floatingLabelFixed={true}
      fullWidth={true}
      //value={store.query}
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
      ref={(field) => { textField = field; }}
      />
    <List>
      {listItems}
    </List>

    </div>
  </MuiThemeProvider>
}

ReactDOM.render(
  <KoreanSearchPage/>,
  document.getElementById('root')
);


//import ColorListItem from './common/ColorListItem'

//const ColorSearchBox = WebSearchBox(ColorListItem);

/*
ReactDOM.render(
    <ColorSearchBox searchStore={new Colors()}/>,
    document.getElementById('root')
);*/

/*
<MuiThemeProvider>
    <div>
        
    {children}
    <WebSearchInput store={this.props.searchStore}/>

    <WebSearchResults store={this.props.searchStore}/>

    </div>
</MuiThemeProvider>


// Frame
const WebSearchFrame = ({children}) => {
    return (
        <MuiThemeProvider>
            <div>
                {children}
            </div>
        </MuiThemeProvider>
    );
};

// Input
const WebSearchInput = ({store}) => {
    var textField = null;
    const focusTextField = () => {
        // Explicitly focus the text input using the raw DOM API
        textField.focus();
    };

    const handleKeyDown = (event) => {
        console.log('query ' + store.query);
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            store.onSubmit();
        }
    };

    const handleOnChange = (event, value) => {
        store.onQueryUpdate(value);
        store.onSubmit();
        focusTextField();
    };

    return (
        <TextField hintText="Search..."
                   floatingLabelFixed={true}
                   fullWidth={true}
                   value={store.query}
                   onChange={handleOnChange}
                   onKeyDown={handleKeyDown}
                   ref={(field) => { textField = field; }}
                   />
    );

};

// Results
const WebSearchResults = (ListItem) => {
    return class extends Component {
        static propTypes = {
            store: React.PropTypes.object.isRequired,
        };

        render() {
            const listItems = this.props.searchStore.results.map((result, index) => {
                const selectTerm = (event) => {
                    console.log('selectTerm');
                    this.props.searchStore.onSelectTerm(result.korean);
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


<SearchFrame>
    <SearchInput query={this.props.searchStore.query}
                    onQueryUpdate={value => this.props.searchStore.updateQuery(value)}
                    onSubmit={() => this.props.searchStore.search()}
    />
    <SearchResults
        results={this.props.searchStore.results.slice()}
        onSelectTerm={value => this.props.searchStore.selectTerm(value)}/>
</SearchFrame>

*/