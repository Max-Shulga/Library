'use client';
import { useState } from 'react';

const useInsertPersonModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    setIsOpen,
    closeModal,
  };
};

export { useInsertPersonModal };
