import React from 'react'
import { ScrollView, View } from 'react-native';
import { ChartUnit } from '../components/Charts/Unitario';
import { ChartBank } from '../components/Charts/Banco';
import { ChartCategory } from '../components/Charts/Categoria';
import { ChartType } from '../components/Charts/Tipo';
import { Header } from '../components/Header';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParams } from '../../App';


type Props = NativeStackScreenProps<AppStackParams>;

export function ChartsPage(navigation: Props) {
  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView style={{marginTop: -120}}>
        <View>
          <ChartType />
        </View>
        <View>
          <ChartUnit />
        </View>
        <View>
          <ChartBank />
        </View>
        <View>
          <ChartCategory />
        </View>
      </ScrollView>
    </ View>
  );
}