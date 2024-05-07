"use client"
import { MdOutlineEdit } from "react-icons/md";
import React, { useState } from "react";
import Modal from "@/src/components/modules/modal/Modal";

const Box = () => {
  const [editModal, setEditModal] = useState(false);
  const hideEditModal = () => setEditModal(false);
  return (
    <>
      <section>
        <div className="flex justify-between items-center mt-4">
          <p>نام و نام خانوادگی</p>
          <MdOutlineEdit onClick={()=>setEditModal(true)} className="cursor-pointer" />
        </div>
        <p className="text-gray-500 text-sm mt-4">کسرا مشکل گشا</p>
      </section>
      <Modal
        title="تماس با پشتیبانی"
        hideHandler={hideEditModal}
        show={editModal}
      >
        <>
          <p className="text-sm text-center leading-7 text-[#404040] font-vazir font-light ">
            ساعات کار پشتیبانی تلفنی از<strong> 8 صبح</strong> الی{" "}
            <strong>12 شب</strong> می‌باشد. شماره تماس:{" "}
          </p>
          <section className="flex justify-center gap-3 text-yellow-300 pt-4">
            <p>09046417084</p>
            <p>09374816998</p>
          </section>
        </>
      </Modal>
    </>
  );
};

export default Box;
