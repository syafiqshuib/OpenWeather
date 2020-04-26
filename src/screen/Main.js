import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, TouchableOpacity, SafeAreaView, Image, Alert, ActivityIndicator, StatusBar } from 'react-native';
import { TextInput } from 'react-native'
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

function Main({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    //Function to search weather
    async function searchWeather() {
        if (state === "") {
            alert("Please insert state")
        } else if (city === "") {
            alert("Please insert city")
        } else {
            try {
                setLoading(true);
                const result = await axios(
                    'http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + state + '&APPID=873d6409c81db4f8736ceb10ffe17f9d&cnt=20',
                );
                navigation.navigate('Home', { data: result.data, city: city, state: state })

            } catch (error) {
                Alert.alert(
                    'Info',
                    "Sorry, you have enter wrong location or location is not register yet.",
                );
            }
            setLoading(false) //stop loading icon
            setCity(""); //clear city input
            setState(""); //clear state inpur
        }
    }

    if (loading) {
        return (
            <View
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <StatusBar backgroundColor="red" />
                <ActivityIndicator size="large" color='red' />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, height: '100%' }}>
            <StatusBar backgroundColor="red" />
            <KeyboardAvoidingView
                behavior="position"
                keyboardVerticalOffset={50}
            >
                <View style={styles.mainContainer}>

                    <View style={{ alignItems: 'center', marginBottom: 30 }}>
                        <Image
                            style={{ width: 150, height: 150, resizeMode: 'contain', backgroundColor: 'black' }}
                            source={require('../asset/openweather.png')}
                        />
                    </View>

                    <TextInput
                        value={state}
                        onChangeText={(state) => setState(state)}
                        placeholder={'State'}
                        style={styles.input}
                    />
                    <TextInput
                        value={city}
                        onChangeText={(city) => setCity(city)}
                        placeholder={'City'}
                        style={styles.input}
                    />

                    <View style={styles.SignInBtn}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.searchBtn}
                            onPress={() => searchWeather()}>
                            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>Search</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}
export default Main;

const styles = StyleSheet.create({

    mainContainer: {
        padding: '10%',
        marginTop: 100
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15
    },

    picker: {
        height: 40,
        paddingHorizontal: '30%',
        marginBottom: 15
    },

    searchBtn: {
        marginTop: 30,
        paddingHorizontal: '30%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 50,
    },


})