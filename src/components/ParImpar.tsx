import React from 'react';
import { View, Text } from 'react-native';
import Style from '../styles/style';

export default function({num = 0}){
        return (
            <View>
                    <Text style={Style.TextBig}>O resultado é:</Text>
                    {num % 2 === 0 ? <Text style={Style.TextBig}>Par</Text> : <Text style={Style.TextBig}>Impar</Text>}
            </View>
          );
}