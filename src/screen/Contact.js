import { Link } from '@react-navigation/native';
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Contact = () => {
    return(
        <View style={styles.container}>
            <Text>Contact</Text>
            <Link to={{screen:'Notification'}}>Go to Notification Page</Link>
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
export default Contact;