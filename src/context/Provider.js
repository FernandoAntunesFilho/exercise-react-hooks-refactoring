// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {

  const [redCar, setRedCar] = useState(false);
  const [blueCar, setBlueCar] = useState(false);
  const [yellowCar, setYellowCar] = useState(false);

  const moveCar = (car) => {
    if (car === 'redCar') {
      setRedCar((currentRedCar) => !currentRedCar)
    }
    if (car === 'blueCar') {
      setBlueCar((currentBlueCar) => !currentBlueCar)
    }
    if (car === 'yellowCar') {
      setYellowCar((currentYellowCar) => !currentYellowCar)
    }
  };

  const context = {
    redCar,
    blueCar,
    yellowCar,
    moveCar,
  }  
  
  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );  
};

export default Provider;
