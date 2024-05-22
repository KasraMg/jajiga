"use client"
import { MdOutlineEdit } from "react-icons/md";
import React, { useState } from "react";
import EditModal from "./components/EditModal";

const Box = () => {
  const [editModal, setEditModal] = useState(false);
  const hideEditModal = () => setEditModal(false);
  return (
    <>
      <section>
        <div className="flex justify-between items-center mt-4">
          <p>نام و نام خانوادگی</p> 
          <EditModal/>
        </div>

        <p className="text-gray-500 text-sm mt-4">کسرا مشکل گشا</p>
      </section> 
    </>
  );
};

export default Box;
