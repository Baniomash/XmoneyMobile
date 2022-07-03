import React, { useState } from "react";
import { Modal, TextInput } from "react-native";
import {
  BtnModal,
  BtnTitulo,
  CenteredView,
  MainModal,
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
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  return (
    <CenteredView>
      <MainModal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={onRequestClose}
      >
        <CenteredView>
          <ModalView>
            <ModalTitle>Cadastrar transação</ModalTitle>
            <TextInput
              onChangeText={setTitle}
              value={title}
              placeholder="Nome"
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
            <BtnModal onPress={onRequestClose}>
              <BtnTitulo>Cadastrar</BtnTitulo>
            </BtnModal>
          </ModalView>
        </CenteredView>
      </MainModal>
    </CenteredView>
  );
}
