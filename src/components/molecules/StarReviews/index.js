import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '../../atoms';

const StarReviews = () => {
    return (
        <View style={styles.container}>
            {
                [1, 2, 3, 4, 5].map((_, i) => (
                    <Icon key={i} name="star" />
                ))
            }
        </View>
    );
};

export default StarReviews;

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginTop: 8, marginBottom: 18 },
});
