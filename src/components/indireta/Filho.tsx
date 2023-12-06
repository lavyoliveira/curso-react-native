import React from 'react';
import { Button, View } from 'react-native';
import Style from '../../styles/style';

export default function(props: any){
    function gerarNumero(min: number, max: number){
        const fator = max - min + 1;
        return Math.floor(Math.random() * fator) + min;
    }

  return (
    <Button title="Executar" onPress={function(){
        const numero = gerarNumero(props.min, props.max);
        props.funcao(numero, 'O valor é: ');
    }}/>
  );
}