import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Banner, CardCategories, Header, MenuSlider } from '../../components';
import { data } from '../../assets';

const Home = () => {
    return (
        <ScrollView style={styles.homeWrapper}>
            <Header />
            <Banner data={data.banner} />
            <CardCategories />
            <MenuSlider />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    homeWrapper: {
        flex: 1,
        backgroundColor: '#FFF',
        position: 'relative',
    },
});

export default Home;
