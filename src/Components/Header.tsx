import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
    const [activeScreen, setActiveScreen] = useState('Home');
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', e => {
            if (e.data && e.data.state && e.data.state.routes.length > 0) {
                const routeName = e.data.state.routes[e.data.state.index].name;
                setActiveScreen(routeName);
            }
        });

        return unsubscribe;
    }, [navigation]);

    const setActiveColor = (screen: string): string => {
        return activeScreen === screen ? '#318CE7' : Colors.darker;
    };

    return (
        <View style={{}}>
            <View style={styles.header}>
                <Text style={styles.headerText}>FirstMobileApp</Text>
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity
                    style={styles.navButtons}
                    onPress={() => navigation.navigate('Home' as never)}>
                    <Icon
                        name="home"
                        size={32}
                        color={setActiveColor('Home')}
                    />
                    <Text style={{color: setActiveColor('Home')}}>Головна</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navButtons}
                    onPress={() => navigation.navigate('Gallery' as never)}>
                    <Icon
                        name="view-gallery-outline"
                        size={32}
                        color={setActiveColor('Gallery')}
                    />
                    <Text style={{color: setActiveColor('Gallery')}}>
                        Фотогалерея
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navButtons}
                    onPress={() => navigation.navigate('Profile' as never)}>
                    <Icon
                        name="account"
                        size={32}
                        color={setActiveColor('Profile')}
                    />
                    <Text style={{color: setActiveColor('Profile')}}>
                        Профіль
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 10,
        backgroundColor: Colors.lighter,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: Colors.darker,
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.lighter,
        paddingHorizontal: 10,
    },
    navButtons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
});
