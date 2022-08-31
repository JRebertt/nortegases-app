import React, { useState } from "react";

import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../services/firebase/firebaseConfig";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

export function ItemListLogged({ name, imgUrl, id }) {
  async function handleDeleteItem() {
    await deleteDoc(doc(firestore, `produtos/${id}`));
  }

  return (
    <>
      <div className="grid grid-row-2 sm:grid-cols-2 ">
        <div className="w-40 h-28 border-r-2 md:border-r-2 flex justify-center items-center">
          {/* Container Img */}

          <img
            src={imgUrl}
            alt={name}
            className="object-cover object-center w-32 h-24"
          />
        </div>
        <div className="flex flex-col pt-2 px-4 text-center space-y-2">
          <div className="font-Sora font-bold font-lg tex-sm">{name}</div>
          <p>Amount</p>
          <span className="bg-gray-300 rounded-lg font-Syne font-medium">
            category
          </span>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-2">
        <button
          className="bg-red-600 p-2 rounded-md"
          onClick={handleDeleteItem}
        >
          <TrashIcon className="w-6 text-center text-white" />
        </button>
        <Link to={`/updateProducts/${id}`}>
          <button className="bg-indigo-600 p-2 rounded-md">
            <PencilSquareIcon className="w-6 text-center text-white" />
          </button>
        </Link>
      </div>
    </>
  );
}
