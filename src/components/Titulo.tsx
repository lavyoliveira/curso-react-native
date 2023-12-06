import React from "react";
import { View, Text } from "react-native";
import Estilo from "../styles/style";

export default function Titulo(props: any) {
    return (
<>
            <Text style={Estilo.TextBig}>{props.principal}</Text>
            <Text style={Estilo.TextMedium}>{props.secundario}</Text>
       </> 
    )
}
