import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const { api } = require("../services/api");

interface Transaction {
  id: number;
  title: string;
  amount: string;
  type: string;
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
  deleteTrasaction: (id: number) => Promise<void>;
  updateTrasaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/Cards")
      .then((response: { data: SetStateAction<Transaction[]> }) =>
        setTransactions(response.data)
      );
  }, []);

  async function createTrasaction(transactionInput: TransactionInput) {
    const response = await api.post("/Cards", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  async function deleteTrasaction() {
    const response = await api.delete("/Cards:id");

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
    //talvez o delete dê erro por causa desse ...transactions
  }

  async function updateTrasaction(transactionInput: TransactionInput) {
    const response = await api.post("/Cards:id", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTrasaction,
        deleteTrasaction,
        updateTrasaction,
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
