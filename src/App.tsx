import React from 'react';
import { View } from 'react-native';
import Primeiro from './components/Primeiro';
import Style from './styles/style';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
import Pai from './components/direta/Pai';
import PaiIndireta from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';

export default function App(){
    return (
        <View style={Style.App}>
        {/* <MinMax min='3' max='20'/> */}
        {/* <Primeiro /> */}
        {/* <Aleatorio min={1} max={60} /> */}
        {/* <Titulo principal='Cadastro Produto' secundario='Tela de Cadastro do Produto' /> */}
        {/* <Contador inicial={100} passo={13}/>
        <Contador /> */}
        {/* <Botao /> */}
        {/* <Pai /> */}
        {/* <PaiIndireta /> */}
        <ContadorV2 />
        </View>
    )
}