import React, { useState } from 'react';
import { Text, Button} from 'react-native';
import Style from "../styles/style";

export default function ({inicial = 0, passo = 1}){
    const [numero, setNumero] = useState(inicial)

    let inc = () => {
        setNumero(numero + passo);
    }
    let dec = () => {
        setNumero(numero - passo);
    }

    return (
        <>
        <Text style={Style.TextBig}>{numero}</Text>
        <Button title="+" onPress={inc}/> 
        <Button title="-" onPress={dec}/> 
        </>
    )
}