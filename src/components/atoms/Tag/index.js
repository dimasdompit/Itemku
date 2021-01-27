import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Tag = ({ variant, large, stock, delivery, discount, ...props }) => {
    return (
        <>
            {
                variant === 'stock'
                    ? (
                        <View style={styles.stockWrapper(large)}>
                            <Text style={styles.textStock(large)}>{stock > 1000 ? 'Stock 999+' : `Stock ${stock}`}</Text>
                        </View>
                    ) : null
            }

            {
                variant === 'delivery'
                    ? (
                        <View style={styles.tagDelivery(large)}>
                            <Text style={styles.textDelivery(large)}>Instant Delivery</Text>
                        </View>
                    ) : null
            }

            {
                variant === 'discount'
                    ? (
                        <View style={styles.tagDiscount(large)}>
                            <Text style={styles.textDiscount}>{`${discount}%`}</Text>
                        </View>
                    ) : null
            }
        </>
    );
};

export default Tag;

const styles = StyleSheet.create({
    stockWrapper: (large) => ({
        paddingVertical: large ? 5 : 3,
        paddingHorizontal: large ? 5 : 3,
        borderWidth: 1,
        borderColor: '#36785C',
        width: large ? width * 0.20 : width * 0.16,
        borderRadius: 4,
    }),
    textStock: (large) => ({
        fontSize: large ? 13 : 10,
        textAlign: 'center',
        color: '#36785C',
    }),
    tagDelivery: (large) => ({
        paddingVertical: large ? 5 : 3,
        paddingHorizontal: large ? 5 : 3,
        backgroundColor: '#D5ECD9',
        width: large ? width * 0.28 : width * 0.20,
        borderRadius: 4,
    }),
    textDelivery: (large) => ({
        fontSize: large ? 13 : 10,
        textAlign: 'center',
        color: '#36785C',
    }),
    tagDiscount: (large) => ({
        padding: large ? 4 : 3,
        backgroundColor: '#C23030',
        borderRadius: 4,
    }),
    textDiscount: {
        fontSize: 13,
        textAlign: 'center',
        color: '#FFF',
    },
});
