import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput, Button, withTheme } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet, Image } from "react-native";

import Home from './Home';

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
                ),

            }}/>
        </Tab.Navigator>
    );
}
/* const styles = StyleSheet.create({
}); */