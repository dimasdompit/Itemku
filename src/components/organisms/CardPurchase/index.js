import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { PurchaseInfo } from '../../molecules';

const { width, height } = Dimensions.get('window');

const CardPurchase = ({ sold, ...props }) => {
    return (
        <View style={styles.container} {...props}>
            <PurchaseInfo icon="cart-plus" title="Minimum Buy:" total={1} />
            <PurchaseInfo icon="shopping" title="Sold:" total={`${sold} (100%)`} />
        </View>
    );
};

export default CardPurchase;

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
});
