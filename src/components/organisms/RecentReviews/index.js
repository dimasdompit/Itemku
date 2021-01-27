import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Gap, TitleText } from '../../atoms';
import { CardReviews } from '../../molecules';


const RecentReviews = () => {
    return (
        <View style={styles.container}>
            <TitleText label="Recent Reviews" bold />
            <Gap height={18} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <CardReviews />
                <CardReviews />
            </ScrollView>
        </View>
    );
};

export default RecentReviews;

const styles = StyleSheet.create({
    container: { marginVertical: 30, marginHorizontal: 18 },
});
