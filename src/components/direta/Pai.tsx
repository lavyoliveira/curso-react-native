import { Text } from 'react-native'
import React from 'react'
import Style from "../../styles/style";
import Filho from './Filho';

export default function (props: any) {
    let x = 13;
    let y = 100;
    return (
        <>
        <Filho a={x} b={y} />
        <Filho a={x + 4} b={y + 100} />
        </>
    )
}