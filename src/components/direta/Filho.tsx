import { Text } from 'react-native'
import React from 'react'
import Style from "../../styles/style";

export default function (props: any) {
    let x = 13;
    let y = 100;
    return (
       <>
       <Text style={Style.TextBig}>{props.a}</Text>
       <Text style={Style.TextBig}>{props.b}</Text>
       </> 
    )
}