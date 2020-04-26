import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  convertDate,
  tempConverter,
} from '../util/convertDatetime';

const Detail = ({ route }) => {
  const { weather } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
        {convertDate(weather.dt_txt)}
      </Text>
      <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 55 }}>
        {tempConverter(weather.main.temp)}
      </Text>
      <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20, color: 'grey' }}>
        {weather.weather[0].main}
      </Text>
    </View>
  );
}

export default Detail

const styles = StyleSheet.create({})
