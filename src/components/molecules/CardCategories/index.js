import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { data } from '../../../assets';
import { Icon, TitleText } from '../../atoms';

const CardCategories = () => {
    return (
        <View style={styles.categoryContainer}>
            {
                data.type.map((item, index) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={index}
                        style={styles.categoryBtn}
                        onPress={() => alert(item.name)}
                    >
                        <View style={styles.categoryIcon}>
                            <Icon name="type" icon={item.icon} />
                        </View>
                        <View style={styles.categoryText}>
                            <TitleText label={item.name} size={13} center />
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
};

export default CardCategories;

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
        marginTop: 30,
        marginBottom: 27,
    },
    categoryBtn: {
        marginBottom: 15,
        width: '25%',
        marginHorizontal: 0,
    },
    categoryIcon: {
        borderWidth: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
    },
    categoryText: {
        width: '75%',
        marginTop: 10,
        alignSelf: 'center',
    },
});
