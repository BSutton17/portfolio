import React, { createContext, useContext, useState, useRef } from 'react';
import Old from '../Filter/Old'
import New from '../Filter/New';
const AppContext = createContext();

export const Provider = ({ children }) => {
    const [tiles, setTiles] = useState(<Old />)
    const [selectedValue, setSelectedValue] = useState("");
    const [modal, setModal] = useState(false);
    
  return (
    <AppContext.Provider value={{ modal, setModal, selectedValue, setSelectedValue, tiles, setTiles}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);