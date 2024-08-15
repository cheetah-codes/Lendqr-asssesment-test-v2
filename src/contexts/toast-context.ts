import { createContext, useContext } from "react";

type ToastContextValues = {
  open: (message: string) => void;
  close: (id: number) => void;
  //   color: string;
};

export const ToastContext = createContext<ToastContextValues | null>(null);

export const useToast = () => useContext(ToastContext);
