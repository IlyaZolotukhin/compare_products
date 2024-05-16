import React from 'react';
import styled from "styled-components";

type HeaderType = {
    handleClosePopup: () => void;
}

export const Header = ({handleClosePopup}: HeaderType) => {

    return (
        <Container onClick={handleClosePopup}>
            <ContainerLeft>
                <p>Каталог</p>
            </ContainerLeft>
            <ContainerRight>
                <p>СРАВНЕНИЕ</p>
                <p>Личный кабинет 👤</p>
            </ContainerRight>
        </Container>
    );
}

const Container = styled.div`
  
  width: 100%;
  font-weight: bold;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    border-bottom: 1px #A6A5A9 solid`
;
const ContainerLeft = styled.div`
  color: #0D5ADC;
  margin-left: 165px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (width <= 1024px) {
    margin-left: 5px;
  }`
;
const ContainerRight = styled.div`
  margin-right: 165px;
  display: flex;
  gap: 118px;
  flex-direction: row;
  align-items: center;
  @media screen and (width <= 1024px) {
    margin-right: 15px;
    gap: 20px;
  }`
;