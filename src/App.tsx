import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './Screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './Components/Header';
import Footer from './Components/Footer';
import GalleryScreen from './Screens/GalleryScreen';
import ProfileScreen from './Screens/profileScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
    return (
        <View style={{flex: 1}}>
            <NavigationContainer>
                <Header />
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor={Colors.lighter}
                />
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={'Home'}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Gallery" component={GalleryScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
                <Footer />
            </NavigationContainer>
        </View>
    );
}

export default App;
