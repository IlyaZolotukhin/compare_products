import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setProductsPerPageAC} from "../store/reducers";
import styled from "styled-components";
import {AppRootStateType} from "../store/store";

type ProductCardType = {
    handleClosePopup: () => void;
}

export const ProductCard = ({handleClosePopup}: ProductCardType) => {
    const dispatch = useDispatch();
    const productsPerPage = useSelector((state: AppRootStateType) => state.pageReducer.productsPerPage);

    const handleProductsPerPageChange = (perPage: number) => {
        dispatch(setProductsPerPageAC(perPage));
    };

    return (
        <Container onClick={handleClosePopup}>
            <H1>Смартфоны</H1>
            <Filter>Отобразить товары:
                <SPAN perPage={2} productsPerPage={productsPerPage} onClick={() => handleProductsPerPageChange(2)}>2</SPAN>
                <SPAN perPage={3} productsPerPage={productsPerPage} onClick={() => handleProductsPerPageChange(3)}>3</SPAN>
                <SPAN perPage={4} productsPerPage={productsPerPage} onClick={() => handleProductsPerPageChange(4)}>4</SPAN>
                <SPAN perPage={5} productsPerPage={productsPerPage} onClick={() => handleProductsPerPageChange(5)}>5</SPAN>
                <SPAN perPage={6} productsPerPage={productsPerPage} onClick={() => handleProductsPerPageChange(6)}>6</SPAN>
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
  align-items: center`
;
export const Filter = styled.p`
color: #0D5ADC;`
;
const SPAN = styled.span<{ productsPerPage: number, perPage: number }>`
  margin: 5px;
    cursor: pointer;
  text-decoration: ${(props) =>props.productsPerPage === props.perPage? 'underline': 'none'};
  `
;
export const H1 = styled.h1`
color: #828286;`
;
