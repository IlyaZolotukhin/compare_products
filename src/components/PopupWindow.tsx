import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {changeProductIdAC} from "../store/reducers";
import {Types} from "../types/types";

type PopupWindowType = {
    onClose: () => void
    top: number
    left: number
}

export const PopupWindow = ({onClose, top, left}: PopupWindowType) => {
    const dispatch = useDispatch();
    const handleBlur = () => {
        onClose();
    };
    const products = useSelector((state: AppRootStateType) => state.pageReducer.products);
    const productsPerPage = useSelector((state: AppRootStateType) => state.pageReducer.productsPerPage);
    const PopupProducts = products.slice(productsPerPage);
    const handleProductChange = (product: Types) =>{
        dispatch(changeProductIdAC(product))
        onClose();
    }

    return (
        <Popup onBlur={handleBlur} tabIndex={0} top={top} left={left}>
            <Container>
                <table>
                    <tbody>
                    <td>
                        {PopupProducts.map(product => (
                            <TrArrow onClick={() => handleProductChange(product)} key={product.id}>⇄</TrArrow>
                        ))}
                    </td>
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
const TrArrow = styled.tr`
color: #36935B;
    font-weight: bold`
;