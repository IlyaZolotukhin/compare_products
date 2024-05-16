import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import styled from "styled-components";
import {Filter} from "../components/ProductCard";
import {PopupWindow} from "./PopupWindow";
import {TProduct} from "../types/TProduct";
import {setChangedProductsAC, setProductTableAC, setSelectedProductsAC} from "../store/actionsCreator";

type ComparisonTableType = {
    isPopupOpen: boolean;
    setIsPopupOpen: (value: boolean) => void;
}

export const ComparisonTable = ({isPopupOpen, setIsPopupOpen}: ComparisonTableType) => {
    const productsPerPage = useSelector((state: AppRootStateType) => state.pageReducer.productsPerPage);
    const selectedProducts = useSelector((state: AppRootStateType) => state.pageReducer.selectedProducts);
    const ChangeProductPopup = useSelector((state: AppRootStateType) => state.pageReducer.changeProduct);
    const products = useSelector((state: AppRootStateType) => state.pageReducer.products);
    const dispatch = useDispatch();

    /*const [isPopupOpen, setIsPopupOpen] = useState(false);*/
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

    useEffect(() => {
        dispatch(setSelectedProductsAC(productsPerPage))
    }, [productsPerPage]);

    useEffect(() => {
        let indexToReplace = selectedProducts.findIndex(product => product.id === productId);
        if (indexToReplace !== -1) {
            const updatedProduct = ChangeProductPopup;
            const updatedProducts = [...selectedProducts];
            updatedProducts[indexToReplace] = updatedProduct;
            dispatch(setChangedProductsAC(updatedProducts));
        }
    }, [ChangeProductPopup, selectedProducts]);

/*    useEffect(() => {
        dispatch(deleteProductPopupAC(ChangeProductPopup.id));
    }, [ChangeProductPopup]);*/

    const handleOpenPopup = (e: React.MouseEvent<HTMLSpanElement>, id: number, product: TProduct) => {
        dispatch(setProductTableAC(product))
        setProductId(id)

        setIsPopupOpen(true);
        const buttonRect = (e.target as HTMLElement).getBoundingClientRect();
        setPopupPosition({top: buttonRect.top + 10, left: buttonRect.right - 20});
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

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsPopupOpen(false);
        }
    };

    return (<>
        {isPopupOpen && <PopupWindow onClose={handleClosePopup} top={popupPosition.top} left={popupPosition.left} />}
        <Container onBlur={handleClosePopup}>
            <table>
                <thead>
                <tr>
                    <td onClick={closeModal}></td>
                    {selectedProducts.map(product => (
                        <td key={product.id}>
                             <TDImg><IMG onClick={handleClosePopup} src={product.image} alt={product.name}/>{products.length !== productsPerPage && <Shevron ref={buttonRef}
                              onClick={(e) => handleOpenPopup(e, product.id, product) }> &#8964;</Shevron>}</TDImg>
                        </td>
                    ))}

                </tr>
                <tr>
                    <TD><Filter onClick={handleClosePopup}><input onChange={handleCompareRow} type={"checkbox"}/> Показать различия</Filter></TD>
                    {selectedProducts.map(product => (
                        <TD onClick={handleClosePopup} key={product.id}>{product.name}</TD>
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
        </>
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
  width: 205px;
  padding: 10px 40px 10px 0;
  border-bottom: 1px #A6A5A9 solid`
;
const IMG = styled.img`
  width: 60px;
  height: 60px;`
;
const TDImg = styled.div`
  display: flex;
    flex-direction: row;
    align-items: center`
;
const Shevron = styled.span`
  margin: 5px;
  font-size: 30px;
  color: #0D5ADC;
  cursor: pointer;`
;
