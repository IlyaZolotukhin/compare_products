import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {TProduct} from "../types/TProduct";
import {changeProductPopupAC, deleteProductPopupAC, setPopupProductsAC} from "../store/actionsCreator";

type PopupWindowType = {
    onClose: () => void
    top: number
    left: number
}

export const PopupWindow = ({onClose, top, left}: PopupWindowType) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [hide, setHide] = useState<boolean>(false);
    const [productId, setProductId] = useState<number | null>(null);

    const productsPerPage = useSelector((state: AppRootStateType) => state.pageReducer.productsPerPage);
    const changeProduct = useSelector((state: AppRootStateType) => state.pageReducer.changeProduct);
    const popupProducts = useSelector((state: AppRootStateType) => state.pageReducer.popupProducts);

    useEffect(() => {
        dispatch(setPopupProductsAC(productsPerPage));
    }, [productsPerPage]);

    const handleProductChange = (product: TProduct, id: number) => {

        setProductId(id)
        dispatch(changeProductPopupAC(product))
        onClose();
    }

    useEffect(() => {
        dispatch(deleteProductPopupAC(productId))
    }, [productId]);



    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (e.target.tagName !== 'INPUT') {
            onClose();
        }
    };

        const filteredProducts = popupProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .filter(product => product.id !== changeProduct.id);

        useEffect(() => {
            if (popupProducts.length > 3) {
                setHide(true);
            } else {
                setHide(false);
            }
        }, [filteredProducts]);

    return (
        <Popup onBlur={handleBlur} tabIndex={0} top={top} left={left} hide={hide}>
            {hide && <INPUT type="text"
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
                        <Name key={product.id}>{product.name}</Name>
                    ))}
                </div>
            </Container>
        </Popup>
    );
}

const Popup = styled.div<{ top: number, left: number, hide: boolean }>`
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
  overflow-y: ${(props) => props.hide ? 'scroll' : 'none'};
`;
const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center`
;
const Name = styled.div`
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
