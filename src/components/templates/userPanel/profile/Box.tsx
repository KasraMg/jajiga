"use client";
import { MdOutlineEdit } from "react-icons/md";
import React, { useState } from "react";
import EditModal from "./components/EditModal";

const Box = () => {
  const [editModal, setEditModal] = useState(false);
  const hideEditModal = () => setEditModal(false);
  return (
    <>
      <section>
        <div className="mt-4 flex items-center justify-between">
          <p>نام و نام خانوادگی</p>
          <EditModal />
        </div>

        <p className="mt-4 text-sm text-gray-500">کسرا مشکل گشا</p>
      </section>
    </>
  );
};

export default Box;
