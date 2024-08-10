import { useDispatch } from 'react-redux';
import { carData } from '../../data/Cars';
import { removeItemFromCart } from 'components/redux/cartSlice';
import { CartItemInfo, CartItemWrapper, DeleteIcon} from './Cart.styled';

const CartItem = ({ cartItem }) => {
  const car = carData.find(item => item.id === cartItem.carId);
  console.log(car);
  const dispatch = useDispatch();
  return (
    <CartItemWrapper>
      <CartItemInfo>
        {car.make} {car.model}
      </CartItemInfo>
      <CartItemInfo>{cartItem.quantity} cars</CartItemInfo>
      <CartItemInfo>Price: ${car.price * cartItem.quantity}</CartItemInfo>
      <span
        onClick={() =>
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
        }
      >
        <DeleteIcon
          className="icon"
          src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"
        />
      </span>
    </CartItemWrapper>
  );
};

export default CartItem;
