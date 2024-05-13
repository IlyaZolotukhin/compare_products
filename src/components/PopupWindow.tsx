import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {changeProductPopupAC, setPopupProductsAC} from "../store/reducers";
import {Types} from "../types/types";

type PopupWindowType = {
    onClose: () => void
    top: number
    left: number
}

export const PopupWindow = ({onClose, top, left}: PopupWindowType) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [hideEl, setHideEl] = useState(false);
    const [productId, setProductId] = useState<number | null>(null);

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (e.target.tagName !== 'INPUT') {
            onClose();
        }
    };
    const products = useSelector((state: AppRootStateType) => state.pageReducer.products);
    const productsPerPage = useSelector((state: AppRootStateType) => state.pageReducer.productsPerPage);
    const productTable = useSelector((state: AppRootStateType) => state.pageReducer.changeProductTable);
    const PopupProducts = products.slice(productsPerPage);

    const filteredProducts = PopupProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(() => {
        if (filteredProducts.length > 3) {
            setHideEl(true);
        } else {
            setHideEl(false);
        }
    }, [filteredProducts]);

    const handleProductChange = (product: Types, id: number) => {
        setProductId(id)
        dispatch(changeProductPopupAC(product))
        onClose();
    }
    console.log(productTable)
    useEffect(() => {
                    let indexToReplace = PopupProducts.findIndex(product => product.id === productId);
                    if (indexToReplace !== -1) {
                        const updatedProduct = productTable;
                        const updatedProducts = [...PopupProducts];
                        updatedProducts[indexToReplace] = updatedProduct;
                        dispatch(setPopupProductsAC(updatedProducts));
                }
    }, [productId]);

    return (
        <Popup onBlur={handleBlur} tabIndex={0} top={top} left={left} hideEl={hideEl}>
            {hideEl && <INPUT type="text"
                    placeholder="Поиск"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>}
            <Container>
                <div>
                {filteredProducts.map(product => (
                    <Arrow onClick={() => handleProductChange(product, product.id)} key={product.id}>⇄</Arrow>
                ))}
            </div>
                <div>
                {filteredProducts.map(product => (
                    <div key={product.id}><IMG src={product.image} alt={product.name}/></div>
                ))}
                </div>
                <div>
                {filteredProducts.map(product => (
                    <Container2 key={product.id}>{product.name}</Container2>
                ))}
                </div>
            </Container>
        </Popup>
    );
}

const Popup = styled.div<{ top: number, left: number, hideEl: boolean }>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: white;
  z-index: 100;
  width: 421px;
  height: 220px;
  padding: 5px;
  border: 1px #E3E3E3 solid;
  border-radius: 4px;
  overflow-y: ${(props) => props.hideEl? 'scroll': 'none'};
`;
const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center`
;
const Container2 = styled.div`
width: 200px;
  padding: 20px;
`
;
const Arrow = styled.div`
  padding: 20px;
  color: #36935B;
  font-weight: bold;
  cursor: pointer`
;
const IMG = styled.img`
  margin: 5px;
  width: 50px;
  height: 50px;`
;
const INPUT = styled.input`
  margin: 10px 0 0 10px;
  width: 364px;
  height: 25px;
  border: 1px #C1C1C1 solid;`
;