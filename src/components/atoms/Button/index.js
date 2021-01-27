import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const Button = ({ title, ...props }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} {...props}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    btnContainer: {
        height: height * 0.06,
        backgroundColor: '#DD6616',
        marginHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        justifyContent: 'center',
    },
});
