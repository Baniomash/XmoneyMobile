import React, { useState } from "react";
import { View } from "react-native";
import { Cards } from "./src/components/Cards";
import { Header } from "./src/components/Header";
import { NewTransactionModal } from "./src/components/NewTransactionModal";

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
    <View style={{ backgroundColor: "#f0f2f5" }}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Cards />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </View>
  );
}
