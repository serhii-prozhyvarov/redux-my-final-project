import { useDispatch, useSelector } from 'react-redux';
import {
  FilterHeader,
  FilterWrapper,
  SelectedFilterHeader,
} from './Filter.styled';
import {
  filterCategory,
  getSelectedCategory,
} from 'components/redux/carsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <FilterWrapper>
      {['ALL', 'AUDI', 'MERCEDES', 'BMW', 'HONDA', 'HYUNDAI', 'TOYOTA'].map(
        (item, index) => {
          return (
            <div key={index}>
              {selectedCategory === item ? (
                <SelectedFilterHeader
                  onClick={() => dispatch(filterCategory(item))}
                >
                  {item}
                </SelectedFilterHeader>
              ) : (
                <FilterHeader onClick={() => dispatch(filterCategory(item))}>
                  {item}
                </FilterHeader>
              )}
            </div>
          );
        }
      )}
    </FilterWrapper>
  );
};

export default Filter;
