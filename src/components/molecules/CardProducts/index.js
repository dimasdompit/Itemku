import React, { useState } from 'react';
import { withNavigation } from '@react-navigation/compat'
import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { ProductCardContent } from '..';
import { Icon } from '../../atoms';

const { width, height } = Dimensions.get('window');

const CardProducts = ({ data, navigation, ...props }) => {
    const [isActive, setActive] = useState(false);

    const handleLike = () => {
        if (!isActive) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    return (
        <>
            {
                data.length !== 0 && data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        style={styles.container}
                        onPress={() => navigation.navigate('Details', { id: item.id })}
                        {...props}
                    >
                        <Image source={item.image} style={styles.image} />
                        <ProductCardContent
                            product_title={item.product_title}
                            stock={item.stock}
                            price={item.price}
                            discount={item.discount}
                            instant_delivery={item.instant_delivery}
                            sold={item.sold}
                        />
                        <View>
                            <Icon name="like" active={isActive} onPress={handleLike} />
                        </View>
                    </TouchableOpacity>
                ))
            }
        </>
    );
};

export default withNavigation(CardProducts);

const styles = StyleSheet.create({
    container: {
        padding: width * 0.04,
        width: width * 0.9,
        height: height * 0.2,
        backgroundColor: '#FFF',
        borderRadius: 16,
        alignSelf: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    image: {
        width: '35%',
        height: '100%',
        borderRadius: 8,
    },
    textWrapper: {
        flex: 1,
        marginLeft: 20,
        alignSelf: 'center',
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
