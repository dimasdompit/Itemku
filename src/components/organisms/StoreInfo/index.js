import React from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';
import { Gap, TitleText } from '../../atoms';
import { StarRatings } from '../../molecules';

const { width } = Dimensions.get('window');

const StoreInfo = ({ data }) => {
    return (
        <View style={styles.container}>
            <TitleText label="Store" bold />
            <Gap height={12} />
            <View style={styles.storeWrapper}>
                <Image source={data.store_image} style={styles.image} />
                <View style={styles.text}>
                    <TitleText label={data.store} />
                    <Gap height={4} />
                    <TitleText label="1 hour ago" color="#BEBEBE" size={13} />
                </View>
                <StarRatings />
            </View>
        </View>
    );
};

export default StoreInfo;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18,
        marginVertical: 30,
    },
    storeWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    image: {
        width: width * 0.11,
        height: width * 0.11,
        resizeMode: 'cover',
    },
    text: {
        marginRight: 10,
        marginLeft: 8,
    },
});
