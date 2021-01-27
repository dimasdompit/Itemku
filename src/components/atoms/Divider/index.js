import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const Divider = () => {
    return <View style={styles.divider} />;

};

export default Divider;

const styles = StyleSheet.create({
    divider: { width: width, height: height * 0.01, backgroundColor: '#F5F5F5' },
});
