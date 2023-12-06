import React from 'react';
import { View, Text } from 'react-native';
import Style from '../../styles/style';
import Filho from './Filho';

export default function(props: any){
    const [numero, setNum ] = React.useState(0);
    const [texto, setTexto] = React.useState('');
    function exibirValor(numero : number, texto: string){
        setNum(numero);
        setTexto(texto);
    }

  return (
    <>
    <Text style={Style.TextBig}>{texto}{numero}</Text>
        <Filho 
        min={1} 
        max={10} 
        funcao={exibirValor} 
    />
    </>

  );
}