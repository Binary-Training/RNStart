import { Link } from '@react-navigation/native';
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Setting = () => {
    return(
        <View style={styles.container}>
            <Text>Setting</Text>
            <Link to={{screen:'Contact'}}>Go to Contact Page</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    }
})
export default Setting;