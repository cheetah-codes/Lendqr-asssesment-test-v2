import { useMemo, useState } from "react";
import { ToastContext } from "../contexts/toast-context";
import "./toast.scss";

export type ToastProps = {
  message: string;
  close: () => void;
};

type ToastProviderProps = {
  children: React.ReactNode;
};

type ToastType = {
  message: string;
  id: number;
};

const Toast = ({ message, close }: ToastProps) => {
  setTimeout(() => {
    close();
  }, 3000);
  return (
    <>
      <div className="toast">
        <p>{message}</p>
        <button className={`close-btn `} onClick={close}>
          {"\u274C"}
        </button>
        <span className="timeout"></span>
      </div>
    </>
  );
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[] | null>([]);

  const open = (message: string, type: string) => {
    const newToast = {
      id: new Date(),
      message: message,
      type: type,
    };
    setToasts((prev: any) => [...prev, newToast]);
  };

  const closeToast = (id: number) => {
    setToasts((prev: any) =>
      prev.filter((toast: ToastType) => toast.id !== id)
    );
  };

  const contextValue = useMemo(() => {
    return { open: open, close: closeToast };
  }, []);

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
        <div className="toasts">
          {toasts &&
            toasts.map((toast) => {
              return (
                <Toast
                  key={toast?.id}
                  message={toast.message}
                  // className={toast.type == "error" ? "error" : "" }
                  close={() => closeToast(toast.id)}
                />
              );
            })}
        </div>
      </ToastContext.Provider>
    </>
  );
};

export default Toast;
