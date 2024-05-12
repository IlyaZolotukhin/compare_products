import React from 'react';
import {useDispatch} from "react-redux";
import {setProductsPerPageAC} from "../store/reducers";
import styled from "styled-components";

type ProductCardType = {
    handleClosePopup: () => void;
}

export const ProductCard = ({handleClosePopup}: ProductCardType) => { const dispatch = useDispatch();

    const handleProductsPerPageChange = (perPage: number) => {
        dispatch(setProductsPerPageAC(perPage));
    };

    return (
        <Container onClick={handleClosePopup}>
            <div><h1>Смартфоны</h1></div>
            <Filter>Отобразить товары: <SPAN onClick={() => handleProductsPerPageChange(2)}>2</SPAN>
                <SPAN onClick={() => handleProductsPerPageChange(3)}>3</SPAN>
                <SPAN onClick={() => handleProductsPerPageChange(4)}>4</SPAN>
                <SPAN onClick={() => handleProductsPerPageChange(5)}>5</SPAN>
                <SPAN onClick={() => handleProductsPerPageChange(6)}>6</SPAN>
            </Filter>
        </Container>
    );
}

const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center`
;
export const Filter = styled.p`
color: #0D5ADC;`
;
const SPAN = styled.span`
  margin: 5px;
    cursor: pointer;
    `
;

