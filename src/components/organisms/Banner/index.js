import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, Dimensions, View, Text } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.4;

const Banner = ({ data, ...props }) => {
    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide);
        }
    };

    return (
        <View>
            <ScrollView
                horizontal
                pagingEnabled
                style={styles.bannerWrapper}
                decelerationRate="normal"
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                {...props}
            >
                <View style={styles.contentWrapper}>
                    {
                        data.map((banner, index) => (
                            <View key={index} style={styles.imageWrapper}>
                                <Image source={banner.image} style={styles.image} />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <View style={styles.dotWrapper}>
                {
                    data.map((item, i) => (
                        <Text key={i} style={i === active ? styles.dotActiveText : styles.dotText}>⬤</Text>
                    ))
                }
            </View>
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
    bannerWrapper: {
        marginTop: -80,
        width: width,
        height: height,
    },
    contentWrapper: {
        flexDirection: 'row',
    },
    imageWrapper: {
        marginHorizontal: width * 0.05,
    },
    image: {
        height: height,
        width: width * 0.90,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    dotWrapper: {
        flexDirection: 'row',
        marginHorizontal: width * 0.05,
    },
    dotText: {
        color: '#BEBEBE',
        margin: 3,
    },
    dotActiveText: {
        color: '#EE6000',
        margin: 3,
    },
});
