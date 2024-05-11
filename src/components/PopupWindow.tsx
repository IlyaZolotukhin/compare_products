import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";

type PopupWindowType = {
    onClose: () => void
    top: number
    left: number
}

export const PopupWindow = ({onClose, top, left}: PopupWindowType) => {
    const handleBlur = () => {
        onClose();
    };
    const products = useSelector((state: AppRootStateType) => state.pageReducer.products);
    const productsPerPage = useSelector((state: AppRootStateType) => state.pageReducer.productsPerPage);
    const PopupProducts = products.slice(productsPerPage);
    /*dispatch(setSelectedProductsAC(PopupProducts))*/
    console.log(PopupProducts)
    return (
        <Popup onBlur={handleBlur} tabIndex={0} top={top} left={left}>
            <Container>
                <table>
                    <tbody>
                    <TdArrow>
                        {PopupProducts.map(product => (
                            <tr key={product.id}>{'⇄'}</tr>
                        ))}
                    </TdArrow>
                    <td>
                        {PopupProducts.map(product => (
                            <tr key={product.id}>{product.name}</tr>
                        ))}
                    </td>
                    <td>
                            {PopupProducts.map(product => (
                                <tr key={product.id}>{product.releaseYear}</tr>
                            ))}
                        </td>
                    <td>
                        {PopupProducts.map(product => (
                            <tr key={product.id}>{product.screenSize}</tr>
                        ))}
                    </td>
                    </tbody>
                </table>
            </Container>
        </Popup>
    );
}

const Popup = styled.div<{ top: number, left: number }>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: white;
  z-index: 100;
  width: 421px;
  height: 336px;
  padding: 20px;
  border: 1px #E3E3E3 solid;
  border-radius: 4px;
`;
const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center`
;
const TdArrow = styled.td`
color: #36935B;
    font-weight: bold`
;