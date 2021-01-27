import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import formatCurrency from '../../../utils/formatCurrency';
import { Gap, Tag, TitleText } from '../../atoms';

const { width, height } = Dimensions.get('window');

const CardDenoms = ({ data }) => {
    return (
        <View style={styles.container}>
            <TitleText label="Other Denoms in this Shop" bold />
            <Gap height={14} />
            <View style={styles.outer}>
                {
                    [1, 2, 3, 4].map((_, i) => (
                        <TouchableOpacity key={i} style={styles.cardWrapper}>
                            <TitleText label="87 Diamonds" />
                            <Gap height={23} />
                            <Tag variant="stock" stock={data.stock} />
                            <Gap height={8} />
                            <TitleText label={formatCurrency(50000)} bold size={16} color="#DD6616" />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    );
};

export default CardDenoms;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18,
        marginTop: 30,
        marginBottom: 10,
    },
    outer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardWrapper: {
        width: width * 0.35,
        height: height * 0.16,
        backgroundColor: '#FFF',
        borderRadius: 8,
        elevation: 3,
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginRight: 18,
        marginBottom: 18,
    },
});
