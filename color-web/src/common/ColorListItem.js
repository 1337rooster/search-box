import React  from 'react';
import {ListItem, Divider} from 'material-ui'

// primaryText can be a block element instead of a string.
const ColorListItem = ({result, onClickResult}) => {
    return (
        <div>
            <ListItem primaryText={result.korean + ' (' + result.english + ')'}
                      onClick={onClickResult}/>
            <Divider/>
        </div>
    );
};

ColorListItem.propTypes = {
    result: React.PropTypes.object.isRequired,
    onClickResult: React.PropTypes.func.isRequired
};

export default ColorListItem;