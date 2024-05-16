import {
    ChangedProductsType, ChangeProductPopupType,
    ChangeProductTableType, deleteProductPopupType, SetChangedPopupType, setPopupProductsType,
    SetProductsPerPageType,
    SetSelectedProducts
} from "../types/reducerType";
import {TProduct} from "../types/TProduct";

export const setProductsPerPageAC = (perPage: number): SetProductsPerPageType => {
    return {type: 'SET_PRODUCTS_PER_PAGE', perPage: perPage}
}
export const setChangedProductsAC = (products: TProduct[]): ChangedProductsType => {
    return {type: 'SET_CHANGED_PRODUCTS', products: products}
}
export const setSelectedProductsAC = (productsPerPage: number): SetSelectedProducts => {
    return {type: 'SET_SELECTED_PRODUCTS', productsPerPage: productsPerPage}
}

export const setProductTableAC = (product: TProduct): ChangeProductTableType => {
    return {type: 'CHANGE_PRODUCT_TABLE', product: product}
}
export const changeProductPopupAC = (product: TProduct): ChangeProductPopupType => {
    return {type: 'CHANGE_PRODUCT_POPUP', product: product}
}
export const setChangedPopupAC = (products: TProduct[]): SetChangedPopupType => {
    return {type: 'SET_CHANGED_POPUP', products: products}
}
export const setPopupProductsAC = (productsPerPage: number): setPopupProductsType => {
    return {type: 'SET_POPUP_PRODUCTS', productsPerPage: productsPerPage}
}
export const deleteProductPopupAC = (id: number | null): deleteProductPopupType => {
    return {type: 'DELETE_POPUP_PRODUCTS', id: id}
}