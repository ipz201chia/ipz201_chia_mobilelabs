import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NewsComponent from '../Components/newsComponent';
import {getNews} from '../fetches';

export default function HomeScreen() {
    const [news, setNews] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getNews();

            setNews(data);
        };

        fetchData();
    }, []);

    return (
        <View style={styles.main}>
            <View style={styles.sectionTitle}>
                <Text style={[styles.title, {color: Colors.darker}]}>
                    Новини
                </Text>
            </View>
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={news}
                    renderItem={({item}) => (
                        <NewsComponent
                            title={item.title}
                            date={item.publishedAt}
                            description={item.description}
                            urlToImage={item.urlToImage}
                        />
                    )}
                    keyExtractor={item => item.id}
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
