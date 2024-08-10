import React from 'react';
import { carData } from '../../data/Cars';

import { CarsWrapper } from './Cars.styled';
import Car from './Car';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from 'components/redux/carsSlice';

const Cars = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <CarsWrapper>
      {carData
        .filter(car => {
          if (selectedCategory === 'ALL') return true;
          return selectedCategory === car.make.toUpperCase();
        })
        .map(car => {
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
