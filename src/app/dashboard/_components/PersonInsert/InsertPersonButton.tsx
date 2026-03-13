'use client';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';

import { useInsertPersonModal } from '../DashboardTabs/hooks/useInsetPeronModal';

import PersonInsert from './PersonInsert';

const InsertPersonButton = () => {
  const { isOpen, setIsOpen, openModal } = useInsertPersonModal();
  return (
    <>
      <Button onClick={openModal}>Добавить</Button>
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <PersonInsert />
      </Modal>
    </>
  );
};
export default InsertPersonButton;
