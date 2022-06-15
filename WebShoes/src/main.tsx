import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Firebase from "./Utils/Firebase.js";
import firebaseContext from "./Utils/FirebaseContext.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <firebaseContext.Provider value={new Firebase()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </firebaseContext.Provider>
);
