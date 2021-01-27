import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '../../components';
import { Home, Details } from '../../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Search"
            tabBarOptions={{
                activeTintColor: '#3080E3',
                inactiveTintColor: '#8E8E8E',
            }}
        >
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <View>
                            {color === '#3080E3' ? <Icon name="search" active /> : <Icon name="search" />}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Shopping"
                component={Home}
                options={{
                    tabBarLabel: 'Shopping',
                    tabBarIcon: ({ color }) => (
                        <View>
                            {color === '#3080E3' ? <Icon name="shopping" active /> : <Icon name="shopping" />}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Troley"
                component={Home}
                options={{
                    tabBarLabel: 'Troley',
                    tabBarIcon: ({ color }) => (
                        <View>
                            {color === '#3080E3' ? <Icon name="troley" active /> : <Icon name="troley" />}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Home}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <View>
                            {color === '#3080E3' ? <Icon name="user" active /> : <Icon name="user" />}
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AppTab" component={AppTab} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={Details}
                    options={({ route }) => ({
                        headerBackTitleVisible: false,
                        headerTransparent: true,
                        headerTitle: false,
                        headerTintColor: '#fff',
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
