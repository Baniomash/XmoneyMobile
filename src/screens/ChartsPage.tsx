import React from 'react'
import { ScrollView, View } from 'react-native';
import { ChartUnit } from '../components/Charts/Unitario';
import { ChartBank } from '../components/Charts/Banco';
import { ChartCategory } from '../components/Charts/Categoria';
import { ChartType } from '../components/Charts/Tipo';

export function ChartsPage() {
  return (
    <View>
      <ScrollView>
        <ChartType />
        <ChartUnit />
        <ChartBank />
        <ChartCategory />
      </ScrollView>
    </ View>
  );
}