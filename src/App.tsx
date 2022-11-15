import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";

import { createServer } from "miragejs";
import { NewTransactionsModal } from "./components/NewTransactionsModal";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transactions 1",
          value: 400,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
      ];
    });
  },
});

export function App() {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] =
    useState(false);

  function handleOpenNewTranslationModal() {
    setIsNewTranslationModalOpen(true);
  }
  function handleCloseNewTranslationModal() {
    setIsNewTranslationModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTranslationModal} />

      <Dashboard />
      <NewTransactionsModal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}
      />

      <GlobalStyle />
    </>
  );
}
