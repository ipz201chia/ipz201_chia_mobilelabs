import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
export default function GalleryComponent({url}: {url: string}) {
    const source =
        'https://raw.githubusercontent.com/ipz201chia/mobilelabsdata/main/pictures/' +
        url;

    return (
        <View style={styles.imageSection}>
            <Image
                style={styles.image}
                source={{
                    uri: source,
                }}
                onError={() => console.warn('Something went wrong')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageSection: {
        flex: 1,
        width: '100%',
        height: 100,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        overflow: 'hidden',
        elevation: 5,
        margin: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
