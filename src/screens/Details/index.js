import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { data } from '../../assets';
import { Button, CardDenoms, Divider, ProductDescription, ProductDetails, ReceiveInfo, RecentReviews, StoreInfo } from '../../components';

const { width, height } = Dimensions.get('window');

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            denoms: [],
            isActive: false,
        };
    }

    handleLike = () => {
        if (!this.state.isActive) {
            this.setState({ isActive: true });
        } else {
            this.setState({ isActive: false });
        }
    };

    getProductDetails = () => {
        const id = this.props.route.params.id;
        const product = data.products.find(item => item.id === id);
        this.setState({ product: product });
    }

    componentDidMount() {
        this.getProductDetails();
    }

    render() {
        const { product, isActive } = this.state;
        return (
            <>
                <ScrollView style={styles.detailsWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image source={product.image} style={styles.backgroundImage} />
                    </View>
                    <ProductDetails data={product} isActive={isActive} onPress={this.handleLike} />
                    <Divider />
                    <StoreInfo data={product} />
                    <Divider />
                    <CardDenoms data={product} />
                    <Divider />
                    <RecentReviews />
                    <Divider />
                    <ReceiveInfo data={product} />
                    <Divider />
                    <ProductDescription data={product} />
                </ScrollView>
                <View style={styles.footer}>
                    <Button title="Add to Cart" onPress={() => alert('Add to cart success!')} />
                </View>
            </>
        );
    }
}

export default Details;

const styles = StyleSheet.create({
    detailsWrapper: {
        flex: 1,
        backgroundColor: '#FFF',
        position: 'relative',
    },
    imageWrapper: {
        backgroundColor: '#000',
    },
    backgroundImage: {
        width: width,
        height: height * 0.27,
        resizeMode: 'contain',
    },
    footer: {
        width: width,
        height: height * 0.08,
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
});
