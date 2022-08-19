import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const { api } = require("../services/api");

export interface Usuarios {
  id: number;
  login: string;
  password: string;

}

type LoginInput = Omit<Usuarios, "id">;

interface UsuariosProviderProps {
  children: ReactNode;
}

interface UsuariosContextData {
  usuario: Usuarios[];
  createUser: (usuario: LoginInput) => Promise<void>;
}

const UsuariosContext = createContext<UsuariosContextData>(
  {} as UsuariosContextData
);

export function UsuariosProvider({ children }: UsuariosProviderProps) {
  const [usuario, setUsuario] = useState<Usuarios[]>([]);

  async function getUsers() {
    await api
      .get("Users")
      .then((response: { data: SetStateAction<Usuarios[]>; }) => setUsuario(response.data));
  }

  useEffect(() => {
    getUsers()
  }, []);

  async function createUser(usuarioInput: LoginInput) {
    await api.post("/Users",
      usuarioInput
    );
    getUsers()
  }

  return (
    <UsuariosContext.Provider
      value={{
        usuario,
        createUser,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
}

export function useUsuarios() {
  const context = useContext(UsuariosContext);
  return context;
}
