import React, { FormEvent, useState } from "react";
import { Modal, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useTransactions } from "../../hooks/useTransactions";

import {
  BtnModal,
  BtnTitulo,
  CenteredView,
  Icon,
  Input,
  ModalTitle,
  ModalView,
  RadioBox,
  TransactioTypeContainer,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTrasaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Gasto Padrão");
  const [type, setType] = useState("Depósito");
  const [bank, setBank] = useState("Padrão");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTrasaction({
      title,
      amount,
      category,
      type,
      bank,
    });

    setTitle("");
    setAmount("0");
    setCategory("");
    setType("Depósito");
    setBank("");
    onRequestClose();
  }

  return (
    <CenteredView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={onRequestClose}
      >
        <CenteredView>
          <ModalView>
            <ModalTitle>Cadastrar transação</ModalTitle>
            <Input onChangeText={setTitle} value={title} placeholder="Nome" />
            <Input
              onChangeText={setAmount}
              value={amount}
              placeholder="Preço"
              keyboardType="numeric"
            />
            <TransactioTypeContainer>
              <RadioBox
                onPress={() => {
                  setType("Depósito");
                }}
              >
                <Icon source={require("./../../../assets/Entradas.png")} />
                <Text>Entrada</Text>
              </RadioBox>
              <RadioBox
                onPress={() => {
                  setType("Retirada");
                }}
              >
                <Icon source={require("./../../../assets/Saidas.png")} />
                <Text>Saída</Text>
              </RadioBox>
            </TransactioTypeContainer>
            <RNPickerSelect
              placeholder={{ label: "Selecione a categoria" }}
              style={{ inputAndroid: { backgroundColor: "#e7e9ee" } }}
              onValueChange={(value) => setCategory(value)}
              value={category}
              items={[
                { label: "Moradia", value: "Moradia" },
                { label: "Trabalho", value: "Trabalho" },
                { label: "Diversão", value: "Diversão" },
                { label: "Supermecado", value: "Supermecado" },
                { label: "Saúde", value: "Saúde" },
              ]}
            />
            <RNPickerSelect
              placeholder={{ label: "Selecione banco utilizado" }}
              style={{
                inputAndroid: {
                  backgroundColor: "#e7e9ee",
                  marginTop: 8,
                  marginBottom: 8,
                },
              }}
              onValueChange={(value) => setBank(value)}
              value={bank}
              items={[
                { label: "À vista", value: "À vista" },
                { label: "Itaú", value: "Itaú" },
                { label: "NUBank", value: "NUBank" },
                { label: "Santander", value: "Santander" },
                { label: "Caixa", value: "Caixa" },
              ]}
            />
            <BtnModal onPress={onRequestClose}>
              <BtnTitulo>Cadastrar</BtnTitulo>
            </BtnModal>
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
}
