import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, } from 'react-native';
import { Header } from './src/components/Header';

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
  return (
    <View>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <StatusBar style="auto" />
    </View>
  );
}

