import React from "react";
import { Text } from "react-native";
import Style from "../styles/style";

export default function Aleatorio({ min, max }: any) {
    return (
        <Text style={Style.TextBig}> O valor aleatório é {Math.floor(Math.random() * (max - min) + min)}</Text>
    )
}
