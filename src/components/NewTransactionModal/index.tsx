import React, { useEffect, useState } from "react";
import { Alert, Modal, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useTransactions } from "../../hooks/useTransactions";

import {
  BtnClose,
  BtnModal,
  BtnTitulo,
  CenteredView,
  Header,
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
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState(true);
  const [bank, setBank] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setAmount(parseFloat(text))
  }, [text])


  async function handleCreateNewTransaction() {
    if (title == "" || text == "" || category == "" || bank == "") {
      Alert.alert("Preencha todos os campos!!!")
    } else {
      await createTrasaction({
        title,
        amount,
        category,
        type,
        bank,
      });

      setTitle("");
      setAmount(0);
      setCategory("");
      setType(true);
      setBank("");
      setText("");
      onRequestClose();
    }
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
            <Header>
              <ModalTitle>Cadastrar transação</ModalTitle>
              <BtnClose onPress={onRequestClose}><Text style={{ fontSize: 30 }}>x</Text></BtnClose>
            </Header>
            <Input onChangeText={setTitle} value={title} placeholder="Nome" />
            <Input
              onChangeText={setText}
              value={text}
              placeholder="Preço"
              keyboardType="numeric"
            />
            <TransactioTypeContainer>
              <RadioBox
                style={{ backgroundColor: type ? "#bcffb5" : "#FFFFFF" }}
                onPress={() => {
                  setType(true);
                }}
              >
                <Icon source={require("./../../../assets/Entradas.png")} />
                <Text>Entrada</Text>
              </RadioBox>
              <RadioBox
                style={{ backgroundColor: type ? "#FFFFFF" : "#fb9595" }}
                onPress={() => {
                  setType(false);
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
            <BtnModal onPress={handleCreateNewTransaction}>
              <BtnTitulo>Cadastrar</BtnTitulo>
            </BtnModal>
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
}
