import React from 'react'
import { ScrollView, View } from 'react-native';
import { ChartUnit } from '../components/Charts/Unitario';
import { Chartbank } from '../components/Charts/Banco';

export function ChartsPage() {
  return (
    <View>
      <ScrollView>
        <ChartUnit />
        <Chartbank />
      </ScrollView>
    </ View>
  );
}