import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function NewsComponent({
    title,
    date,
    description,
    urlToImage,
}: {
    title: string;
    date: string;
    description: string;
    urlToImage: string;
}) {
    return (
        <View style={styles.newsCard}>
            <View style={styles.imageSection}>
                <Image
                    style={styles.image}
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/ipz201chia/mobilelabsdata/main/pictures/' +
                            urlToImage,
                    }}
                    onError={() => console.warn('Something went wrong')}
                />
            </View>
            <View style={styles.contentSection}>
                <View>
                    <Text
                        style={[styles.title, {color: Colors.darker}]}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {title}
                    </Text>
                </View>
                <View>
                    <Text style={[styles.date, {color: Colors.darker}]}>
                        {date}
                    </Text>
                </View>
                <View>
                    <Text
                        style={[styles.description, {color: Colors.darker}]}
                        numberOfLines={2}
                        ellipsizeMode="tail">
                        {description}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    newsCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
        gap: 15,
    },
    imageSection: {
        flex: 1,
        width: '100%',
        height: 75,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    contentSection: {
        flex: 1.5,
        width: '100%',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        overflow: 'hidden',
    },
    date: {
        fontSize: 13,
        fontStyle: 'italic',
    },
    description: {
        fontSize: 14,
    },
});
