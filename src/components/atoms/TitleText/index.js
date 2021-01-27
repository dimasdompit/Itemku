import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = ({ size, bold, color, center, decorator, label, ...props }) => {
    return (
        <Text style={styles.text(size, bold, color, center, decorator)} {...props}>{label}</Text>
    );
};

export default TitleText;

const styles = StyleSheet.create({
    text: (size, bold, color, center, decorator) => ({
        display: 'flex',
        fontSize: size || 16,
        fontWeight: bold ? 'bold' : 'normal',
        color: color || '#000',
        textAlign: center ? 'center' : 'left',
        textDecorationLine: decorator ? 'line-through' : 'none',
        textDecorationStyle: decorator ? 'solid' : null,
    }),
});
