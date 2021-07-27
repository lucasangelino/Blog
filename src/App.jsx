import React from "react";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

// UI Components
import Navbar from "./components/ui/navbar/Navbar";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
      </div>
    </ChakraProvider>
  );
}

export default App;
