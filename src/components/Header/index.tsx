import React from "react";
import NCCIcon from "../../assets/ncc-icons/NCCIcon";
import "./style.css";

function Header() {
  return (
    <div className="FullWidth">
      <div className="AppIcon FullWidth FullHeight FlexCenter">
        <NCCIcon />
      </div>
    </div>
  );
}

export default Header;
