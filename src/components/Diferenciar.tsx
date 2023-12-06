import React from 'react';
import { Text, Platform } from 'react-native';
import Style from '../styles/style';

export default function(){
    if(Platform.OS === 'android'){
        return <Text style={Style.TextBig}> Android </Text> 
    }else if(Platform.OS === 'ios'){ 
        return <Text style={Style.TextBig}> Ios </Text> 
    } else { return <Text style={Style.TextBig}> Eita </Text> 
    }
}