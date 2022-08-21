import React from 'react'
import { ScrollView, View } from 'react-native';
import { Header } from '../components/Header';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParams } from '../../App';
import { ChartType } from '../components/Charts/Tipo';
import { ChartUnit } from '../components/Charts/Unitario';
import { ChartCategory } from '../components/Charts/Categoria';
import { ChartBank } from '../components/Charts/Banco';


type Props = NativeStackScreenProps<AppStackParams>;

export function ChartsPage(navigation: Props) {
  return (
    <View style={{}}>
      <Header navigation={navigation} />
      <ScrollView style={{ marginTop: -120 }}>
        <ChartType />
        <ChartUnit />
        <ChartBank />
        <ChartCategory />
      </ScrollView>
    </ View>
  );
}