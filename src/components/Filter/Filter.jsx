import { FilterHeader, FilterWrapper } from "./Filter.styled";

const Filter = () => {
    return <FilterWrapper>
        {['AUDI', 'MERCEDES', 'BMW', 'HONDA', 'HUYNDAI', 'TOYOTA'].map(item => {
            return <FilterHeader>{item}</FilterHeader>;
      })}
  </FilterWrapper>;
};

export default Filter;
