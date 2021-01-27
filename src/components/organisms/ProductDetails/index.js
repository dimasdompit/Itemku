import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { CardPurchase } from '..';
import formatCurrency from '../../../utils/formatCurrency';
import { Gap, Icon, Tag, TitleText } from '../../atoms';

const { width, height } = Dimensions.get('window');

const ProductDetails = ({ data, onPress, isActive }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <TitleText label={data.product_title} size={16} bold />
                <Icon name="like" active={isActive} large onPress={onPress} />
            </View>
            <Gap height={4} />
            <TitleText label={data.category} size={13} color="#BEBEBE" />
            <Gap height={30} />

            {
                data.discount > 0
                    ? <TitleText label={formatCurrency(data.price)} size={13} decorator color="#BEBEBE" />
                    : null
            }

            <View style={styles.priceWrapper}>
                <TitleText label={formatCurrency(data.price - (data.price * data.discount / 100))} size={22} color="#DD6616" />
                <Gap width={8} />
                {
                    data.discount > 0
                        ? (
                            <>
                                <Tag variant="discount" large discount={data.discount} />
                                <Gap width={8} />
                            </>
                        )
                        : null
                }
                <TitleText label="per 1 Top Up" size={13} color="#BEBEBE" />
            </View>
            <Gap height={20} />
            <View style={styles.stockWrapper}>
                <Tag variant="stock" stock={data.stock} large />
                <Gap width={14} />
                <Tag variant="delivery" delivery={data.instant_delivery} large />
            </View>

            <CardPurchase sold={data.sold} />
        </View>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.04,
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stockWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
});
