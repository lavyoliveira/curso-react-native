import React from 'react';
import { Button, View } from 'react-native';
import Style from '../../styles/style';

export default function(props: any){
  return (
    <>
    <View style={Style.Botoes}>
    <Button title="+" onPress={props.inc}/>
    <Button title="-" onPress={props.dec}/>
    </View>
    </>
  );
}