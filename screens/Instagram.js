import React from 'react';
import {Text,View} from 'react-native'
import { Component } from 'react';

export default class Instagram extends React.Component{
    render(){
        return(
            <View style = {{
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'pink'
            }}>
            <Text style={{
                color:'black',
                fontSize:30
            }}>Instagram!!</Text>
            </View>
        )
    }
}