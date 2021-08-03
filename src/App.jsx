import React from "react";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

// UI Components
import Navbar from "./components/ui/navbar/Navbar";

import Head from "next/head";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <a href="/home">Home</a>
      </div>
    </ChakraProvider>
  );
}

export default App;
