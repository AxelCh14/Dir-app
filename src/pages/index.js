import * as React from "react"
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <Link to="/productos">Productos</Link>
    </div>
  );
};

export default IndexPage;