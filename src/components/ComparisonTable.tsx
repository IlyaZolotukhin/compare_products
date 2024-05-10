import React, {useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import styled from "styled-components";
import {Filter} from "../components/ProductCard";
import {PopupWindow} from "./PopupWindow";


export const ComparisonTable = () => {
    const selectedProducts = useSelector((state: AppRootStateType) => state.pageReducer.selectedProducts);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupPosition, setPopupPosition] = useState({top: 0, left: 0});
    const buttonRef = useRef(null);

    const handleOpenPopup = (e: React.MouseEvent<HTMLSpanElement>) => {
        setIsPopupOpen(true);
        const buttonRect = (e.target as HTMLElement).getBoundingClientRect();
        setPopupPosition({top: buttonRect.top, left: buttonRect.right - 40});
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <Container>
            {isPopupOpen && <PopupWindow onClose={handleClosePopup} top={popupPosition.top} left={popupPosition.left} />}
            <table>
                <thead>
                <tr>
                    <td></td>
                    {selectedProducts.map(product => (
                        <td key={product.id}>
                            {product.image}<span ref={buttonRef} onClick={handleOpenPopup}> open</span>
                        </td>
                    ))}

                </tr>
                <tr>
                    <TD><Filter><input type={"checkbox"}/> Показать различия</Filter></TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.name}</TD>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <TD>ПРОИЗВОДИТЕЛЬ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.manufacturer}</TD>
                    ))}
                </tr>
                <tr>
                    <TD>ГОД РЕЛИЗА</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.releaseYear}</TD>
                    ))}
                </tr>
                <tr>
                    <TD>ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.screenSize}</TD>
                    ))}
                </tr>
                <tr>
                    <TD>СТРАНА-ПРОИЗВОДИТЕЛЬ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.country}</TD>
                    ))}
                </tr>
                <tr>
                    <TD>ОБЪЁМ ПАМЯТИ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.memory}</TD>
                    ))}
                </tr>
                <tr>
                    <TD>ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.refreshRate}</TD>
                    ))}
                </tr>
                <tr>
                    <TD>NFC</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.nfc ? <p>✅</p> : <p>❌</p>}</TD>
                    ))}
                </tr>
                <tr>
                    <TD>ПОДДЕРЖКА ESIM</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.esimSupport ? <p>✅</p> : <p>❌</p>}</TD>
                    ))}
                </tr>
                <tr>
                    <TD>ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.wirelessCharging ? <p>✅</p> : <p>❌</p>}</TD>
                    ))}
                </tr>
                <tr>
                    <TD>СТОИМОСТЬ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.price}</TD>
                    ))}
                </tr>
                </tbody>
            </table>
        </Container>
    );
}

const Container = styled.div`
  width: 50%;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center`
;


const TD = styled.td`
  border-bottom: 1px #A6A5A9 solid`
;
