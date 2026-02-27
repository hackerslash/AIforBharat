import { createContext, useContext, useMemo, useState } from "react";
import { MOCK_CLUSTER, MOCK_ORDER, MOCK_USER, MOCK_VENDORS } from "../data/mock";

type Language = "hi" | "kn" | "ta" | "bn" | "te" | "en";

type AppState = {
  language: Language;
  setLanguage: (language: Language) => void;
  user: typeof MOCK_USER;
  cluster: typeof MOCK_CLUSTER;
  vendors: typeof MOCK_VENDORS;
  order: typeof MOCK_ORDER;
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(MOCK_USER.language);

  const value = useMemo(
    () => ({ language, setLanguage, user: MOCK_USER, cluster: MOCK_CLUSTER, vendors: MOCK_VENDORS, order: MOCK_ORDER }),
    [language],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside AppProvider");
  return ctx;
}
