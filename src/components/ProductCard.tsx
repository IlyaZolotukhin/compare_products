import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {AppRootStateType} from "../store/store";
import {setProductsPerPageAC} from "../store/actionsCreator";

type ProductCardType = {
    handleClosePopup: () => void;
}

export const ProductCard = ({handleClosePopup}: ProductCardType) => {
    const dispatch = useDispatch();
    const products = useSelector((state: AppRootStateType) => state.pageReducer.productsPerPage);

    const handleProductsPerPageChange = (perPage: number) => {
        dispatch(setProductsPerPageAC(perPage));
    };

    return (
        <Container onClick={handleClosePopup}>
            <H1>Смартфоны</H1>
            <Filter>Отобразить товары:
                <SPAN el={2} products={products} onClick={() => handleProductsPerPageChange(2)}>2</SPAN>
                <SPAN el={3} products={products} onClick={() => handleProductsPerPageChange(3)}>3</SPAN>
                <SPAN el={4} products={products} onClick={() => handleProductsPerPageChange(4)}>4</SPAN>
                <SPAN el={5} products={products} onClick={() => handleProductsPerPageChange(5)}>5</SPAN>
                <SPAN el={6} products={products} onClick={() => handleProductsPerPageChange(6)}>6</SPAN>
            </Filter>
        </Container>
    );
}

const Container = styled.div`
  width: 50%;
  margin: auto;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (width <= 1024px) {
    width: 100%;
    margin-left: 15px;  
    flex-direction: column;
    align-items: baseline;
  }`
;
export const Filter = styled.p`
color: #0D5ADC;`
;

const SPAN = styled.span<{products: number, el: number}>`
  margin: 5px;
  cursor: pointer;
  text-decoration: ${(props) =>props.products === props.el? 'underline': 'none'};
  `
;
export const H1 = styled.h1`
color: #828286;`
;
