import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { CartPlusIcon, FavoriteIcon, LikeActiveIcon, LikeIcon, NotificationIcon, SearchActiveIcon, SearchIcon, ShoppingActiveIcon, ShoppingIcon, StarIcon, TroleyActiveIcon, TroleyIcon, UserActiveIcon, UserIcon } from '../../../assets';

const Icon = ({ name, type, large, small, icon, active, ...props }) => {
    return (
        <View>
            {/* ============= NAVIGATION BOTTOM ICON COMPONENTS ============= */}
            {name === 'search' ? <Image source={active ? SearchActiveIcon : SearchIcon} style={styles.tabIcon(small)} /> : null}
            {name === 'shopping' ? <Image source={active ? ShoppingActiveIcon : ShoppingIcon} style={styles.tabIcon(small)} /> : null}
            {name === 'troley' ? <Image source={active ? TroleyActiveIcon : TroleyIcon} style={styles.tabIcon(small)} /> : null}
            {name === 'user' ? <Image source={active ? UserActiveIcon : UserIcon} style={styles.tabIcon(small)} /> : null}

            {/* ============= HEADER ICON COMPONENTS ============= */}
            {name === 'favorite' ? <Image source={FavoriteIcon} style={styles.headerIcon(large)} /> : null}
            {name === 'notification' ? <Image source={NotificationIcon} style={styles.headerIcon(large)} /> : null}
            {name === 'like' ? <TouchableOpacity {...props}><Image source={active ? LikeActiveIcon : LikeIcon} style={styles.headerIcon(large)} /></TouchableOpacity> : null}

            {/* ============= TYPE CATEGORIES ICON COMPONENTS ============= */}
            { name === 'type' ? <Image source={icon} style={styles.categoryIcon} /> : null}

            {name === 'cart-plus' ? <Image source={CartPlusIcon} style={styles.cartPlus} /> : null}
            {name === 'star' ? <Image source={StarIcon} style={styles.cartPlus} /> : null}
        </View>
    );
};

export default Icon;

const styles = StyleSheet.create({
    tabIcon: (small) => ({
        width: small ? 14 : 18,
        height: small ? 14 : 18,
    }),
    headerIcon: (large) => ({
        width: large ? 25 : 20,
        height: large ? 25 : 20,
    }),
    categoryIcon: {
        width: 35,
        height: 35,
    },
    cartPlus: {
        width: 14,
        height: 14,
    },
});

