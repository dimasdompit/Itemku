import React from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import { LogoImg } from '../../../assets';
import { Icon } from '../../atoms';
import { SearchInput } from '../../molecules';

const { width, height } = Dimensions.get('window');

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <Image source={LogoImg} style={styles.logo} />
            <View style={styles.searchWrapper}>
                <SearchInput />
                <Icon name="favorite" />
                <Icon name="notification" />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerWrapper: {
        flex: 1,
        paddingHorizontal: 18,
        backgroundColor: '#3080E3',
        height: height / 3,
        width: width,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    logo: {
        marginTop: 20,
        width: 100,
        height: 29,
    },

    searchWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
});
