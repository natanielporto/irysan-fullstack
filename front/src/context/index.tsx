import { ReactNode } from "react";
import { SyncProvider } from "./sync";

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  return <SyncProvider>{children}</SyncProvider>;
}
