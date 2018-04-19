import React from 'react';
import {View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: 'center',
        paddingVertical: 5,
        borderTopWidth: 1,
        borderBottomWidth: 1
    }
});

const HorizontalDivider = ({children}) => <View style={style.container}>
    {children}
</View>;

export default HorizontalDivider;