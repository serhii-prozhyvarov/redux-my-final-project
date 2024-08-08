import carImages from 'data/CarImages';
import { CarFoto } from './Cars.styled';
import { useState } from 'react';
import ChangeQuantity from 'components/ChangeQuantity/ChangeQuantity';

const Car = ({ car }) => {
  const [quantity, setQuantity] = useState(1);
  const { make, model, price, engine, image } = car;
  return (
    <div>
      <CarFoto src={carImages[image]} alt={`${make} ${model}`} />
      <p>
        {make} {model}
      </p>
      <p>Price: ${price}</p>
      <p>Engine: {engine}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
};

export default Car;
