import React from 'react';
import { StyleSheet, View } from 'react-native';
import formatCurrency from '../../../utils/formatCurrency';
import { Gap, Tag, TitleText } from '../../atoms';

const ProductCardContent = ({ product_title, stock, price, discount, instant_delivery, sold }) => {
    return (
        <View style={styles.textWrapper}>
            <TitleText label={product_title} size={16} />
            <Gap height={3} />
            <Tag variant="stock" stock={stock} />
            <Gap height={3} />
            <View style={styles.priceWrapper}>
                <TitleText label={formatCurrency(price - (price * discount / 100))} size={16} bold color="#DD6616" />
                <Gap width={3} />
                {
                    discount > 0
                        ? <TitleText label={formatCurrency(price)} decorator size={13} color="#BEBEBE" />
                        : null
                }
            </View>
            <Gap height={3} />
            {
                instant_delivery
                    ? (
                        <Tag variant="delivery" />
                    ) :
                    null
            }
            <Gap height={3} />
            <TitleText label={`${sold} product sold`} size={8} color="#BEBEBE" />
        </View>
    );
};

export default ProductCardContent;

const styles = StyleSheet.create({
    textWrapper: {
        flex: 1,
        marginLeft: 10,
        alignSelf: 'center',
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
