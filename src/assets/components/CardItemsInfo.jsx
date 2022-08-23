import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CardDetailsProduct } from "./CardDetailsProduct";
import { CardDetailsDescription } from "./CardDetaislDescription";
import { IconBack } from "./IconBack";

export function CardItemsInfo() {
  return (
    <>
      <div className="w-11/12 lg:h-[38rem] h-[42rem] bg-white py-5 px-10 rounded-lg shadow-xl text-center ">
        <Link to="/">
          <IconBack />
        </Link>
        <div className="h-5/6 p-x-10 grid grid-rows-2 gap-16 justify-items-center content-center lg:grid-cols-2">
          <CardDetailsProduct />

          <CardDetailsDescription />
        </div>
      </div>
    </>
  );
}
