import React, {useState} from 'react';
import { Text, View } from 'react-native';
import Style from '../../styles/style';

export default function(props: any){
    const [num, setNum] = useState(0)

  return (
    <>
    <View style={Style.Display}>
    <Text style={[Style.TextBig, Style.DisplayText]}>{props.num}</Text>
    </View>
    </>
  );
}