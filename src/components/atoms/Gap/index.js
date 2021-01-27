import React from 'react';
import { View } from 'react-native';

const Gap = ({ width, height, ...props }) => {
    return <View style={{ width: width, height: height }} {...props} />;
};

export default Gap;