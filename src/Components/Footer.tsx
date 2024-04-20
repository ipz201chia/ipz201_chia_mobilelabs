import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Footer() {
    return (
        <View style={{backgroundColor: Colors.lighter}}>
            <Text style={[styles.footerText, {color: Colors.darker}]}>
                Made with ❤️ by Іванна Чернова ІПЗ-20-1
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footerText: {
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center',
    },
});
