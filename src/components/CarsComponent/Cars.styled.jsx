import styled from '@emotion/styled';

export const CarsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
`;

export const CarFoto = styled.img`
  width: 300px;
  height: 200px;
`;

export const AddToCartButton = styled.button`
  margin-top: 10px;
  min-width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #494949;
  color: #ffffff;
  font-size: 20px;
  &:hover {
    background-color: #fdeb6b;
    color: #000000;
  }
`;

export const AddButtonWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
`