import {
    Text,
    View,
    Button,
    StyleSheet,
    ScrollView,
    TextInput,
    SafeAreaView,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function ProfileScreen() {
    return (
        <View style={styles.main}>
            <View style={styles.sectionTitle}>
                <Text style={styles.title}>Реєстрація</Text>
            </View>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.sectionForm}>
                        <View style={styles.formBlock}>
                            <Text style={styles.label}>Електронна пошта</Text>
                            <TextInput
                                style={styles.input}
                                inputMode="email"
                                keyboardType="email-address"
                                spellCheck={false}
                                maxLength={64}
                            />
                        </View>
                        <View style={styles.formBlock}>
                            <Text style={styles.label}>Пароль</Text>
                            <TextInput
                                style={styles.input}
                                inputMode="text"
                                keyboardType="visible-password"
                                textContentType={'newPassword'}
                                secureTextEntry={true}
                                spellCheck={false}
                                maxLength={16}
                            />
                        </View>
                        <View style={styles.formBlock}>
                            <Text style={styles.label}>Пароль (ще раз)</Text>
                            <TextInput
                                style={styles.input}
                                inputMode="text"
                                keyboardType="visible-password"
                                secureTextEntry={true}
                                spellCheck={false}
                                maxLength={16}
                            />
                        </View>
                    </View>
                    <View style={styles.sectionForm}>
                        <View style={styles.formBlock}>
                            <Text style={styles.label}>Прізвище</Text>
                            <TextInput
                                style={styles.input}
                                inputMode="text"
                                textContentType="middleName"
                            />
                        </View>
                        <View style={styles.formBlock}>
                            <Text style={styles.label}>Ім'я</Text>
                            <TextInput
                                style={styles.input}
                                inputMode="text"
                                textContentType="name"
                            />
                        </View>
                    </View>
                    <View style={styles.sectionForm}>
                        <View style={styles.formBlock}>
                            <Button
                                title="Зареєструватися"
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                </ScrollView>
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
        color: Colors.darker,
    },
    sectionForm: {
        marginVertical: 10,
        marginHorizontal: 15,
    },
    formBlock: {
        marginVertical: 5,
    },
    input: {
        height: 40,
        borderColor: Colors.border,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: Colors.darker,
    },
    label: {
        color: Colors.darker,
    },
});
