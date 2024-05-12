import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import styled from "styled-components";
import {Filter} from "../components/ProductCard";
import {PopupWindow} from "./PopupWindow";
import {setSelectedProductsAC} from "../store/reducers";

type ComparisonTableType = {
    isPopupOpen: boolean;
    setIsPopupOpen: (value: boolean) => void;
}

export const ComparisonTable = ({isPopupOpen, setIsPopupOpen}: ComparisonTableType) => {
    const products = useSelector((state: AppRootStateType) => state.pageReducer.products);
    const productsPerPage = useSelector((state: AppRootStateType) => state.pageReducer.productsPerPage);
    const selectedProducts = useSelector((state: AppRootStateType) => state.pageReducer.selectedProducts);
    const ChangeProduct = useSelector((state: AppRootStateType) => state.pageReducer.changeProduct);
    const dispatch = useDispatch();

    const [popupPosition, setPopupPosition] = useState({top: 0, left: 0});
    const [allReleaseYearsEqual, setAllReleaseYearsEqual] = useState(false);
    const [allScreenSizesEqual, setAllScreenSizesEqual] = useState(false);
    const [allCountriesEqual, setAllCountriesEqual] = useState(false);
    const [allManufacturerEqual, setAllManufacturerEqual] = useState(false);
    const [allMemoryEqual, setAllMemoryEqual] = useState(false);
    const [allRefreshRateEqual, setAllRefreshRateEqual] = useState(false);
    const [allNfcEqual, setAllNfcEqual] = useState(false);
    const [allEsimSupportEqual, setAllEsimSupportEqual] = useState(false);
    const [allWirelessChargingEqual, setAllWirelessChargingEqual] = useState(false);
    const [allPriceEqual, setAllPriceEqual] = useState(false);
    const [productId, setProductId] = useState<number | null>(null);
    const buttonRef = useRef(null);

    // Фильтрация массива продуктов с учетом выбранного количества на странице
    const filteredProducts = products.slice(0, productsPerPage);

    useEffect(() => {
        dispatch(setSelectedProductsAC(filteredProducts))
    }, [productsPerPage]);

    useEffect(() => {
        let indexToReplace = selectedProducts.findIndex(product => product.id === productId);
        if (indexToReplace !== -1) {
            const updatedProduct = ChangeProduct;
            const updatedProducts = [...selectedProducts];
            updatedProducts[indexToReplace] = updatedProduct;
            dispatch(setSelectedProductsAC(updatedProducts));
        }
    }, [ChangeProduct, selectedProducts]);

    const handleOpenPopup = (e: React.MouseEvent<HTMLSpanElement>, id: number) => {
        setProductId(id)
        setIsPopupOpen(true);
        const buttonRect = (e.target as HTMLElement).getBoundingClientRect();
        setPopupPosition({top: buttonRect.top, left: buttonRect.right - 40});
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleCompareRow = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;

        setAllReleaseYearsEqual(isChecked ? selectedProducts.every(product => product.releaseYear === selectedProducts[0].releaseYear) : false);
        setAllScreenSizesEqual(isChecked ? selectedProducts.every(product => product.screenSize === selectedProducts[0].screenSize) : false);
        setAllCountriesEqual(isChecked ? selectedProducts.every(product => product.country === selectedProducts[0].country) : false);
        setAllManufacturerEqual(isChecked ? selectedProducts.every(product => product.manufacturer === selectedProducts[0].manufacturer) : false);
        setAllMemoryEqual(isChecked ? selectedProducts.every(product => product.memory === selectedProducts[0].memory) : false);
        setAllRefreshRateEqual(isChecked ? selectedProducts.every(product => product.refreshRate === selectedProducts[0].refreshRate) : false);
        setAllNfcEqual(isChecked ? selectedProducts.every(product => product.nfc === selectedProducts[0].nfc) : false);
        setAllEsimSupportEqual(isChecked ? selectedProducts.every(product => product.esimSupport === selectedProducts[0].esimSupport) : false);
        setAllWirelessChargingEqual(isChecked ? selectedProducts.every(product => product.wirelessCharging === selectedProducts[0].wirelessCharging) : false);
        setAllPriceEqual(isChecked ? selectedProducts.every(product => product.price === selectedProducts[0].price) : false);
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
                            {product.image}<span ref={buttonRef} onClick={(e) => handleOpenPopup(e, product.id) }> open</span>
                        </td>
                    ))}

                </tr>
                <tr>
                    <TD><Filter onClick={handleClosePopup}><input onChange={handleCompareRow} type={"checkbox"}/> Показать различия</Filter></TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.name}</TD>
                    ))}
                </tr>
                </thead>
                <tbody onClick={handleClosePopup}>
                {allManufacturerEqual? null:(<tr>
                    <TD>ПРОИЗВОДИТЕЛЬ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.manufacturer}</TD>
                    ))}
                </tr>)}
                {allReleaseYearsEqual? null:(
                    <tr>
                        <TD>ГОД РЕЛИЗА</TD>
                        {selectedProducts.map(product => (
                            <TD key={product.id}>{product.releaseYear}</TD>
                        ))}
                    </tr>
                )}
                {allScreenSizesEqual? null:(<tr>
                    <TD>ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.screenSize}</TD>
                    ))}
                </tr>)}
                {allCountriesEqual? null:(<tr>
                    <TD>СТРАНА-ПРОИЗВОДИТЕЛЬ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.country}</TD>
                    ))}
                </tr>)}
                {allMemoryEqual? null:(<tr>
                    <TD>ОБЪЁМ ПАМЯТИ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.memory}</TD>
                    ))}
                </tr>)}
                {allRefreshRateEqual? null:(<tr>
                    <TD>ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.refreshRate}</TD>
                    ))}
                </tr>)}
                {allNfcEqual? null:(<tr>
                    <TD>NFC</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.nfc ? <p>✅</p> : <p>❌</p>}</TD>
                    ))}
                </tr>)}
                {allEsimSupportEqual?  null:(<tr>
                    <TD>ПОДДЕРЖКА ESIM</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.esimSupport ? <p>✅</p> : <p>❌</p>}</TD>
                    ))}
                </tr>)}
                {allWirelessChargingEqual? null:(<tr>
                    <TD>ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.wirelessCharging ? <p>✅</p> : <p>❌</p>}</TD>
                    ))}
                </tr>)}
                {allPriceEqual? null:(<tr>
                    <TD>СТОИМОСТЬ</TD>
                    {selectedProducts.map(product => (
                        <TD key={product.id}>{product.price}</TD>
                    ))}
                </tr>)}
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
