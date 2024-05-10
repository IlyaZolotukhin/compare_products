import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {setProductsPerPageAC, setSelectedProductsAC} from "../store/reducers";
import styled from "styled-components";


export const ProductCard = () => {

    const products = useSelector((state: AppRootStateType) => state.pageReducer.products);
    const productsPerPage = useSelector((state: AppRootStateType) => state.pageReducer.productsPerPage);
    const dispatch = useDispatch();

    const handleProductsPerPageChange = (perPage: number) => {
        dispatch(setProductsPerPageAC(perPage));
    };

    // Фильтрация массива продуктов с учетом выбранного количества на странице
    const filteredProducts = products.slice(0, productsPerPage);
    dispatch(setSelectedProductsAC(filteredProducts))

    return (
        <Container>
            <div><h1>Смартфоны</h1></div>
            <Filter>Отобразить товары: <SPAN onClick={() => handleProductsPerPageChange(2)}>2</SPAN>
                <SPAN onClick={() => handleProductsPerPageChange(3)}>3</SPAN>
                <SPAN onClick={() => handleProductsPerPageChange(4)}>4</SPAN>
                <SPAN onClick={() => handleProductsPerPageChange(5)}>5</SPAN>
                <SPAN onClick={() => handleProductsPerPageChange(6)}>6</SPAN>
            </Filter>
            {/*<Container>{filteredProducts.map(p => <P key={p.id}>{p.name}</P>)}</Container>*/}
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
const P = styled.p`
  margin: 15px;`
;
const SPAN = styled.span`
  margin: 5px;
    cursor: pointer;
    `
;

/*
const H1 = styled.h1`
    margin: 0;`
;
const H2 = styled.h2`
    width: 300px;
    text-align: justify;
    hyphens: auto;`
;
const Img = styled.img`
width: 300px;`
;*/
