import React  from 'react';
import {TextField} from 'material-ui';

const WebSearchInput = ({query, onSubmit, onQueryUpdate}) => {
    var textField = null;
    const focusTextField = () => {
        // Explicitly focus the text input using the raw DOM API
        textField.focus();
    };

    const handleKeyDown = (event) => {
        console.log('query ' + query);
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            onSubmit();
        }
    };

    const handleOnChange = (event, value) => {
        onQueryUpdate(value);
        onSubmit();
        focusTextField();
    };

    return (
        <TextField hintText="Search..."
                   floatingLabelFixed={true}
                   fullWidth={true}
                   value={query}
                   onChange={handleOnChange}
                   onKeyDown={handleKeyDown}
                   ref={(field) => { textField = field; }}
                   />
    );

};

WebSearchInput.propTypes = {
    query: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onQueryUpdate: React.PropTypes.func.isRequired
};

export default WebSearchInput;