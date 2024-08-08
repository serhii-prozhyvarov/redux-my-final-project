import Cars from "components/CarsComponent/Cars";
import Cart from "components/CartComponent/Cart";
import Filter from "components/Filter/Filter";
import { AppCartWrapper, AppWrapper, ContentWrapper } from "./App.styled";

export const App = () => {
  return (
    <AppWrapper>
      <ContentWrapper>
        <Filter />
        <Cars />
      </ContentWrapper>
      <AppCartWrapper>
        <Cart />
      </AppCartWrapper>
    </AppWrapper>
  );
};
