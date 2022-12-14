import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../services/firebase/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";

import { Header } from "../components/Header";

import { CardDetailsProduct } from "../components/CardDetailsProduct";
import { CardDetailsDescription } from "../components/CardDetaislDescription";
import { IconBack } from "../components/IconBack";

export function ItemInfo() {
  const [isImg, setIsImg] = useState("");
  const [isName, setIsName] = useState("");
  const [isDescription, setIsDescription] = useState("");
  const params = useParams();

  useEffect(() => {
    onSnapshot(doc(firestore, `produtos/${params.id}`), (doc) => {
      const { imageUrl, name, description } = doc.data();
      setIsImg(imageUrl);
      setIsName(name);
      setIsDescription(description);
      
    });
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="grid content-center justify-items-center h-[90vh]">
          <div className="w-11/12 lg:h-[38rem] h-[42rem] bg-white py-5 px-10 rounded-lg shadow-xl text-center ">
            <Link to="/">
              <IconBack />
            </Link>
            <div className="h-5/6 p-x-10 grid grid-rows-2 gap-16 justify-items-center content-center lg:grid-cols-2">
              <CardDetailsProduct imgUrl={isImg} name={isName} />

              <CardDetailsDescription description={isDescription} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
