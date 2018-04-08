import React  from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    ListView,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
} from 'react-native';

import MobileSearchBox from './common/MobileSearchBox';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    text: {
        flex: 1,
    }
});



const ColorListItem = ({result, onClickResult})=>{
    console.log('result ' + result)
    return (
      <TouchableHighlight onPress={onClickResult} underlayColor="blue">
        <View style={[styles.row, {backgroundColor: result.hex}]}>
          <Text style={styles.text}>{result.korean + ' (' + result.english + ')'}</Text>
        </View>
      </TouchableHighlight>
    )
};
const ColorSearchBox = MobileSearchBox(ColorListItem);
export default ColorSearchBox;