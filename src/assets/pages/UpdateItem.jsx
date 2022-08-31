import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../services/firebase/firebaseConfig";
import { Link, useParams } from "react-router-dom";

import { SideBar } from "../components/SideBar";
import { useState } from "react";

export function UpdateItem() {
  const [isName, setIsName] = useState("");
  const [isDescription, setIsDescription] = useState("");

  const params = useParams();

  function handleUpdateItem() {
    updateDoc(doc(firestore, `produtos/${params.id}`), {
      name: isName,
      description: isDescription,
    });
  }

  // useEffect(() => {
  //   onSnapshot(doc(firestore, `produtos/${params.id}`), (doc) => {
  //     const { imageUrl, name } = doc.data();
  //     setIsImg(imageUrl);
  //     setIsName(name);
  //   });
  // }, []);

  return (
    <>
      <SideBar />
      <div className="w-full flex justify-center mt-20">
        <div className="mt-5 md:col-span-2 md:mt-0 w-4/5">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className=" space-y-6 bg-white px-4 py-5 sm:px-32 sm:py-10">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome do Produto
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-brand focus:ring-brand sm:text-sm"
                      placeholder="Kit de Solda"
                      onChange={(e) => setIsName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descrição
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-brand focus:ring-brand sm:text-sm"
                    placeholder="Ex: Kit de Solda para blá blá blá "
                    defaultValue={""}
                    onChange={(e) => setIsDescription(e.target.value)}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Breve descrição do produto
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Imagem do Produto
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-[#0eb845] focus-within:outline-none focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 hover:text-[#0e9e3b]"
                      >
                        <span>Enviar um arquivo</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">ou arraste e solte</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG até 5MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <Link to="/myProducts">
                <button
                  className="inline-flex justify-center rounded-md border border-transparent bg-brand py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#0e9e3b] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                  onClick={handleUpdateItem}
                >
                  Salvar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
