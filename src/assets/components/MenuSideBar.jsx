import { MenuOptions } from "./MenuOptions";

import Logo from "../images/logoNorteGases.png";
import { Link } from "react-router-dom";

export function MenuSideBar() {
  return (
    <>
      <div className="grid grid-row-2 gap-16">
        <img src={Logo} className="w-40" />
        <div>
          <Link to="/myProducts">
            <MenuOptions name="My products" />
          </Link>
          <MenuOptions name="User's" />
        </div>
      </div>
    </>
  );
}
