import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = () => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
        style={styles.inputStyle}
        placeholder='search' />
    </View>

    
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgrey',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;