import React from "react";
import "./App.css";
import { Layout } from "antd";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Header from "./components/Header";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Content>
        <BrowserRouter>
          <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<Pokedex/>} path='/pokedex/:id' />
          </Routes>
        </BrowserRouter>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
