import React, {Component} from 'react';
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

import {observer} from 'mobx-react';


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
  return class extends Component {
    static propTypes = {
        store: React.PropTypes.object.isRequired,
    };
  
    render() {

      var textField = null;
      const store = this.props.store;
    
      const focusTextField = () => {
        console.log('focusTextField ' + textField.input.selectionStart);
        // Explicitly focus the text input using the raw DOM API
        textField.focus();
      };
    
      const changed = () => {
        var caretPos = textField.input.selectionStart;
        store.search(caretPos);
        focusTextField();
      }

      const handleKeyDown = (event) => {
        //const ENTER_KEY = 13;
        //const LEFT_ARROW = 37;
        const UP_ARROW = 38;
        //const RIGHT_ARROW = 39;
        const DOWN_ARROW =	40;
        if (event.keyCode === DOWN_ARROW) {
          console.log('DOWN_ARROW');
        }
        if (event.keyCode === UP_ARROW) {
          console.log('UP_ARROW');
        }
        changed();
      };

      const handleOnClick = (event) => {
        changed();
      }

      const handleOnFocus = (event) => {
        changed();
      }

      const handleOnChange = (event, value) => {
        store.updateQuery(value);
        changed();
      };

      const listItems = store.results.map((result, index) => {
        const selectTerm = (event) => {
          var caretPos = textField.input.selectionStart;
          store.selectTerm(result.korean, caretPos);
        };
        return (
          <KoreanListItem key={`result-${index}`} result={result} onClickResult={selectTerm}/>
        );
      });

      return <MuiThemeProvider>
        <div>
            
        <TextField hintText="Search..."
          floatingLabelFixed={true}
          fullWidth={true}
          value={store.query}
          onChange={handleOnChange}
          onClick={handleOnClick}
          onKeyUp={handleKeyDown}
          onFocus={handleOnFocus}
          ref={(field) => { textField = field; }}
          />
        <List>
          {listItems}
        </List>
    
        </div>
      </MuiThemeProvider>;
    };
  }
}

const KoreanSearchPageView = observer(KoreanSearchPage());
const pageElement = <KoreanSearchPageView store={new Colors()}/>;

ReactDOM.render(
  pageElement,
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