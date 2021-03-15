import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SearchBar = () => {
    return (
        <View style={stayles.background}>
        <Text>SearchBar</Text>
    </View>
    )

    
};

const styles = StyleSheet.create({
    bakcground: {
        backgroundColor: '#f0eeee'
    }
});

export default SearchBar;