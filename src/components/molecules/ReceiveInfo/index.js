import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TitleText } from '../../atoms';

const ReceiveInfo = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.receiveWrapper}>
                <TitleText label={`How to receive ${data.category} products`} bold />
                <TitleText label="SEE" color="#3080E3" />
            </View>
        </View>
    );
};

export default ReceiveInfo;

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginHorizontal: 18,
    },
    receiveWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
