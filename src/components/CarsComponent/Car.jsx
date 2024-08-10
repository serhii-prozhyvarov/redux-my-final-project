import carImages from 'data/CarImages';
import { AddButtonWrapper, AddToCartButton, CarFoto } from './Cars.styled';
import { useState } from 'react';
import ChangeQuantity from 'components/ChangeQuantity/ChangeQuantity';
import { useDispatch } from 'react-redux';
import { addItemToCart } from 'components/redux/cartSlice';

const Car = ({ car }) => {
  const dispatch = useDispatch()
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
      <AddButtonWrapper>
        <AddToCartButton
          onClick={() => {
            dispatch(addItemToCart({ car, quantity }));
          }}
        >
          ADD TO CART
        </AddToCartButton>
      </AddButtonWrapper>
    </div>
  );
};

export default Car;
