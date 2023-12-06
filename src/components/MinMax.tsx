import React from "react";
import { Text } from "react-native";
import Style from "../styles/style";

export default function MinMax(props: any) {
    console.warn(props);
    return (
        <Text style={Style.TextBig}> O valor de {props.min} é maior que o valor de {props.max}</Text>
    )
}