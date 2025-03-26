import React from "react";
import axios from "axios";

import Routers from "./utils/routes";

axios.defaults.baseURL = "http://localhost:8000/api/v1";

function App() {
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
