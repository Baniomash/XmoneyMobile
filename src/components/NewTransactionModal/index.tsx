import React, { useState } from "react";
import { Modal } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import {
  BtnModal,
  BtnTitulo,
  CenteredView,
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
  const [category, setCategory] = useState("");
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
                title="Entrada"
                onPress={() => {
                  setType("deposit");
                }}
              />
              <RadioBox
                title="Saída"
                onPress={() => {
                  setType("withdraw");
                }}
              />
            </TransactioTypeContainer>
            <RNPickerSelect
              placeholder={{}}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Gasto Padrão", value: "Gasto Padrão" },
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
