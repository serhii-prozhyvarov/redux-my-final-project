import React from 'react';
import { carData } from '../../data/Cars';

import { CarsWrapper } from './Cars.styled';
import Car from './Car';

const Cars = () => {
  return (
    <CarsWrapper>
      {carData.map(car => {
        return (
          <div key={car.id}>
            <Car car={car} />
          </div>
        );
      })}
    </CarsWrapper>
  );
};

export default Cars;
