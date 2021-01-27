import React from 'react';
import { StyleSheet, View, Dimensions, TouchableNativeFeedback } from 'react-native';
import { Gap, Icon, TitleText } from '../../atoms';

const { width, height } = Dimensions.get('window');

const SearchInput = () => {
    return (
        <TouchableNativeFeedback>
            <View style={styles.searchWrapper}>
                <Icon name="search" />
                <Gap width={width * 0.03} />
                <TitleText label="Search categories/your favorite ..." size={13} color="#8E8E8E" />
            </View>
        </TouchableNativeFeedback>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    searchWrapper: {
        width: width * 0.7,
        height: height / 16,
        backgroundColor: '#FFF',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
});
