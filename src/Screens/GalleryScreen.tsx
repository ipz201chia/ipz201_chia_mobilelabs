import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import GalleryComponent from '../Components/galleryComponent';
import {getImages} from '../fetches';

export default function GalleryScreen() {
    const [images, setImages] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getImages();
            setImages(data);
        };

        fetchData();
    }, []);

    return (
        <View style={styles.main}>
            <View style={styles.sectionTitle}>
                <Text style={[styles.title, {color: Colors.darker}]}>
                    Галерея
                </Text>
            </View>
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={images}
                    renderItem={({item}) => (
                        <GalleryComponent url={item.urlToImage as string} />
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
    },
    sectionTitle: {
        marginVertical: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
    },
});
