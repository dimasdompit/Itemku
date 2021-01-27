import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gap, TitleText } from '../../atoms';

const ProductDescription = ({ data }) => {
    return (
        <View style={styles.container}>
            <TitleText label="Product Description" bold />
            <Gap height={18} />
            <TitleText label={data.description} size={14} />
            <Gap height={18} />
            <TitleText label="..." size={14} />
            <Gap height={8} />
            <View style={styles.link}>
                <TitleText label="MORE DETAILS" color="#3080E3" />
            </View>
        </View>
    );
};

export default ProductDescription;

const styles = StyleSheet.create({
    container: { marginVertical: 30, marginHorizontal: 18 },
    link: { alignSelf: 'flex-end' },
});
