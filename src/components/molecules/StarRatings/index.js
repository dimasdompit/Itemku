import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gap, Icon, TitleText } from '../../atoms';

const StarRatings = () => {
    return (
        <View style={styles.container}>
            <Icon name="star" />
            <Gap width={2} />
            <TitleText label="5.0/5.0" size={13} />
        </View>
    );
};

export default StarRatings;

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center' },
});
