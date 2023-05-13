import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <p className="error-message">
        <p className="error-principal-title">
          Error 404 - Página no encontrada
        </p>
        <p>Lo sentimos, la página que estás buscando no se ha encontrado.</p>
        <p>
          Por favor, verifica la URL e intenta nuevamente. Si crees que esto es
          un error, por favor contáctanos.
        </p>
        <Link className="home-link" to="/">
          Volver al inicio
        </Link>
      </p>
    </>
  );
};

export default ErrorPage;
