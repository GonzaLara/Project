import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[])

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export {MyContext}