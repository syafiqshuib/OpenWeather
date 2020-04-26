import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native'

const Splash = ({ navigation }) => {

    async function performTimeConsumingTask() {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    }

    useEffect(() => {
        const loadFunction = async () => {
            const data = await performTimeConsumingTask();
            if (data !== null) {
                navigation.navigate('StackScreen');
            }
        }
        loadFunction();
    }, []);


    return (
        <View style={styles.viewStyles}>
            <Image
                style={{ width: 300, height: 300, resizeMode: 'contain' }}
                source={require('../asset/splash.png')} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({

    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    },

})
