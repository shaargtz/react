import React from "react";

function Layout(props) {
  return (
    <div className="contenedor">
      {props.children}
    </div>

  );
}

export default Layout;
