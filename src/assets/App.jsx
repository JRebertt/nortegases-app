import React, { useEffect, useState } from "react";
import { firestore } from "./services/firebase/firebaseConfig";
import { collection, onSnapshot, query } from "firebase/firestore";

import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Link } from "react-router-dom";

export function App() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsCollectionRef = collection(firestore, "produtos");
  const q = query(productsCollectionRef);

  useEffect(() => {
    onSnapshot(q, (snapshot) =>
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, [isModalOpen]);
  return (
    <>
      <Header />
      <div className="p-10 justify-items-center grid grid-cols-1 gap-y-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {products.map((product) => {
          return (
            <span key={product.id}>
              <Link to="/cardDetail">
                <Card
                  name={product.name}
                  imgUrl={product.imageUrl}
                  userId={product.id}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </Link>
            </span>
          );
        })}
      </div>
    </>
  );
}
