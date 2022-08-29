import { useEffect, useState } from "react";

import { firestore } from "../services/firebase/firebaseConfig";
import { collection, onSnapshot, query } from "firebase/firestore";

import { ItemListLogged } from "../components/ItemListLogged";
import { SideBar } from "../components/SideBar";
import { Modal } from "../components/Modal";

export function LoggedListProducts() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(firestore, "produtos");
  const q = query(productsCollectionRef);

  useEffect(() => {
    onSnapshot(q, (snapshot) =>
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen my-20">
        <SideBar />

        <div className="w-11/12  flex flex-col space-y-4 justify-around items-center">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="w-4/6 sm:w-1/2 h-96 sm:h-80 md:h-32 bg-white rounded-xl flex flex-col md:flex-row justify-between items-center py-5 md:px-5 shadow-xl"
              >
                <ItemListLogged
                  name={product.name}
                  imgUrl={product.imageUrl}
                  id={product.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
