import { useState } from "react";
import { View, Image } from "react-native";
import { Cards } from "./src/components/Cards";
import { Header } from "./src/components/Header";

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <View>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Cards />
    </View>
  );
}
