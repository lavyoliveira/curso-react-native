import React from "react";
import { Button } from "react-native";

export default function Botao(props: any){
    function executar(){
        console.warn('Exec #01!!!')
    }
    return (
        <>
        <Button title='Iniciar 1' onPress={executar}></Button>
        <Button title='Iniciar 2' onPress={function(){
            console.warn('Exec #02!!!')
        }}></Button>
        </>
    )
}