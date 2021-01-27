import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View, StyleSheet } from 'react-native';
import { data } from '../../../assets';
import { Gap, TitleText } from '../../atoms';
import { CardProducts } from '../../molecules';

class MenuSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            category: 'mobile-legends',
            productList: [],
        };
    }

    /* ================== Handle Change Menu Tab ================== */
    handleChange = (item, index) => {
        if (index !== this.state.active) {
            this.setState({
                category: item,
                active: index,
            }, () => this.getItems());
        }
    };

    /* ================== Get Products by Category ================== */
    getItems = () => {
        // Filter data by category
        const product = data.products.filter(item => item.category === this.state.category);
        this.setState({ productList: product });
    }

    componentDidMount() {
        this.getItems();
    }


    render() {
        return (
            <>
                <ScrollView
                    horizontal={true}
                    style={styles.scrollview}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        data.categories.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.5}
                                onPress={() => this.handleChange(item.category, index)}
                            >
                                <View style={styles.textWrapper}>
                                    <TitleText
                                        label={item.name}
                                        size={16}
                                        color={index === this.state.active ? '#2F80ED' : '#BEBEBE'}
                                        bold={index === this.state.active}
                                    />
                                </View>
                                <Gap width={10} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                <CardProducts data={this.state.productList} />
            </>
        );
    }
}

export default MenuSlider;

const styles = StyleSheet.create({
    scrollview: {
        flexDirection: 'row',
        marginBottom: 23,
        paddingHorizontal: 6,
    },
    textWrapper: {
        marginHorizontal: 8,
    },
});
