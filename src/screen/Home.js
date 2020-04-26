import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import {
    convertDate,
    convertDate2,
    tempConverter,
    temperatureConverter,
} from '../util/convertDatetime';

const Home = ({ navigation, route }) => {

    const [data] = useState(route.params.data);
    const { city } = route.params;
    const { state } = route.params;

    return (
        <View style={{ height: '100%' }}>

            <View style={{ height: '25%', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
                    {city}, {state}, {data.city.country}
                </Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
                    {convertDate(data.list[0].dt_txt)}
                </Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 55 }}>
                    {tempConverter(data.list[0].main.temp)}
                </Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20, color: 'grey' }}>
                    {data.list[0].weather[0].main}
                </Text>
            </View>
            <View style={{ height: '75%', borderWidth: 0.5 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        data.list.map((weather, id) =>
                            (
                                <TouchableOpacity
                                    key={id}
                                    activeOpacity={0.7}
                                    onPress={() => navigation.navigate('Details', {
                                        weather: weather,
                                    })}>
                                    <View style={styles.btnContainer}>
                                        <View style={styles.btnSubContainer}>
                                            <Text style={{ fontSize: 15, paddingLeft: 20, fontWeight: 'bold' }}>
                                                {convertDate2(weather.dt_txt)}
                                            </Text>
                                            <Text style={{ fontSize: 15, paddingLeft: 20 }}>
                                                {temperatureConverter(weather.main.temp_min, weather.main.temp_max)}
                                            </Text>
                                            <Text style={{ fontSize: 13, paddingLeft: 20, color: 'grey' }}>
                                                {weather.weather[0].main}
                                            </Text>
                                        </View>
                                        <View style={{ flex: 0.1, justifyContent: 'center' }}>
                                            <Fontawesome name="angle-right" color="red" size={30} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                    }
                </ScrollView>
            </View>
        </View>
    );
}



export default Home

const styles = StyleSheet.create({

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        height: 90,
    },

    btnSubContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

})
