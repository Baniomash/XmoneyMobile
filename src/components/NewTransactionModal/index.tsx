import React, { useState } from "react";
import { Modal, Text, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";

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
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Gasto Padrão");
  const [type, setType] = useState("deposit");

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
                  setType("deposit");
                }}
              >
                <Icon source={require("./../../../assets/Entradas.png")} />
                <Text>Entrada</Text>
              </RadioBox>
              <RadioBox
                onPress={() => {
                  setType("withdraw");
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
              items={[
                { label: "TypeStript", value: "TypeStript" },
                { label: "Python", value: "Python" },
                { label: "Java", value: "Java" },
                { label: "C++", value: "C++" },
                { label: "C", value: "C" },
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
              onValueChange={(value) => setCategory(value)}
              items={[
                { label: "TypeStript", value: "TypeStript" },
                { label: "Python", value: "Python" },
                { label: "Java", value: "Java" },
                { label: "C++", value: "C++" },
                { label: "C", value: "C" },
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
