import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./helpers/FirebaseConfig.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </>
);
