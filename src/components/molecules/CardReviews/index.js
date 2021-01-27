import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { StarReviews } from '..';
import { TitleText } from '../../atoms';

const { width, height } = Dimensions.get('window');

const CardReviews = () => {
    return (
        <View style={styles.container}>
            <View style={styles.reviewsWrapper}>
                <TitleText label="John Doe" size={13} />
                <TitleText label="2021-01-25 16:55:54" size={12} color="#8E8E8E" />
            </View>

            <StarReviews />

            <TitleText label="Nice!" size={14} />
        </View>
    );
};

export default CardReviews;

const styles = StyleSheet.create({
    container: {
        width: width * 0.7,
        height: height * 0.13,
        borderWidth: 1,
        borderColor: '#BEBEBE',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 14,
        marginRight: 10,
    },
    reviewsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
