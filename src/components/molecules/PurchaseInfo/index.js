import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gap, Icon, TitleText } from '../../atoms';

const PurchaseInfo = ({ icon, title, total, ...props }) => {
    return (
        <View style={styles.container} {...props}>
            <Icon name={icon} small />
            <Gap width={6} />
            <TitleText label={title} color="#BEBEBE" size={13} />
            <Gap width={6} />
            <TitleText label={total} bold size={13} />
        </View>
    );
};

export default PurchaseInfo;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
