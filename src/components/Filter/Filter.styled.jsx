import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content:center;
`;

export const FilterHeader = styled.h3`
  cursor: pointer;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #fdeb6b;
    color: #000000;
  }
`;
export const SelectedFilterHeader = styled.h3`
  background-color: green;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  margin: 5px;
  padding: 10px;
  &:hover {
    background-color: #fdeb6b;
    color: #000000;
  }
`;
