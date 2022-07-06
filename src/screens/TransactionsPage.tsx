import { useState } from "react";
import { View } from "react-native";
import { Cards } from "../components/Cards";
import { Header } from "../components/Header";
import { NewTransactionModal } from "../components/NewTransactionModal";
import { TransactionsTable } from "../components/TransactionsTable";

export function TransactionsPage() {
    
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
      <TransactionsTable />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </View>
  );
}
