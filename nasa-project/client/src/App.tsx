import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Docs from "./pages/Docs";
import Home from "./pages/Home";
//import Data from "./pages/Data";
//import InputForm from "./pages/InputForm";
import DataForm from "./pages/DataForm";
import Footer from "./components/Footer";
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/Data" element={<DataForm />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}
