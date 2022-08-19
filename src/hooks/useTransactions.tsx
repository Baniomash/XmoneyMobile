import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

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
  createTrasaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("Cards")
      .then((response: { data: SetStateAction<Transaction[]>; }) => setTransactions(response.data));
  }, []);

  async function createTrasaction(transactionInput: TransactionInput) {
    const response = await api.post("/Cards", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const transaction  = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTrasaction,
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
