import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import moment from "moment";

const { api } = require("../services/api");

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: boolean;
  category: string;
  bank: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (id: number) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function getCards() {
    await api
      .get("Cards")
      .then((response: { data: SetStateAction<Transaction[]>; }) => setTransactions(response.data));
  }

  useEffect(() => {
    getCards();
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/Cards", {
      ...transactionInput,
      createdAt: moment(new Date).format("DD/MM/YYYY hh:mm a"),
    });
    const transaction = response.data;
    setTransactions([...transactions, transaction]);
  }

  async function deleteTransaction(id: number) {
    await api
      .delete(`/Cards/${id}`)
      .then(getCards())
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        deleteTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
