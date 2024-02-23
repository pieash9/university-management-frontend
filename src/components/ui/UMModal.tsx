"use client";

import React, { ReactElement, ReactNode } from "react";
import { Modal } from "antd";

type ModalProps = {
  title?: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOk?: any;
  children?: ReactElement | ReactNode;
};

const UMModal = ({
  title,
  isModalOpen,
  setIsModalOpen,
  handleOk,
  children,
}: ModalProps) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};

export default UMModal;
