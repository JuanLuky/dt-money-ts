import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { useState } from "react";


import { createServer } from "miragejs";

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

Modal.setAppElement(':root');

export function App() {

  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false)

    function handleOpenNewTranslationModal() {
        setIsNewTranslationModalOpen(true)
    }
    function handleCloseNewTranslationModal() {
        setIsNewTranslationModalOpen(false)
    }
    
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTranslationModal}/>

      <Dashboard />

      <Modal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
