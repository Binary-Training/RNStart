import { Link } from '@react-navigation/native';
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

function Home() {
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Link to={{screen:'About'}}>Go to About Page</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Home;